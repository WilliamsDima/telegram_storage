import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { AuthProvider } from '@hooks/useAuth'
import { storeWrapper } from '@stores/index'

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
