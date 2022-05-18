import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../store/productsSlice";
import { CustomModal } from "./CustomModal";

const ProductDelete = (props) => {
  const dispatchProducts = useDispatch();

  const { productId, productname } = props;

  const handleDeleteProduct = () => {
    dispatchProducts(deleteProduct({ productId }));
  };

  return (
    <CustomModal
      modalId={`productDelete${productId}`}
      title="Delete Product"
      btnLabel=""
      actionLabel="Delete"
      actionHandler={handleDeleteProduct}
      btnClass="btn-danger"
      btnIcon="bin.svg"
    >
      <p>Are you sure you want delete {productname} ?</p>
    </CustomModal>
  );
};

export default ProductDelete;
