import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uid } from "uuid";
import { addProduct } from "../store/productsSlice";
import { CustomModal } from "./CustomModal";
import { NewProductForm } from "./NewProductForm";

export const ProductAdd = () => {
  const dispatchProducts = useDispatch();
  const [productName, setProductName] = useState("");
  const [initialPrice, setInitialPrice] = useState("");

  const handleAddNewProduct = () => {
    const name = productName.trim();
    const price = initialPrice.trim();

    if (name !== "" || price !== "") {
      const newProduct = {
        id: uid(),
        name,
        prices: [
          {
            id: uid(),
            price: Number(price),
            date: new Date().toISOString(),
          },
        ],
      };
      dispatchProducts(addProduct({ newProduct }));
    }
    setProductName("");
    setInitialPrice("");
  };

  return (
    <div className="d-flex justify-content-end">
      <CustomModal
        modalId="addProductModal"
        title="Add new Product"
        btnLabel="+ New Product"
        actionLabel="Add"
        actionHandler={handleAddNewProduct}
      >
        <NewProductForm
          productName={productName}
          setProductName={setProductName}
          initialPrice={initialPrice}
          setInitialPrice={setInitialPrice}
        />
      </CustomModal>
    </div>
  );
};
