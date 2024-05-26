// import ReactSlick from "../../Components/ReactSlick/ReactSlick"
import HeroSwiper from "../../Components/Swiper/HeroSwiper"


const Homepage = () => {

    
  const swiperSources = [
    "https://i.ibb.co/jGqmgh4/delphi-homepage-header-02-64be922fb6da0.webp",
    "https://i.ibb.co/dgfMtzH/delphi-homepage-header-03-64be9232a7dca.webp",
    "https://i.ibb.co/qxhzH7Q/delphi-homepage-header-01-64be922c9b933.webp"

  ]
  return (
    <div>
      <HeroSwiper imageSources={swiperSources}/>
      {/* <ReactSlick imageSources={swiperSources}/> */}
    </div>
  )
}

export default Homepage
