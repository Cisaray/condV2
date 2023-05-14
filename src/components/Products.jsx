import React from "react";
import {Card} from "./card/Card";


export const Products = () => {
    const [search, setSearch] = React.useState('');

    const products = [
        {
            "id": 0,
            "image1": "/assets/products/1.jpeg",
            "title": "Пирожоные Макаруны",
            "description": "Макарун — французское кондитерское изделие из яичных белков, сахара и молотого миндаля"
        },
        {
            "id": 1,
            "image1": "/assets/products/2.jpeg",
            "image2": "/assets/products/4.jpeg",
            "image3": "/assets/products/12.jpeg",
            "title": "Безе",
            "description": "Французское пирожное из запечённых взбитых яичных белков и сахара. Словом безе также называют кондитерский крем, приготавливаемый из тех же продуктов, что и пирожное"
        },
        {
            "id": 2,
            "image1": "/assets/products/3.jpeg",
            "image2": "/assets/products/20.jpeg",
            "title": "Пирожоные Макаруны",
            "description": "Макарун — французское кондитерское изделие из яичных белков, сахара и молотого миндаля"
        },
        {
            "id": 3,
            "image1": "/assets/products/5.jpeg",
            "title": "Безе фруктовые",
            "description": "Французское пирожное из запечённых взбитых яичных белков и сахара. Словом безе также называют кондитерский крем, приготавливаемый из тех же продуктов, что и пирожное"
        },
        {
            "id": 4,
            "image1": "/assets/products/6.jpeg",
            "image2": "/assets/products/7.jpeg",
            "title": "Безе",
            "description": "Французское пирожное из запечённых взбитых яичных белков и сахара. Словом безе также называют кондитерский крем, приготавливаемый из тех же продуктов, что и пирожное"
        },
        {
            "id": 5,
            "image1": "/assets/products/8.jpeg",
            "title": "Безе фруктовые",
            "description": "Французское пирожное из запечённых взбитых яичных белков и сахара. Словом безе также называют кондитерский крем, приготавливаемый из тех же продуктов, что и пирожное"
        },
        {
            "id": 6,
            "image1": "/assets/products/9.jpeg",
            "image2": "/assets/products/10.jpeg",
            "title": "Безе фруктовые",
            "description": "Французское пирожное из запечённых взбитых яичных белков и сахара. Словом безе также называют кондитерский крем, приготавливаемый из тех же продуктов, что и пирожное"
        },
        {
            "id": 7,
            "image1": "/assets/products/11.jpeg",
            "image2": "/assets/products/15.jpeg",
            "image3": "/assets/products/17.jpeg",
            "title": "Безе ванильное",
            "description": "Французское пирожное из запечённых взбитых яичных белков и сахара. Словом безе также называют кондитерский крем, приготавливаемый из тех же продуктов, что и пирожное"
        },
        {
            "id": 8,
            "image1": "/assets/products/14.jpeg",
            "title":"Пирожоные Макаруны",
            "description": "Макарун — французское кондитерское изделие из яичных белков, сахара и молотого миндаля"
        },
        {
            "id": 9,
            "image1": "/assets/products/16.jpeg",
            "image2": "/assets/products/30.jpeg",
            "title": "Печенье Овсяное",
            "description": "кондитерское изделие круглой или овальной формы с овсяными хлопьями или мукой в составе"
        },
        {
            "id": 10,
            "image1": "/assets/products/19.jpeg",
            "image2": "/assets/products/24.jpeg",
            "title": "Печенье с кунжутом",
            "description": "Сладкое печенье с кунжутом по достоинству оценят и взрослые и дети. Такое печенье не только вкусное, но и полезное, благодаря большому количеству кунжута в своем составе, который богат кальцием и железом"
        }
    ]

    const filteredProducts = products.filter(item => {
        return item.title.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className='max-w-full mx-auto'>
            <div className='mt-5 text-center'>
                <p className='text_color text-[32px] sm:text-[28px]'>Ознакомьтесь с нашим каталогом и выберите то, что вам по
                    вкусу!</p>
            </div>
            <div className='max-w-[1400px] mt-10 mx-auto text-center'>
                <input onChange={(e) => setSearch(e.target.value)}
                       className='border-2 focus:border-[#703501] py-[12px] px-2 w-[300px] mx-auto bg-[#f2dcb1] rounded-xl mt-5 text_color xs:w-[250px]'
                       type="text" value={search} placeholder='Искать по названию...'/>
                <div
                    className='grid grid-cols-3 items-center p-5 mt-5 gap-10 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 md:grid-cols-2 sm:grid-cols-1'>
                    {filteredProducts.map((items, idx) =>
                        <Card {...items} key={idx}/>)}
                </div>
            </div>
        </div>
    )
}