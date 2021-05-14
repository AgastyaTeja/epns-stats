import React from 'react';
import Navbar from './components/Navbar'
import Table from './components/Table'
import Actions from './components/Actions'
import Footer from './components/Footer'

const App = () =>{

    return (
    <div className="">
        <Navbar/>
        <Actions/>
        <Table/>
        <Footer />
    </div>
    )
}
export default App