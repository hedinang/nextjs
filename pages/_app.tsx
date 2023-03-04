import type { AppProps } from 'next/app'
import './scss/header.scss'
import './scss/create-social.scss'
import './scss/social-detail.scss'
import './scss/banner-modal.scss'
import './scss/message.scss'
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
