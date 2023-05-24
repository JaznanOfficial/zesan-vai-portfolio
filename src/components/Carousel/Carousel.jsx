"use client";
import apex from "/src/assets/images/Apex.png";
import krave from "/src/assets/images/Krave.png";
import lentho from "/src/assets/images/Lentho.png";
import smart from "/src/assets/images/smart-ix.png";
import takein from "/src/assets/images/Takein.png";
import togg from "/src/assets/images/Togg.png";
import uperstore from "/src/assets/images/Uperstore.png";
import vw from "/src/assets/images/VW.png";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };

    const items = [
        {
            img: apex,
            width: 300,
            height: 55,
            name: "apex",
        },
        {
            img: krave,
            width: 200,
            height: 55,
            name: "krave",
        },
        {
            img: lentho,
            width: 120,
            height: 55,
            name: "lentho",
        },
        {
            img: smart,
            width: 150,
            height: 55,
            name: "smart",
        },
        {
            img: takein,
            width: 250,
            height: 55,
            name: "takein",
        },
        {
            img: togg,
            width: 250,
            height: 55,
            name: "togg",
        },
        {
            img: uperstore,
            width: 300,
            height: 55,
            name: "upperstore",
        },
        {
            img: vw,
            width: 250,
            height: 55,
            name: "vw",
        },
    ];

    return (
        <div className="w-full bg-[#FAFAFA] py-5 my-10 h-24 items-center justify-center">
            <Slider {...settings} className="flex flex-row items-center">
                {items.map((item) => (
                    <div key={item.name} className="flex justify-center items-center w-24 h-24">
                        <Image
                            src={item?.img}
                            alt={item?.name}
                            width={item.width}
                            height={item.height}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;