import React from 'react';
import { Routes, Route } from "react-router-dom";
// import Nav from './components/nav.jsx';
import Home from './components/home';
import Detail from './components/detail';
import Create from './components/create';
import Landing from './components/landing';
import PageNotFound from './components/notFound';
import Ver from './components/ver';
import Pokemon from './components/pokemones';


var app = require('./App.css');


function App() {
    return (
        <div className={app.App}>
            {/* <Nav /> */}
            <div>
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='home/detail/:id' element={ <Detail />} />
                    <Route path='home/detail' element={<Detail />}/>
                    <Route path='home' element={<Home />} />
                    <Route path='create' element={<Create />} />
                    <Route path='*' element={<PageNotFound />} />
                    <Route path='ver' element={<Ver />} />
                    <Route path='pokemones' element={<Pokemon />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
