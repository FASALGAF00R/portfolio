import { ChevronLeft, ChevronRight } from "lucide-react";

export const settingsSlider6 = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    nextArrow: (
        <ChevronRight className="w-6 h-6 text-white bg-white rounded-full shadow-lg" />
    ),
    prevArrow: (
        <ChevronLeft className="w-6 h-6 text-white bg-white rounded-full shadow-lg" />
    ),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

export const settingsSlider4 = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: (
        <ChevronRight className="w-6 h-6 text-gray-600 bg-white rounded-full shadow-lg" />
    ),
    prevArrow: (
        <ChevronLeft className="w-6 h-6 text-gray-600 bg-white rounded-full shadow-lg" />
    ),
    responsive: [
        {
            breakpoint: 1470,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 1120,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

export const settingsSlider3 = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: (
        <ChevronRight className="w-6 h-6 text-gray-600 bg-white rounded-full shadow-lg" />
    ),
    prevArrow: (
        <ChevronLeft className="w-6 h-6 text-gray-600 bg-white rounded-full shadow-lg" />
    ),
    responsive: [
        {
            breakpoint: 1120,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

export const animationConfig = {
    initial: {
        opacity: 0,
        y: 15,
    },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            delay: 0.4,
        },
    },
};

export const animationConfigText = {
    initial: {
        opacity: 0,
        x: 15,
    },
    whileInView: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            delay: 0.4,
        },
    },
};