import React, { useState } from 'react'
import productJson from '../products.json'
import CustomCard from './customCard'
import FileUploadPopup from './fileUploadPopup'
import { Button } from 'reactstrap'
import './products.css'

const Products = () => {

    console.log("productJson", productJson)
    const [product] = useState(productJson.Products)
    const [show, setShow] = useState(false)

    console.log("product", product)

    const toggle = (item) => {
        setShow(!show);
    }

    return (
        <div>
            <Button id="imageUploadButton" onClick={toggle}>Image Upload</Button>
            <table id="thegrid">
                {/* <thead>
                    <tr>
                        <th>ProductId</th>
                        <th>ProductName</th>
                        <th>ProductPrice</th>
                        <th>ProductImage</th>
                    </tr>
                </thead> */}
                <tbody id="thegrid">
                    {(product || []).map(item => (
                        <tr key={item.productId}>
                            {/* <td>{item.productId}</td>
                            <td>{item.productName}</td>
                            <td>{item.productPrice}</td>
                            <td>{item.productImage}</td> */}
                            <td>
                                <CustomCard
                                    productId={item.productId}
                                    productName={item.productName}
                                    productPrice={item.productPrice}
                                    productImage={item.ProductURL}></CustomCard>

                                <td>
                                    <FileUploadPopup imageName={item.ProductURL} show={show} toggle={toggle}></FileUploadPopup>
                                </td>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Products;