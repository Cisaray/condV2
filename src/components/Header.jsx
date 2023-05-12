import {Link} from "react-router-dom";


export const Header = ({handleContacts}) => {
    return (
        <header>
            <div className='max-w-[1100px] flex items-center justify-between mx-auto lg:max-w-[900px] md:justify-center xs:flex-col'>
                <div className='max-w-[15%] xs:max-w-[25%]'>
                    <img className='max-w-full w-full h-auto' src="/assets/logo1.jpeg" alt="logo"/>
                </div>
                <ul className='flex gap-6 items-center xs:flex-col xs:gap-3 xs:mt-3 xs:mb-3'>
                    <li>
                        <Link to='/'>
                            <button
                                className='header_link'
                                >Главная
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/products'>
                            <button
                                className='header_link'
                                >Продукция
                            </button>
                        </Link>
                    </li>
                    <li>
                        <button onClick={handleContacts}
                                className='header_link'
                                >Контакты
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    )
}