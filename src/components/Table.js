import React, {useState, useEffect} from 'react';
import getKpiDetails from '../api/getKpiDetails'

const Table = ({items}) =>{

    useEffect(()=>{
        console.log("asdfsdf")
        (async() =>{
            await getKpiDetails()
        })()
    },[])

    const renderedItems = items.map(item =>{

        return (
            <div key={item.className}>
                <div className="title active">
                    <i className="dropdown icon"></i>
                    {item.channelName}
                </div>
                <div className="content active">
                    {item.numOfUsers}
                </div>
            </div>
        )
    })
    return (
        <section id="posts">
            <div className="container">
                <div className="row">
                    <div className= "col-md-9">
                        <div className="card">
                            <div className="card-header">
                                <h4>Latest Posts</h4>
                            </div>
                        </div>
                        <table className="table table-striped">
                            <thead className="table-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Post One</td>
                                    <td>Web development</td>
                                    <td>May 10, 2018</td>
                                    <td>
                                        <button className="btn btn-secondary">
                                            <i className="fas fa-angle-double-right"></i> Details
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>ETH</td>
                                    <td>Ethereum</td>
                                    <td>May 1, 2019</td>
                                    <td>
                                        <button className="btn btn-secondary">
                                            <i className="fas fa-angle-double-right"></i> Details
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>ADA</td>
                                    <td>Cardano</td>
                                    <td>May 10, 2018</td>
                                    <td>
                                        <button className="btn btn-secondary">
                                            <i className="fas fa-angle-double-right"></i> Details
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>RLC</td>
                                    <td>I EXEC</td>
                                    <td>June 10, 2018</td>
                                    <td>
                                        <button className="btn btn-secondary">
                                            <i className="fas fa-angle-double-right"></i> Details
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>MOD</td>
                                    <td>Modum</td>
                                    <td>Jan 1, 2020</td>
                                    <td>
                                        <button className="btn btn-secondary">
                                            <i className="fas fa-angle-double-right"></i> Details
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>DOT</td>
                                    <td>Polkadot</td>
                                    <td>June 15, 2020</td>
                                    <td>
                                        <button className="btn btn-secondary">
                                            <i className="fas fa-angle-double-right"></i> Details
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-3">
                        <div className="card text-center bg-success text-white mb-3">
                            <div className="card-body">
                                <h3>Posts</h3>
                                <h4 className="display-4">
                                    <i className="fas fa-pencil-alt"></i> 6
                                </h4>
                            </div>
                        </div>
                        <div className="card text-center bg-primary text-white mb-3">
                            <div className="card-body">
                                <h3>Category</h3>
                                <h4 className="display-4">
                                    <i className="fas fa-folder"></i> 4
                                </h4>
                            </div>
                        </div>
                        <div className="card text-center bg-warning text-white mb-3">
                            <div className="card-body">
                                <h3>Users</h3>
                                <h4 className="display-4">
                                    <i className="fas fa-users"></i> 4
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Table;