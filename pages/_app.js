import { ThemeProvider } from 'next-themes'
import { Layout } from '../components'
import '../styles/index.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <Layout><Component {...pageProps} /></Layout>
      </ThemeProvider>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
    </>
  )
}

export default MyApp
