import React, { useState } from "react";
import Swal from "sweetalert2";
import "./style.css";

function Generator() {
  const [qrCodeUrl, setQrCodeUrl] = useState(null);
  const [inputValue, setInputValue] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!inputValue.trim()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "The URL cannot be empty!",
      });
      setQrCodeUrl(null); 
      return;
    }

    try {
      const response = await fetch(
        `https://api.qrserver.com/v1/create-qr-code/?data=${inputValue}`
      );
      if (!response.ok) {
        throw new Error("Failed to retrieve QR code data.");
      }
      setQrCodeUrl(response.url);
      setInputValue("");

      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "QR Code has been successfully created.",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
  }

  async function handleClick() {
    const response = await fetch(qrCodeUrl);
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;

    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    link.download = `qr_${year}${month}${day}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(objectUrl);
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 min-h-screen text-white p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold mt-10 text-purple-700 text-center">QR Code Generator</h1>
        <p className="text-lg mt-4 text-black text-center">Enter your URL</p>
        <form
          className="flex flex-col items-center mt-6 space-y-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-72 p-2 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="ex: https://www.google.com"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 rounded-md text-white hover:bg-blue-600"
          >
            Create a QR Code

          </button>
        </form>

        {qrCodeUrl ? (
          <div className="mt-8 text-center">
            <img
              src={qrCodeUrl}
              alt="QR Code"
              className="w-40 h-40 shadow-lg mx-auto"
            />
            <button
              onClick={handleClick}
              className="mt-4 px-4 py-2 bg-green-500 rounded-md hover:bg-green-600"
            >
              Download QR Code
            </button>
          </div>
        ) : (
          <p className="mt-4 text-black text-center">No QR code to display</p>
        )}
      </div>
    </div>
  );
}

export default Generator;