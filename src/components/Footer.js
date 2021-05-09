import React from 'react'

const Footer = () =>{

    return (
        <footer id="main-footer" className="bg-dark text-white mt-2 p-2">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="lead text-center">Copyright &copy; <span id="year"></span>
                            EPNS Anlaytics
                        </p>
                        
                    </div>
                </div>
            </div>
        </footer>   
    )
}

export default Footer