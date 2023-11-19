import ButtonOutline from "@/components/button";
import ComicsInput from "@/components/comics_input";
import AppContext from "@/context/context";
import { Router, useRouter } from "next/router";
import { useContext } from "react";


export default function Home() {
  const context = useContext(AppContext)
  const router = useRouter()
  const addComics = (url, prompt)=>{
    context.setComicsList([...context.comicsList,{url:url,prompt:prompt,annotation:null}])
  }
  return (
  <section>
    <h2 className='font-semibold mt-10 text-xl mb-3'>CREATE COMICS</h2>
    <p className='text-sm text-gray-600 w-[85%] md:w-[70%]'>Start by adding comic panels by clicking on Add Comics. Describe the picture and character in the prompt and it will generate the drawing. <br></br> After you are done, click generate comics to finally view all comcis together</p>
    <div className='mt-10 md:grid md:grid-cols-2 md:gap-4'>
      {
        context.comicsList.map((item, index) => (
          <ComicsInput index={index} url={item.url} prompt={item.prompt} annotation={item.annotation}/>
        ))
      }
    </div>
    <ButtonOutline icon={true} text="Add Comics" onClick={()=>addComics('/placeholder.png',null)} />
    <ButtonOutline text ='Generate Comics' className='mt-6' onClick={()=>{router.push('/view_comics')}}/>
  </section> 
  )
}
