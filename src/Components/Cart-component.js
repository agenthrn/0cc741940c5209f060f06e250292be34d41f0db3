import React, { useContext } from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";

import AppContext from "../context/AppContext";

const CartSection = styled.section`
  width: 100%;
  height: 40px;
  padding: 8px 16px 8px 16px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 8px;
  background: #a23530;
  border-radius: 4px;
  align-items: center;
`;

const CartPriceAndItems = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: white;
`;

const CartSubText = styled.span`
  display: block;
  font-size: 12px;
  color: white;
`;

const CartIcons = styled.div`
  color: white;
  text-align:right;
`;

function Cart() {
  const { cart_data } = useContext(AppContext);

  const cart_total_price = () => {
    var total_price = 0;
    for (var i = 0; i < cart_data.length; i++) {
      total_price += cart_data[i].itemPrice;
    }
    return total_price;
  };

  return (
    <CartSection>
      <div>
        <CartPriceAndItems>
          {cart_data.length} items |{" "}
          <NumberFormat
            value={cart_total_price()}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rp."}
          />
        </CartPriceAndItems>
        <CartSubText>Termasuk ongkos kirim</CartSubText>
      </div>
      <CartIcons>
        <span class="material-icons">shopping_cart</span>
        <span class="material-icons">navigate_next</span>
      </CartIcons>
    </CartSection>
  );
}

export default Cart;
