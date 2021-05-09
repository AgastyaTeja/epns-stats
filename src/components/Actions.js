import React from 'react'


const Actions = () =>{
    
    return(
        <div>
            <section id="actions" className="py-4 mb-4 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="d-grid gap-3 d-md-flex justify-content-md-start">
                            <div>
                                <button href="#" className="btn btn-primary" data-toggle="modal" data-target="#addAddress">
                                    <i className="fas fa-plus"></i> Filter by address
                                </button>
                            </div>

                            <div>
                                <button href="#" className="btn btn-success">
                                    <i className="fas fa-sync"></i> Data Refresh
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* Add ETH address */}
            <div className="modal" tabindex="-1" id="addAddress">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header bg-primary">
                        <h5 className="modal-title text-white">Paste your ETH address</h5>
                        <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className="form-group">
                            <label for="exampleInputPassword1" className="form-label">ETH Address is used to query for results</label>
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