import React from "react";
import {Card} from "./card/Card";
import axios from 'axios';
import {debounce} from "lodash";
import Skeleton from "./card/Skeleton";


export const Products = () => {
    const [products, setProducts] = React.useState([]);
    const [search, setSearch] = React.useState('');
    const [value, setValue] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(true);

    const updateSearchValue = React.useCallback(
        debounce((str) => {
            setSearch(str)
        }, 500), []
    )
    const onChangeInput = (event) =>{
        setValue(event.target.value)
        updateSearchValue(event.target.value)
    }



    React.useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)
                axios.get(`http://localhost:3000/Products?q=${search}`)
                    .then(res => {
                        setProducts(res.data)
                        setIsLoading(false)
                    })
            } catch (error) {
                alert('Не удалось загрузить данные');
            }
        })()
    }, [search])

    const skeletons = [...new Array(3)].map((_, index)=> <Skeleton key={index}/>);
    const cards = products.map((item, idx)=> <Card {...item} key={idx}/>)

    return (
        <div className='max-w-full mx-auto'>
            <div className='mt-5 text-center'>
                <p className='text_color text-[32px]'>Ознакомьтесь с нашим каталогом и выберите то, что вам по
                    вкусу!</p>
            </div>
            <div className='max-w-[1400px] mt-10 mx-auto text-center'>
                <input onChange={onChangeInput}
                       className='border-2 focus:border-[#703501] py-[12px] px-2 w-[300px] mx-auto bg-[#f2dcb1] rounded-xl mt-5 text_color'
                       type="text" value={value} placeholder='Искать по названию...'/>
                <div
                    className='grid grid-cols-3 items-center p-5 mt-5 gap-10 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1'>
                    {isLoading ? skeletons : cards}
                </div>
            </div>
        </div>
    )
}