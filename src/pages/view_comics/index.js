import AppContext from "@/context/context"
import { useContext, useState } from "react"

export default function Home() {
    const context = useContext(AppContext)
    const mat = [
        'col-span-2 md:col-span-1 lg:col-span-3 ',
        'col-span-1 md:col-span-1 lg:col-span-4 ',
        'col-span-1 md:col-span-1 lg:col-span-4 ',
        'col-span-2 md:col-span-2 lg:col-span-3 ',
        'col-span-1 md:col-span-1 lg:col-span-2 ',
        'col-span-1 md:col-span-1 lg:col-span-3 ',
        'col-span-1 md:col-span-2 lg:col-span-2 ',
        'col-span-1 md:col-span-1 lg:col-span-2 ',
        'col-span-2 md:col-span-1 lg:col-span-2 ',
        'col-span-1 md:col-span-1 lg:col-span-3 ',
        'col-span-1 md:col-span-1 lg:col-span-1 '
    ]

    return <section className="mx-auto">
        <div className="mx-auto w-[20rem] mb-10
       md:w-[40rem]
        lg:w-[60rem]">
            <h2 className='font-semibold mt-10 text-xl mb-3'>COMICS IS GENERATED</h2>
            <p className='text-sm text-gray-600 w-[85%] md:w-[70%]'>Congratulations! Your comcis is generated</p>
        </div>
        <div className="grid mx-auto w-[20rem] gap-2 border-[2px] border-gray-300 justify-center p-2 
        grid-cols-2
        md:grid-cols-3 md:w-[40rem]
        lg:w-[60rem] lg:grid-cols-7  
        ">
            {context.comicsList.map((value, key) =>
                <img src={value.url} key={key} className={`
            h-[12rem] w-[20rem] border-2 border-gray-400
            md:w-full
            lg:w-full lg:h-[16rem] 
            ${mat[key]}`
                } />
            )}
        </div>
    </section>
}