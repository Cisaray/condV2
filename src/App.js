import './App.css';
import {Header} from "./components/Header";
import React from "react";
import {Products} from "./components/Products";
import {Home} from "./components/Home";
import {Route, Routes} from "react-router-dom";
import {Footer} from "./components/Footer";


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
            <Footer/>
        </div>
    );
}

export default App;
