import React from "react";

function ErrorModal() {
  return (
    <div
      className="error-modal-wrapper flex flex-col justify-center items-center bg-gray-100"
      style={{
        width: 608,
        height: 322,
        borderRadius: 12,
      }}
    >
      <div
        className="bg-modalCloseBackgroundColor bg-opacity-5 self-end flex items-center justify-center"
        style={{
          width: 24,
          height: 24,
          borderRadius: 6,
        }}
      >
        <p>x</p>
      </div>
      <div
        className="bg-red-100 flex justify-center items-center "
        style={{
          width: 40,
          height: 40,
          borderRadius: 8,
          marginBottom: 35,
        }}
      >
        <p>?</p>
      </div>
      <h1
        style={{
          fontSize: 24,
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Are you sure you want to delete this record?
      </h1>
      <p
        className="text-lightGreyTextColor"
        style={{
          fontWeight: 400,
          fontSize: 18,
          textAlign: "center",
          marginTop: 5,
        }}
      >
        This action cannot be undone. Please confirm if you wish to proceed.
      </p>
      <button
        className="bg-redButtonColor text-white"
        style={{
          width: 260,
          height: 44,
          borderRadius: 8,
          marginTop: 35,
          fontSize: 16,
          paddingTop: 12,
          paddingBottom: 10,
          paddingRight: 97,
          paddingLeft: 97,
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default ErrorModal;
