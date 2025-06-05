import Slider from "react-slick";

const SlideControl = () => {
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full h-[500px]">
       <Slider {...settings}>
          <div><img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/564e2e8a494413af7f03c5a1b5857d761c582c03-1280x720.jpg" alt="" /></div>
          <div><img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/564e2e8a494413af7f03c5a1b5857d761c582c03-1280x720.jpg" alt="" /></div>
          <div><img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/564e2e8a494413af7f03c5a1b5857d761c582c03-1280x720.jpg" alt="" /></div>
        </Slider>
    </div>
  )
}

export default SlideControl