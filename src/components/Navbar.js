import React, {useState} from 'react';



const Navbar = () =>{

    const [activeElement, setActiveElement] = useState("Dashboard")

    const onHeaderClick = (navElement) =>{
        setActiveElement(navElement)
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-0">
            <div className="container">
                
                <a className="navbar-brand" href="/#">
                    <i className="fas fa-cog fa-sm"> </i> EPNS Analytics
                </a>  
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span className="navbar-toggler-icon"></span></button>

                <div id="navbarNav" className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item px-2" onClick={()=> onHeaderClick("Dashboard")}>
                            <a className={activeElement==="Dashboard"?"nav-link active":"nav-link"} href="/#">Dashboard</a>
                        </li>
                        <li className="nav-item px-2" onClick={()=>{onHeaderClick("About")}}>
                            <a className={activeElement==="About"?"nav-link active":"nav-link"}  target="_blank" href="https://epns.io/" rel="noopener noreferrer">About EPNS</a>
                        </li>

                    </ul>

                    <ul className="navbar-nav ms-auto" onClick={()=>{onHeaderClick("Feedback")}}>
                        <li className="nav-item px-2">
                            <a className={activeElement==="Feedback"?"nav-link active":"nav-link"} href="/#">Feedback:</a>
                        </li>
                        <li className="nav-item px-2" onClick={()=>{onHeaderClick("twitter")}}>
                            <a className={activeElement==="Feedback"?"nav-link active":"nav-link"}  href="https://twitter.com/agastyateja" target="_blank" rel="noopener noreferrer" style={{color:"white"}}><i className="bi bi-twitter"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

