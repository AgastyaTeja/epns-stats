import React, {useState, useEffect} from 'react';
import getKpiDetails from '../api/getKpiDetails'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button"

const Table = ({items}) =>{

    const [results, setResults] = useState([])
    const [cardValues, setCardValues] = useState([])
    const [row, selectedRow] = useState('')
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    
    const handleShow = () => {
        setShow(true)
    }

    useEffect(()=>{
        const respone = async() =>{
           const {data} =  await getKpiDetails()
           console.log("Total data",data)
           setResults(data.data.channels)
           setCardValues(data.data.epnss)
        }
        if(results){
            respone()
        }   
    },[])
    const sortedResults = results.length>0?results.sort((a,b)=>(a.subscribedCount<b.subscribedCount?1:-1)):[]
    const renderedTableRows = sortedResults.length>0? sortedResults.map((result,index)=>{
        let milliseconds = parseInt(result.indexTimestamp)*1000
        const dateObject = new Date(milliseconds)
        const date = dateObject.toLocaleString().split(',')[0]
        let gold = "🥇"
        let silver = " 🥈"
        let bronze = "🥉"

        const medals = index===0 ?gold:index===1?silver:index===2?bronze:''
        const modalContent = (result) =>{
            selectedRow(result)
            handleShow()
        }
    
        return (
             <tr key={result.id}>
                <td>{medals}</td>
                <td>{index+1}</td>
                <td>{result.name}</td>
                <td className="text-right">{result.subscribedCount}</td>
                <td>{date}</td>
                <td>
                    <button className="btn btn-secondary" onClick={()=>{modalContent(result)}}>
                        <i className="fas fa-angle-double-right"></i> Details
                    </button>
                </td>
            </tr>
         )
     }):[]
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
                                    <th><i className="twa twa-railway-car"></i></th>
                                    <th>Channel Name</th>
                                    <th className="text-wrap">Subscriber Count</th>
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
                                <h3>Channels</h3>
                                <h4 className="display-4">
                                    <i className="far fa-bell"></i>{cardValues.length===0?"":cardValues[0].channelCount.toLocaleString()}
                                </h4>
                            </div>
                        </div>
                        <div className="card text-center bg-primary text-white mb-3">
                            <div className="card-body">
                                <h3>Subscribers</h3>
                                <h4 className="display-4">
                                    <i className="fas fa-users"></i> {cardValues.length===0?"":cardValues[0].userCount.toLocaleString()}
                                </h4>
                            </div>
                        </div>
                        <div className="card text-center bg-warning text-white mb-3">
                            <div className="card-body">
                                <h3>Notifications</h3>
                                <h4 className="display-4">
                                    <i className="fas fa-comment"></i> {cardValues.length===0?"":cardValues[0].notificationCount.toLocaleString()}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} animation={false} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header>
                <Modal.Title>Details:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><span className="fw-bold">INFO: </span><span className="text-muted">{row.info}</span></p>
                    <p><span className="fw-bold ">URL: </span><a href={row.url} className="link-primary">{row.url}</a></p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="success" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

        </section>
    )
}

export default Table;