import React from "react";
import {connect} from "react-redux";

const Product = ({handleShow}) => {


    return(
        <div>
        <h2 className="head_txt">Products</h2>
        <button className="addButton" onClick={handleShow}>
            Add Button
        </button>
        <table>
            <thead>
            <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Tomate</td>
                <td>5</td>
                <td>400</td>
            </tr>
            </tbody>
        </table>
        </div>
    )
}

// const mapDispatchToProps = dispatch => {
//     return{
//         onAdd:() => dispatch({
//             type:"TOGGLE_MODAL",

//         })
//     }
// }

export default connect()(Product);