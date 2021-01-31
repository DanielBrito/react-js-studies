import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";

const Cart = ({ cart, total, addProduct, setShipping }) => (
  <div>
    <h1>Carrinho</h1>
    <p>
      Items: <strong>{cart.items.length}</strong>
    </p>
    <p>
      Frete: <strong>{cart.shippingValue}</strong>
    </p>
    <p>
      Total: <strong>{total}</strong>
    </p>
    <button onClick={addProduct}>Adicionar produto</button>
    <button onClick={setShipping}>Calcular frete</button>
  </div>
);

const calculateTotal = createSelector(
  (state) => state.items,
  (state) => state.shippingValue,
  (items, shippingValue) => {
    return (
      items.reduce((subtotal, item) => subtotal + item.price, 0) + shippingValue
    );
  }
);

const mapStateToProps = (state) => ({
  cart: state,
  total: calculateTotal(state),
});

const mapDispatchToProps = (dispatch) => ({
  addProduct: () => dispatch({ type: "ADD" }),
  setShipping: () => dispatch({ type: "SET_SHIPPING" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
