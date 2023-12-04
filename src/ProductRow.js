import React, { Component } from 'react'

class ProductRow extends Component{
    constructor(props) {
        super(props)
        this.destroy = this.destroy.bind(this)
   }
   
    destroy() {
        this.props.onDestroy(this.props.product.id);
   }
   
    render(){
        const { index, product } = this.props
        return(
            <tr key={index}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td id={product.id}>
                <button class="btn btn-info" onClick={this.destroy}>Delete</button>
                </td>
          </tr>
        )
    }
}
export default ProductRow