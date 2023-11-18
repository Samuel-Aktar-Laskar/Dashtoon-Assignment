import ButtonOutline from '@/components/button'
import { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter()
  return (

        <section className=' mt-[25%]  md:mt-[10%]'>
          <h2 className='text-2xl mx-4 font-medium text-center md:text-left md:text-3xl'>Create comics using prompts</h2>
          <p className='mx-4 text-center mt-6 md:text-left md:w-[60%]'>This app lets you craete comics within 10mins. You have got a story, all you have to do is describe 
          each scene of the comics panel and our AI would draw memserizing characters and background for you</p>
          <ButtonOutline text='GET STARTED' 
          className='mx-auto mt-[4rem] md:mt-12 md:ml-5 w-[12rem]'
          onClick={()=>{router.push('/comics_form')}}
          />

        </section>

  )
}
