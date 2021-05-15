import React from 'react'


const Actions = () =>{
    
    return(
        <div>
            <section id="actions" className="py-4 mb-4 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="d-grid gap-3 d-md-flex justify-content-md-start">
                            <div>
                                <i className="fab fa-ethereum fa-1x"></i><span className="lead fw-bold"> Network: </span>
                                <span className="">Ropsten</span>
                            </div>

                            <div>
                                 <i className="fas fa-cube fa-1x"></i><span className=" lead fw-bold"> Block: </span>
                                <span className="">10,080,431</span>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* Add ETH address */}
            <div className="modal" tabIndex="-1" id="addAddress">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header bg-primary">
                        <h5 className="modal-title text-white">Paste your ETH address</h5>
                        <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className="form-group">
                            <label htmlFor="exampleInputPassword1" className="form-label">ETH Address is used to query for results</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"></input>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>

                
    )
}

export default Actions