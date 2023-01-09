import Navabr from '../components/navbar'

export default function App({ Component, pageProps }) {
  return (
  <>
  <Navabr/>
  <Component {...pageProps} />
  </>
  )
}
