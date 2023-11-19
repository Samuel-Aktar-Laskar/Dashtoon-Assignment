import { useEffect, useState } from "react"

export default function AnnotationInput(props) {
    const [annotation, setAnnotation] = useState(props.annotation)

    return <div className="absolute w-[80%] h-[20%] bg-[#fbfbfb94] top-2 right-2 rounded-xl">
        <textarea
            value={annotation}
            className=' w-4/5 border p-3 mx-auto  bg-transparent outline-none border-none '
            onChange={(e) => setAnnotation(e.target.value)}
            placeholder="Enter the text annotation" rows={2} />
        <button
            className='absolute bottom-3 right-2 bg-gray-500 rounded-xl p-1 hover:bg-gray-600'
            onClick={()=>props.onClick(annotation)}
        >
            <span class="material-symbols-outlined text-white font-bold">
                check
            </span>
        </button>
    </div>
}