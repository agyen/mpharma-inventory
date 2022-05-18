import React from "react";

export default function ProductPriceHistory(props) {
  const { product } = props;

  return (
    <div>
      <button
        type="button"
        className="btn btn-link"
        data-bs-toggle="modal"
        data-bs-target={`#productPrices${product.id}`}
      >
        View
      </button>

      <div
        className="modal fade"
        id={`productPrices${product.id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Price History ({product.name})
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ol className="list-group list-group-numbered">
                {[...product.prices]
                  .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
                  .map((price, index) => {
                    const date = new Date(price.date);
                    return (
                      <li
                        key={index}
                        className="list-group-item d-flex justify-content-between align-items-start"
                      >
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">{price.price}</div>
                          <small className="text-secondary">
                            {date.toDateString()} | {date.getHours()}:
                            {date.getMinutes()}:{date.getSeconds()}
                          </small>
                        </div>
                        {index === 0 && (
                          <small className="badge bg-success rounded-pill">
                            latest
                          </small>
                        )}
                      </li>
                    );
                  })}
              </ol>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
