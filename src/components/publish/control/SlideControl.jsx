import Slider from "react-slick";

const SlideControl = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full p-5">
      <Slider {...settings}>
        {[
          "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/564e2e8a494413af7f03c5a1b5857d761c582c03-1280x720.jpg",
          "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg",
          "https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/484809148_1171243811453340_9018655190714146668_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=jZG39mZhbUoQ7kNvwFaF3Bq&_nc_oc=AdnO2n_riZSxUiNZo7tbR4xaacYdWK8tURS-Vmnavey1enIaKfD5a7fOPToTSKBoPls&_nc_zt=23&_nc_ht=scontent.fsgn4-1.fna&_nc_gid=F1BwQL-c-B5sQyvef8kPRA&oh=00_AfNNw4nYCMG7_bTbEqmxCtNm9Q4wW-GeKOauANlN3AMOrw&oe=68480A30"
        ].map((src, index) => (
          <div key={index} className="flex justify-center">
            <img src={src} alt={`Slide ${index}`} className="rounded-lg w-full  object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideControl;
