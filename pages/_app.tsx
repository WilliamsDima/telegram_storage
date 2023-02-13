import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { storeWrapper } from '../src/stores';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default storeWrapper.withRedux(App);