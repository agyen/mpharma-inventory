import React, { useEffect, Fragment } from "react";
import { getProducts } from "../service/service";
import ProductDelete from "./ProductDelete";
import { ProductEditPrice } from "./ProductEditPrice";
import ProductPriceHistory from "./ProductPriceHistory";
import { useSelector, useDispatch } from "react-redux";
import { addInitialProducts } from "../store/productsSlice";

const ProductList = () => {
  const { products } = useSelector((state) => state.products);
  const dispatchProducts = useDispatch();

  const getLatestPrice = (dates) => {
    let latest = dates.reduce((r, a) => {
      return r.date > a.date ? r : a;
    });
    return latest.price;
  };

  useEffect(() => {
    getProducts()
      .then((response) => {
        const products = response.data.products;
        dispatchProducts(addInitialProducts(products));
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"> </th>
            <th scope="col">Name</th>
            <th scope="col">Latest Price</th>
            <th scope="col">Price History</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{product.name}</td>
              <td>{getLatestPrice(product.prices)}</td>
              <td>
                <ProductPriceHistory product={product} />
              </td>
              <td className="d-flex">
                <ProductEditPrice
                  previousName={product.name}
                  latestPrice={`${getLatestPrice(product.prices)}`}
                  id={product.id}
                />
                <ProductDelete
                  productname={product.name}
                  productId={product.id}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ProductList;
