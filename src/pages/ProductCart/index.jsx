import React from "react";
import Carusel from "../../components/Carusel";
import ProImg from "../../assets/images/multiple.png";
import { MdDelete } from "react-icons/md";
import {
  Container,
  LeftSide,
  Price,
  Product,
  Quantity,
  RightSide,
  Total,
} from "./style";
import { useState } from "react";

const ProductCart = () => {
  const products = [
    {
      id: 1,
      title: "Barberton Daisy",
      sku: "1995751877966",
      price: "$119.00",
      quantity: 2,
      total: "$238.00",
      img: ProImg,
    },
    {
      id: 2,
      title: "Blushing Bromeliad",
      sku: "1995751877966",
      price: "$139.00",
      quantity: 3,
      total: "$834.00",
      img: ProImg,
    },
    {
      id: 3,
      title: "Blushing Bromeliad",
      sku: "1995751877966",
      price: "$179.00",
      quantity: 1,
      total: "$1,611.00",
      img: ProImg,
    },
  ];

  const [data, setData] = useState(products);
  const getDelete = (id) => {
    let newData = data.filter((val) => val.id !== id);
    setData(newData);
  };

  const Plus = (product) => {
    let res = data.filter((val) =>
      val.id === product.id ? product.quantity + 1 : ""
    );
    console.log(res);
    // setData(res);
  };

  const Minus = () => {};
  return (
    <div>
      <Container>
        <LeftSide>
          <table>
            <thead>
              <tr>
                <td>Products</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Total</td>
              </tr>
            </thead>
            {data.map((product, index) => (
              <tbody key={index}>
                <br />
                <tr style={{ marginTop: "50px" }}>
                  <td>
                    <Product>
                      <img src={product.img} alt="img" />
                      <div>
                        <h6>{product.title}</h6>
                        <p>
                          <span>SKU: </span>
                          {product.sku}
                        </p>
                      </div>
                    </Product>
                  </td>
                  <td>
                    <Price>
                      <span>{product.price}</span>
                    </Price>
                  </td>
                  <td>
                    <Quantity>
                      <button onClick={() => Plus(product)}>+</button>
                      <span>{product.quantity}</span>
                      <button onClick={Minus}>-</button>
                    </Quantity>
                  </td>
                  <td>
                    <Total>
                      <span>{product.total}</span>
                    </Total>
                  </td>
                  <td>
                    <i onClick={() => getDelete(product.id)}>
                      <MdDelete />
                    </i>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </LeftSide>
        <RightSide>
          
        </RightSide>
      </Container>
      <Carusel />
    </div>
  );
};

export default ProductCart;
