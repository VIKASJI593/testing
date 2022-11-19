//no-unused-vars

import React from 'react';

class CartItem extends React.Component {
  constructor () {
    super();
    this.state = {
      price: 999,
      title: 'Mobile Phone',
      qty: 1,
      img: ''
    }
    
  }
  increaseQuantity = () => {
   
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1
      }
    });
  }

  decreaseQuantity = () => {
    const { qty } = this.state;

    if (qty === 0) {
      return;
    }
    // setState form 2 - if prevState required use this
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1
      }
    });
  }
  render () {
    console.log('render');
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
      <div className="left-block">
      <img style={styles.image} alt = ""  
         src=" "/> 
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://img.icons8.com/ios-glyphs/30/000000/plus.png"
              onClick={() => this.increaseQuantity()}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://img.icons8.com/ios-glyphs/30/000000/minus.png"
              onClick={() => this.decreaseQuantity()}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://img.icons8.com/carbon-copy/100/000000/filled-trash.png"
              onClick={() => this.onDeleteProduct()}
            />
        </div>
      </div>
    </div>
  );
}
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}


export default CartItem;