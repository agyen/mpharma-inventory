import { Fragment } from "react";

export const NewProductForm = ({
  productName,
  setProductName,
  initialPrice,
  setInitialPrice,
}) => {
  return (
    <Fragment>
      <div className="mb-3">
        <label htmlFor="productName" className="form-label">
          Product name
        </label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="form-control"
          id="productName"
          placeholder="Enter product name"
          data-testid="addProductName"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="productPrice" className="form-label">
          Price
        </label>
        <input
          type="number"
          value={initialPrice}
          onChange={(e) => setInitialPrice(e.target.value)}
          className="form-control"
          id="productPrice"
          placeholder="Enter product price"
        />
      </div>
    </Fragment>
  );
};
