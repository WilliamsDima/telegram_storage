import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { storeWrapper } from '../src/stores'
import Meta from '../src/components/atoms/Meta'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default storeWrapper.withRedux(App)
