import AppContext from "@/context/context"
import { useContext, useEffect, useState } from "react"
import Loading from "./loading"
import AnnotationInput from "./annotation_input"
import AnnotationCloud from "./annotation_cloud"

export default function ComicsInput(props) {
    const [annotating, setAnnotating] = useState(false)
    const [url, setUrl] = useState('/placeholder.png')
    const [isLoading, setIsLoading] = useState(false)
    const context = useContext(AppContext)
    useEffect(
        () => {
            console.log('The props.url ', props.url)
            if (props.url != null) setUrl(props.url)
        }, []
    )
    console.log('key is ', props.index)
    const [prompt, setPrompt] = useState(props.prompt)
    const updateElement = async () => {
        try {
            console.log('Puting request')
            setIsLoading(true)

            const response = await fetch("https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
                {
                    headers: {
                        "Accept": "image/png",
                        "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify({ "inputs": prompt }),
                }
            )
            const result = await response.blob()
            console.log('The result ', result)
            const img = URL.createObjectURL(result)
            setUrl(img)
            const tmp = [...context.comicsList]
            tmp[props.index].url = img
            context.setComicsList(tmp)
        }
        catch (exception) {
            console.log('Exception ', exception)
        }
        finally {
            setIsLoading(false)
        }
    }
    const addAnnotation = (text)=>{
        setAnnotating(false)
        if (text == '') text = null
        const tmp = [...context.comicsList]
        console.log('annotation is ', text)
        tmp[props.index].annotation = text
        context.setComicsList(tmp)
    }
    return <div className="relative  md:mx-auto ">
        <div className="md:h-[18rem] lg:h-[24rem] md:overflow-hidden">
            {props.annotation != null && <AnnotationCloud annotation={props.annotation}/>}
            {!annotating ? <button
                onClick={()=>setAnnotating(true)}
                class="absolute top-2 right-2
                    bg-[#fbfbfb88] text-gray-600 px-4 py-2 rounded-lg cursor-pointer hover:bg-white">
                Annotate
            </button>
            :
            <AnnotationInput onClick={addAnnotation} annotation = {props.annotation}/>
            }


            {isLoading && <Loading className='absolute w-full h-[80%] left-1/2 transform -translate-x-1/2 p-3 bg-[#ffffff61] ' />}

            <img src={url} className=' w-full h-full' />
        </div>
        <textarea
            value={prompt}
            className=' w-full border p-3 mt-2   '
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter the prompt to generate image" rows={3} />

        {!isLoading ? <button
            className='absolute bottom-3 right-2 bg-gray-400 rounded-xl p-1 hover:bg-gray-600'
            onClick={updateElement}
        >
            <span class="material-symbols-outlined text-white">
                arrow_upward
            </span>
        </button>
            :
            <div className='absolute bottom-3 right-2 bg-gray-400 rounded-xl p-1' ><span class="material-symbols-outlined text-white">
                hourglass_bottom
            </span></div>
        }
    </div>
}