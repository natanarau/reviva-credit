import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { CardProvider } from 'contexts/Contexts';
import { GlobalStyles } from '../styles/globals'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return
  <>
    <CardProvider><GlobalStyles /><Component {...pageProps} /></CardProvider>
  </>
}

export default MyApp
