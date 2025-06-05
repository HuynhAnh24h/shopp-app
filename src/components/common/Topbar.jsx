import Slider from "react-slick";
import TopbarContent from "../../constants/TopbarContent";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const languages = {
    en: "English",
    vi: "Tiếng Việt",
};

const Topbar = () => {
    const [language, setLanguage] = useState("en");

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        arrows: false,
    };

    return (
       <div className="bg-black text-white ">
         <div className="container mx-auto relative">
            <div className=" py-3 flex items-center justify-between">
                {/* Slider */}
                <div className="w-full">
                    <Slider {...settings}>
                        {TopbarContent.map((value) => (
                            <NavLink
                                to={value.path}
                                key={value.id}
                                className="block text-center rounded-md"
                            >
                                <p className="text-md font-medium">{value.content}</p>
                            </NavLink>
                        ))}
                    </Slider>
                </div>

                {/* Language Selector */}
                <div className="absolute right-0 top-[50%] transform -translate-y-1/2">
                    <button
                        onClick={() => setLanguage(language === "en" ? "vi" : "en")}
                        className="text-white border rounded-sm py-1 px-3 bg-black"
                    >
                        {languages[language]}
                    </button>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Topbar;
