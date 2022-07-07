import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { GlobalStyles } from '../styles/globals'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <><GlobalStyles/><Component {...pageProps} /></>
}

export default MyApp
