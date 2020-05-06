import React from 'react'
import {Card,CardHeader,CardBody,Col,Row } from 'reactstrap'; 
import { Table } from 'react-bootstrap'; 
import autoparts from '../autoparts.json'

class Employee extends React.Component {
    constructor(props){
        super(props)
        console.log("Address : " ,this.props.location.address)
        console.log("Privilagestatus : " ,this.props.location.privilagestatus)
    }
    render(){
        return(
            <div>
            <div>
                <p>{this.props.location.address}</p>
                <h3>{this.props.location.privilagestatus}</h3>
            </div>
            <div className="flex-large">
                <h2>Employee Details</h2>
            </div>
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            <i className = "fa fa-align-justify"></i>
                        </CardHeader>
                        <CardBody>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>DOB</th>
                                        <th>Deatils</th>
                                    </tr>
                                </thead>
                                <tbody>  
                                    {autoparts.employees.map(item => (  
                                        <tr key={item.key}>  
                                        <td>{item.key}</td>  
                                        <td>{item.name}</td>  
                                        <td>{item.date_of_birth}</td> 
                                        <td>{item.position_held}</td>   
                                        </tr>  
                                    ))}  
                                </tbody>  
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
        )
    }
}
export default Employee;
