import React from "react";
import {Link} from "react-router-dom";


export const Home = ({contacts}) => {
    return (
        <>
            {/*Section 1*/}
            <section className='bg-firstBgImg bg-cover bg-center pb-[80px]'>
                <div className='text-center pt-[100px] max-w-[570px] mx-auto'>
                    <h2 className='font-semibold text_color text-[40px]'>Пекарня Чудо-Печь</h2>
                    <p className='text-[#f0e9e9] mt-6 text-[18px] italic'></p>
                </div>
                <div className="grid grid-cols-3 px-[195px] items-center mt-10 gap-10 sm:grid-cols-1 md:px-[30px]">
                    <div
                        className='flex flex-col items-center shadow-[20px_20px_4px_0px_rgba(0,4,7,0.5)] backdrop-blur-xl p-5 rounded-[20px] h-[100%]'>
                        <div>
                            <img className='max-w-[62%] w-full h-auto mx-auto ' src="/assets/icon1.svg" alt="icon1"/>
                        </div>
                        <div className='text-center'>
                            <h3 className='text_color italic text-[20px] mt-5 font-bold'>Собственное производство</h3>
                        </div>
                    </div>
                    <div
                        className='flex flex-col items-center backdrop-blur-xl shadow-[20px_20px_4px_0px_rgba(0,4,7,0.5)] p-5 rounded-[20px] h-[100%]'>
                        <div>
                            <img className='max-w-[65%] w-full h-auto mx-auto' src="/assets/icon2.svg" alt="icon1"/>
                        </div>
                        <div className='text-center'>
                            <h3 className='text_color italic text-[20px] mt-5 font-bold'>Без заморозки и использования
                                полуфабрикатов</h3>
                        </div>
                    </div>
                    <div
                        className='flex flex-col items-center backdrop-blur-xl shadow-[20px_20px_4px_0px_rgba(0,4,7,0.5)] p-5 rounded-[20px] h-[100%]'>
                        <div>
                            <img className='max-w-[67%] w-full h-auto mx-auto' src="/assets/icon3.svg" alt="icon1"/>
                        </div>
                        <div className='text-center'>
                            <h3 className='text_color italic text-[20px] mt-5 font-bold'>Производство из натуральных
                                продуктов</h3>
                        </div>
                    </div>
                </div>
            </section>
            {/*section 2*/}
            <section>
                <div className='max-w-[1040px] mx-auto mt-10 px-5'>
                    <div className='grid grid-cols-3 items-center gap-10'>
                        <div
                            className='h-[100%] rounded-lg bg-[#f2dcb1] flex flex-col items-center shadow-[10px_14px_8px_0px_rgba(27,30,32,0.2)]'>
                            <div>
                                <img className='max-w-full w-full h-auto rounded-lg' src="/assets/product1.JPG"
                                     alt="product1"/>
                            </div>
                            <div className='mt-5 pb-3'>
                                <h3 className='text_color text-[24px] font-semibold px-3 text-center'>Название</h3>
                                <p className='text_color text-[18px] italic mt-3 px-3 text-center'>Описание товара</p>
                            </div>
                        </div>
                        <div
                            className='h-[100%] rounded-lg bg-[#f2dcb1] flex flex-col items-center shadow-[10px_14px_8px_0px_rgba(27,30,32,0.2)]'>
                            <div>
                                <img className='max-w-full w-full h-auto rounded-lg' src="/assets/product2.JPG"
                                     alt="product2"/>
                            </div>
                            <div className='mt-5 pb-3'>
                                <h3 className='text_color text-[24px] font-semibold px-3 text-center'>Название</h3>
                                <p className='text_color text-[18px] italic mt-3 px-3 text-center'>Описание товара</p>
                            </div>
                        </div>
                        <div
                            className='h-[100%] rounded-lg bg-[#f2dcb1] flex flex-col items-center shadow-[10px_14px_8px_0px_rgba(27,30,32,0.2)]'>
                            <div>
                                <img className='max-w-full w-full h-auto rounded-lg' src="/assets/product3.JPG"
                                     alt="product3"/>
                            </div>
                            <div className='mt-5 pb-3'>
                                <h3 className='text_color text-[24px] font-semibold px-3 text-center'>Название</h3>
                                <p className='text_color text-[18px] italic mt-3 px-3 text-center'>Описание товара</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <Link to='/products'>
                            <button
                                className='text_color px-[36px] font-semibold py-[12px] bg-[#f2dcb1] rounded-lg mt-10 border-2 border-[#703501] hover:bg-[#703501] hover:text-[#f2dcb1] transition-colors '>Показать
                                весь каталог
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            {/*Section 3*/}
            <section ref={contacts} className='mt-20'>
                <div className='max-w-[1040px] mx-auto'>
                    <h1 className='text_color text-center text-[42px]'>Как с нами связаться</h1>
                    <div className='max-w-[1040px] mx-auto grid grid-cols-2 gap-10 items-center mt-[60px]'>
                        <div className='h-[100%] flex flex-col items-center'>
                            <div className=''>
                                <img className='max-w-[25%] w-full h-auto mx-auto' src="/assets/phone.svg" alt="phone"/>
                            </div>
                            <div className='text-center mt-5'>
                                <p className='text_color font-bold text-[25px]'>Телефон/What's app</p>
                                <div>
                                    <a className='text_color font-medium text-[32px]' href='tel:+79999999999'>+7 999
                                        999-99-99</a>
                                </div>
                            </div>
                        </div>
                        <div className='h-[100%] flex flex-col items-center'>
                            <div className=''>
                                <img className='max-w-[33%] w-full h-auto mx-auto' src="/assets/email.svg" alt="email"/>
                            </div>
                            <div className='text-center mt-5'>
                                <p className='text_color font-bold text-[25px]'>Электронная почта</p>
                                <div>
                                    <a className='text_color font-medium text-[25px]'
                                       href='tel:+79999999999'>nameSurname@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}