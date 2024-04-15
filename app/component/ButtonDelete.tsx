"use client";
import React, { useState } from "react";

export default function ButtonDelete() {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleConfirmDelete = () => {};

  return (
    <>
      <button
        className="font-semibold text-baseWhite bg-red-500 px-2 py-1 rounded-lg"
        onClick={handleDeleteClick}
      >
        Hapus
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Konfirmasi Hapus</h2>
            <p>Apakah Anda yakin ingin menghapus?</p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
                onClick={handleConfirmDelete}
              >
                Ya
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                onClick={handleModalClose}
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
