import React, {useState, useEffect} from 'react';
import getKpiDetails from '../api/getKpiDetails'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button"

const Table = ({items}) =>{

    const [results, setResults] = useState([])
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => {
        setShow(true)
    }

    console.log(results)
    useEffect(()=>{
        const respone = async() =>{
           const {data} =  await getKpiDetails()
        //    console.log("here..........",data.data.channels)
           setResults(data.data.channels)

        }
        if(results){
            respone()
        }   
    },[])
    console.log("updated state",results, results.length)
    const sortedResults = results.length>0?results.sort((a,b)=>(a.subscribedCount<b.subscribedCount?1:-1)):[]
    const renderedTableRows = sortedResults.length>0? sortedResults.map((result,index)=>{
        // console.log
        let milliseconds = parseInt(result.indexTimestamp)*1000
        const dateObject = new Date(milliseconds)
        const date = dateObject.toLocaleString().split(',')[0]
        let gold = "🥇"
        let silver = " 🥈"
        let bronze = "🥉"

        const medals = index==0 ?gold:index==1?silver:index==2?bronze:''
        const modalContent = (result) =>{
            console.log("######",result,"inside modal")
            handleShow()
        }
        // handleShow
        return (
             <tr>
                <td>{medals}</td>
                <td>{index+1}</td>
                <td>{result.name}</td>
                <td>{result.subscribedCount}</td>
                <td>{date}</td>
                <td>
                    <button className="btn btn-secondary" onClick={(result)=>{modalContent()}}>
                        <i className="fas fa-angle-double-right"></i> Details
                    </button>
                </td>
            </tr>
         )
     }):[]
    console.log("result..........",renderedTableRows)
    return (
        <section id="posts">
            <div className="container">
                <div className="row">
                    <div className= "col-md-9">
                        <div className="card">
                            <div className="card-header">
                                <h4>EPNS Channels</h4>
                            </div>
                        </div>
                        <table className="table table-striped">
                            <thead className="table-dark">
                                <tr>
                                    <th></th>
                                    <th><i class="twa twa-railway-car"></i></th>
                                    <th>Channel Name</th>
                                    <th>Subscriber Count</th>
                                    <th>Date Created</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody> 
                                {renderedTableRows} 
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
            <Modal show={show} onHide={handleClose} animation={false} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                <Modal.Title>Details:</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

        </section>
    )
}

export default Table;