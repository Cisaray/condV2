import React from "react";


export const Footer = () => {
    return(
        <footer className='mt-20 border-y-2 px-5'>
            <div className='max-w-[1100px] mx-auto flex justify-between items-center sm:justify-center'>
                <div className='max-w-[15%] sm:max-w-[25%]'>
                    <img className='max-w-full w-full h-auto' src="/assets/logo1.jpeg" alt="logo"/>
                </div>
                <div className='flex items-center justify-end sm:justify-center'>
                    <img className='max-w-[8%] w-full h-auto ' src="/assets/phone.svg" alt="phone"/>
                    <a className='text_color font-medium text-[20px]' href='tel:+79999999999'>+7 999
                        999-99-99</a>
                </div>
            </div>
        </footer>
    )
}