import ButtonOutline from "@/components/button";
import ComicsInput from "@/components/comics_input";
import AppContext from "@/context/context";
import { Router, useRouter } from "next/router";
import { useContext } from "react";


export default function Home() {
  const context = useContext(AppContext)
  const router = useRouter()
  const addComics = (url, prompt)=>{
    context.setComicsList([...context.comicsList,{url:url,prompt:prompt}])
  }
  return (
  <section>
    <h2 className='font-semibold mt-10 text-xl mb-10'>CREATE COMICS</h2>
    <div className='md:grid md:grid-cols-2 md:gap-4'>
      {
        context.comicsList.map((item, index) => (
          <ComicsInput index={index} url={item.url} prompt={item.prompt} />
        ))
      }
    </div>
    <ButtonOutline text="Add Comics" onClick={()=>addComics('/placeholder.png',null)} />
    <ButtonOutline text ='Generate Comics' className='mt-6' onClick={()=>{router.push('/view_comics')}}/>
  </section> 
  )
}
