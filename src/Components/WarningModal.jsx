import React from "react";

function WarningModal({
  title = "Are you sure?",
  message = "This action cannot be undone. Please confirm if you wish to proceed.",
  confirmText = "Delete",
  onConfirm,
  onClose,
  className = "",
  backgroundColor = "bg-gray-100",
}) {
  return (
    <div
      className={`error-modal-wrapper flex flex-col justify-center items-center ${backgroundColor} ${className}`}
      style={{
        width: 608,
        height: 322,
        borderRadius: 12,
      }}
    >
      {/* Close Button */}
      <div
        className="bg-modalCloseBackgroundColor bg-opacity-5 self-end flex items-center justify-center cursor-pointer"
        style={{
          width: 24,
          height: 24,
          borderRadius: 6,
        }}
        onClick={onClose}
      >
        <p>x</p>
      </div>

      {/* Icon */}
      <div
        className="bg-red-100 flex justify-center items-center"
        style={{
          width: 40,
          height: 40,
          borderRadius: 8,
          marginBottom: 35,
        }}
      >
        <p>?</p>
      </div>

      {/* Title */}
      <h1
        style={{
          fontSize: 24,
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        {title}
      </h1>

      {/* Message */}
      <p
        className="text-lightGreyTextColor"
        style={{
          fontWeight: 400,
          fontSize: 18,
          textAlign: "center",
          marginTop: 5,
        }}
      >
        {message}
      </p>

      {/* Confirm Button */}
      <button
        className="bg-redButtonColor text-white mt-5"
        style={{
          width: 260,
          height: 44,
          borderRadius: 8,
          fontSize: 16,
        }}
        onClick={onConfirm}
      >
        {confirmText}
      </button>
    </div>
  );
}

export default WarningModal;
