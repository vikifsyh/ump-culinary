"use client";
import React, { useState } from "react";

export default function ButtonUpdate() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleUpdateClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  return (
    <div>
      <button
        className="border-2 font-semibold text-primary border-primary px-2 py-1 rounded-lg"
        onClick={handleUpdateClick}
      >
        Ubah
      </button>
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <form className="bg-white p-8 rounded-lg" onSubmit={handleFormSubmit}>
            <h2 className="text-lg font-semibold mb-4">Edit Makanan</h2>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="name"
              >
                Nama Produk:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-2 border-gray-300 px-3 py-2 rounded-lg w-full"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="price"
              >
                Harga:
              </label>
              <input
                type="text"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="border-2 border-gray-300 px-3 py-2 rounded-lg w-full"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="image"
              >
                Gambar:
              </label>
              <input
                type="file"
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="border-2 border-gray-300 px-3 py-2 rounded-lg w-full"
              />
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-lg mr-2"
              >
                Simpan
              </button>
              <button
                type="button"
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                onClick={handleFormClose}
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
