import HeroSection from "../components/home/HeroSection"
import WhatWeOffer from "../components/home/WhatWeOffer"
import HowToPlay from "../components/home/HowToPlay"
// import Testimonials from "../components/home/Testimonials"
import DownloadApp from "../components/home/DownloadApp"
import Disclaimer from "../components/home/Disclaimer"

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <WhatWeOffer />
      <HowToPlay />
      {/* <Testimonials /> */}
      <DownloadApp />
      <Disclaimer />
    </div>
  )
}

export default Home