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
      <section>

      <HeroSwiper imageSources={swiperSources}/>
      {/* <div className="absolute z-50 top-1/2 ">
        <p className="text-white text-3xl text-left ml-14">THE NEW</p>
        <span className="text-white text-7xl text-center">Center of L.A. Culture</span>
      </div> */}
      </section>
    </div>
  )
}

export default Homepage
