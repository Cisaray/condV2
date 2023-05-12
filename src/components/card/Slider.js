import Slider from "react-slick";

export const MySlider = ({image1, image2, image3}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <Slider {...settings}>
            <div className='max-w-[70%]'>
                <img className='max-w-full w-full h-auto rotate-270' src={image1} alt="img"/>
            </div>
            {image2&&<div className='max-w-[70%]'>
                <img className='max-w-full w-full h-auto rotate-270' src={image2} alt="img"/>
            </div>}
            {image3&&<div className='max-w-[70%]'>
                <img className='max-w-full w-full h-auto rotate-270' src={image3} alt="img"/>
            </div>}
        </Slider>
    )
}