import Hero from './components/Hero'
import Cards from './components/Cards'
import HowItWorks from './components/videosection'
import Pricing from './components/Pricing'
import FAQsection from './components/FAQsection'
import Calltoaction from './components/Calltoaction'
import Footer from './components/Footer'
import Bentogrid from './components/Bentogrid'
export default function Home() {
  return (
    <>
      <Hero />
      <Cards />
      <HowItWorks />
      <Bentogrid />
      <Pricing />
      <FAQsection />
      <Calltoaction />
      <Footer />
    </>
  )
}
