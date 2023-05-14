import React from "react";
import {MySlider} from "./Slider";

export const Card = ({title, description, image1, image2, image3}) => {
    const [show, setShow] = React.useState(false)
    return (
        <>
            <div onClick={() => setShow(true)}
                 className='cursor-pointer max-w-[300px] rounded-lg bg-[#f2dcb1] flex flex-col items-center shadow-[10px_14px_8px_0px_rgba(27,30,32,0.2)] mx-auto h-[100%]'>
                <div>
                    <img className='max-w-full w-full h-auto rounded-lg' src={image1}
                         alt="product"/>
                </div>
                <div className='mt-5 pb-3'>
                    <h3 className='text_color text-[24px] font-semibold px-3 text-center'>{title}</h3>
                </div>
            </div>
            <div onClick={() => setShow(false)}
                 className={show ? 'modal active' : 'modal'}>
                <div onClick={e => e.stopPropagation()}
                     className="modal_content p-5 rounded-xl bg-amber-50 max-w-[1000px] overflow-auto">
                    <div className='flex justify-between items-center'>
                        <h3 className='text-center text_color font-semibold text-[30px] mt-3'>{title}</h3>
                        <div onClick={()=>setShow(false)} className='max-w-[5%] cursor-pointer'>
                            <img className='max-w-full w-full h-auto' src="/assets/closeIcon.svg" alt="close"/>
                        </div>
                    </div>
                    <div className='max-w-[600px] mx-auto'>
                        <MySlider image1={image1} image2={image2} image3={image3}/>
                    </div>
                    <p className='mt-5 text_color font-medium text-[20px] text-justify'>{description}</p>
                </div>
            </div>
        </>
    )
}