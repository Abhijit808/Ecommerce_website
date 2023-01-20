import '../styles/globals.css'
import Navbar from "../components/navbar/Navbar"
import Footer from '../components/Footer/Footer'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import "swiper/css/bundle";
export default function App({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider>
      <Navbar/>
       <Component {...pageProps} />
       <Footer/>
    </ChakraProvider>
  )
}
