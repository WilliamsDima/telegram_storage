import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { storeWrapper } from '../src/stores'
import { AuthProvider } from '../src/hooks/useAuth'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default storeWrapper.withRedux(App)
