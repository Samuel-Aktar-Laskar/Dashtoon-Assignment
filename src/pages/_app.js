import Header from '@/components/header'
import AppContext from '@/context/context'
import '@/styles/globals.css'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const [comicsList, setComicsList] = useState([])
  return <AppContext.Provider value={{comicsList,setComicsList}}>
      <Header/>
      <Component {...pageProps} ></Component>
    </AppContext.Provider>}
