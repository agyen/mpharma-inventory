import React, { Fragment, useContext, useEffect, useState } from "react";
import { v4 as uid } from "uuid";
import { useDispatch } from "react-redux";
import { addNewProductPrice, updateProductName } from "../store/productsSlice";
import { CustomModal } from "./CustomModal";

export const ProductEditPrice = ({ previousName, latestPrice, id }) => {
  const dispatchProducts = useDispatch();
  const [productName, setProductName] = useState(previousName);
  const [newPrice, setNewPrice] = useState(latestPrice);

  const handleEditProduct = () => {
    const name = productName.trim();
    const price = newPrice.trim();

    if (name !== "" && name !== previousName) {
      dispatchProducts(updateProductName({ productName, productId: id }));
    }

    if (price !== "" && price !== latestPrice) {
      const newPrice = {
        id: uid(),
        price: Number(price),
        date: new Date().toISOString(),
      };
      dispatchProducts(addNewProductPrice({ newPrice, productId: id }));
    }
  };

  return (
    <CustomModal
      modalId={`editProductModal${id}`}
      title={`Update ${previousName}`}
      btnLabel=""
      actionLabel="Update"
      actionHandler={handleEditProduct}
      btnIcon="pencil.svg"
    >
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Product name
        </label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="form-control"
          id="formGroupExampleInput"
          placeholder={previousName}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Add Latest Price
        </label>
        <input
          type="number"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          className="form-control"
          id="formGroupExampleInput2"
          placeholder={latestPrice}
        />
      </div>
    </CustomModal>
  );
};
