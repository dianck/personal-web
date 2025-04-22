// components/Testimonials.js
"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Image from 'next/image';

const testimonials = [
  {
    name: 'Dennis Jacques',
    role: 'User from USA',
    image: 'https://randomuser.me/api/portraits/men/32.jpg', // Ganti dengan path image kamu
    quote:
      'Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.',
  },
  {
    name: 'Jay Shah',
    role: 'Founder at Icomatic Pvt Ltd',
    image: 'https://randomuser.me/api/portraits/men/85.jpg', // Ganti dengan path image kamu
    quote:
      'Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.',
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // const SlickSlider = dynamic(() => import('react-slick'), {
  //   ssr: false,
  // })

  // const SlickSlider =  dynamic(() => import('./SlickSlider'), {
  //   ssr: false,
  // });

  return (
    <section className="w-[120%] mx-[calc(-10%)] md:mx-auto md:w-full md:max-w-7xl flex flex-col md:flex-row items-center justify-center p-6 gap-[10px]">
        <div className="w-full bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col items-center"> 
            {/* <section className="bg-white py-16 px-6 md:px-20 overflow-hidden relative"> */}
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-black relative inline-block">
                Client Speak
                <span className="block w-16 h-1 bg-indigo-600 mx-auto mt-2"></span>
                </h2>
                {/* <p className="text-5xl text-gray-200 font-extrabold relative top-[-70px] opacity-15">
                TESTIMONIAL
                </p> */}
                <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-6xl text-gray-200 font-extrabold opacity-10 z-0 pointer-events-none">
                  TESTIMONIAL
                </p>

            </div>

            {/* Centered Carousel */}
            <div className="w-full max-w-6xl mx-auto">
                {/* <Slider {...settings}> */}
                <Slider {...settings}>
                {testimonials.map((t, index) => (
                    <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 m-4 shadow-md flex flex-col gap-4 w-full max-w-md mx-auto"
                    >
                    <div className="flex items-center gap-4">
                        <Image
                        src={t.image}
                        alt={t.name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                        />
                        <div>
                        <h3 className="font-bold text-lg text-gray-900">{t.name}</h3>
                        <p className="text-sm text-gray-500">{t.role}</p>
                        </div>
                    </div>
                    <p className="text-gray-700">“{t.quote}”</p>
                    <div className="text-yellow-500 text-lg">★★★★★</div>
                    </div>
                ))}
                {/* </SlickSlider> */}
                </Slider>
            </div>
        </div>
    </section>

  );
}
