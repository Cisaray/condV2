import React from "react";
import {Card} from "./card/Card";

export const Products = () => {
    return (
        <div className='max-w-full mx-auto'>
            <div className='mt-5 text-center'>
                <p className='text_color text-[32px]'>Ознакомьтесь с нашим каталогом и выберите то, что вам по
                    душе!</p>
            </div>
            <div className='max-w-[1400px] mt-10 mx-auto text-center'>
                    <input className='py-[12px] px-2 w-[300px] mx-auto bg-[#f2dcb1] rounded-xl mt-5'
                           type="text" placeholder='Искать по названию...'/>
                    <div className='grid grid-cols-3 items-center p-5 mt-5 gap-4 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1'>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>

            </div>
        </div>
    )
}