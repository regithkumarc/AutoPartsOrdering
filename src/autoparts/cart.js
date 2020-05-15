import React from 'react'
import { Button, Col, Card, CardHeader, CardBody, Table, Row } from 'reactstrap';
import { getAllCartItem, removeCartItem, reloadCartDataCount } from '../crud/userFuction';
class Cart extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            cartList: [],
            confirmButEnableDisable: false,
            cartListCount: reloadCartDataCount(),
            orderedMsg: "Product Orderd Successul"
        }
        this.confirmOrder = this.confirmOrder.bind(this);
    }
    componentDidMount() {
        this.setState({ cartList: getAllCartItem() });
        if (this.state.cartList > 0) {
            this.setState({ confirmButEnableDisable: true });
        } else {
            this.setState({ confirmButEnableDisable: false });
        }
        console.log(this.state.cartList)
    }

    removeCart = item => {
        if (removeCartItem(item)) {
            alert("removed Successfully")
            this.setState({ cartList: getAllCartItem() });
        }
    }

    confirmOrder() {
        this.props.history.push({
            pathname: '/orderedProduct',
            orderedCount: this.state.cartListCount,
            orderedMsg: this.state.orderedMsg
        });
    }

    render() {
        return (
            <div>
                <div className="flex-large">
                    <h2>View Products</h2>
                </div>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i>
                            </CardHeader>
                            <CardBody>
                                <Table>
                                    <thead>
                                        <tr>
                                            <td>Id</td>
                                            <td>Count</td>
                                            <td>Action</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(this.state.cartList || []).map(item => (
                                            <tr key={item.id}>
                                                {/* <td>
                                    <img alt="poster" width="120" src={item.poster_src} />
                                </td> */}
                                                <td>{item.id}</td>
                                                <td>{item.count}</td>
                                                <td>
                                                    <Button onClick={() => this.removeCart(item)}>Remove</Button>&nbsp;
                                                    {/* <Button onClick={() => this.addCartCount(item)}>Save</Button> */}
                                                </td>
                                            </tr>
                                        ))}

                                        <tr>
                                            <td>
                                                <Button onClick={this.confirmOrder}>Confirm Order</Button>
                                            </td>
                                        </tr>
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
export default Cart;