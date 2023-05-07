

export const Header = () =>{
    return(
        <header>
            <div className='max-w-[1100px] flex items-center justify-between mx-auto'>
                <div className='max-w-[15%]'>
                    <img className='max-w-full w-full h-auto' src="/assets/logo1.jpeg" alt="logo"/>
                </div>
                <ul className='flex gap-6 items-center'>
                    <li><a className='relative text-xl text-[#9e480b] hover:text-[#823804] after:absolute after:h-[1px] after:w-full after:left-0 after:-bottom-1 after:bg-[#823804] after:scale-0 hover:after:scale-100 after:transition-transform' href="#">Главная</a></li>
                    <li><a className='relative text-xl text-[#9e480b] hover:text-[#823804] after:absolute after:h-[1px] after:w-full after:left-0 after:-bottom-1 after:bg-[#823804] after:scale-0 hover:after:scale-100 after:transition-transform' href="#">Продукция</a></li>
                    <li><a className='relative text-xl text-[#9e480b] hover:text-[#823804] after:absolute after:h-[1px] after:w-full after:left-0 after:-bottom-1 after:bg-[#823804] after:scale-0 hover:after:scale-100 after:transition-transform' href="#">Контакты</a></li>
                </ul>
            </div>
        </header>
    )
}