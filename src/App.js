import React from 'react';
import Navbar from './components/Navbar'
import Table from './components/Table'
import Header from './components/Header'
import Actions from './components/Actions'
import Footer from './components/Footer'

const items=[
    {
        channelName: "btc price",
        numOfUsers: "100"
    },
    {
        channelName: "eth price",
        numOfUsers: "500"
    },

    {
        channelName: "Coin Crunch",
        numOfUsers: "250"
    }
]

const App = () =>{

    return (
    <div className="">
        <Navbar/>
        <Header/>
        <Actions/>
        <Table items={items}/>
        <Footer />
    </div>
    )
}
export default App