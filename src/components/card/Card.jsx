import React from "react";


export const Card = () => {
    const [show, setShow] = React.useState(false)
    return (
        <>
            <div onClick={()=>setShow(true)} className='cursor-pointer max-w-[300px] rounded-lg bg-[#f2dcb1] flex flex-col items-center shadow-[10px_14px_8px_0px_rgba(27,30,32,0.2)] mx-auto'>
                <div>
                    <img className='max-w-full w-full h-auto rounded-lg' src="/assets/product3.JPG"
                         alt="product3"/>
                </div>
                <div className='mt-5 pb-3'>
                    <h3 className='text_color text-[24px] font-semibold px-3 text-center'>Название</h3>
                    <p className='text_color text-[18px] italic mt-3 px-3 text-center'>Описание товара</p>
                </div>
            </div>
            <div onClick={() => setShow(false)}
                 className={show ? 'modal active' : 'modal'}>
                <div onClick={e => e.stopPropagation()}
                     className="modal_content p-5 rounded-xl bg-amber-50 max-w-[1000px] overflow-auto">
                    <div className='flex justify-between items-center'>
                        <h3 className='text-center font-semibold text-[30px] mt-3'>Название</h3>
                    </div>
                    <div className='max-w-[600px] mt-5 mx-auto'>
                        <img className='rounded-xl max-w-full w-full h-auto' src="/assets/product3.JPG" alt="img"/>
                    </div>
                    <h3 className='mt-3 text-[28px] font-semibold'>Описание:</h3>
                    <p className='text-[20px] text-justify'>Описание</p>
                </div>
            </div>
        </>
    )
}