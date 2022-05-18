import React from "react";

export const CustomModal = ({
  modalId,
  title,
  btnLabel,
  actionLabel,
  actionHandler,
  btnClass,
  btnIcon,
  children,
}) => {
  return (
    <div className="m-2">
      <button
        type="button"
        className={`btn ${btnClass || "btn-primary"} btn-sm`}
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
        data-testid="buttonModal"
      >
        {btnIcon && <img src={`./icons/${btnIcon}`} alt={btnLabel} />}{" "}
        {btnLabel}
      </button>

      <div
        className="modal fade"
        id={modalId}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                onClick={actionHandler}
                type="button"
                className={`btn ${btnClass || "btn-primary"}`}
                data-bs-dismiss="modal"
              >
                {actionLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
