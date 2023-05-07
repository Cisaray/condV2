import './App.css';
import {Header} from "./components/Header";
import React from "react";
import {Products} from "./components/Products";
import {Home} from "./components/Home";
import {Route, Routes} from "react-router-dom";

function App() {
    const contacts = React.useRef(null)
    const handleContacts = () =>{
        contacts.current?.scrollIntoView({behavior:'smooth'})
    }
    return (
        <div className="max-w-[vw]">
            <Header handleContacts={handleContacts}/>
            <Routes>
                <Route path='/' exact element={<Home contacts={contacts}/>}/>
                <Route path='/products' exact element={<Products/>}/>
            </Routes>
            {/*footer*/}
            <footer className='mt-20 border-y-2'>
                <div className='max-w-[1100px] mx-auto flex justify-between items-center'>
                    <div className='max-w-[15%]'>
                        <img className='max-w-full w-full h-auto' src="/assets/logo1.jpeg" alt="logo"/>
                    </div>
                    <div className='flex items-center justify-end'>
                        <img className='max-w-[8%] w-full h-auto ' src="/assets/phone.svg" alt="phone"/>
                        <a className='text_color font-medium text-[20px]' href='tel:+79999999999'>+7 999
                            999-99-99</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
