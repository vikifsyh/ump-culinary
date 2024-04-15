import React from "react";
import Icon from "../Icon/Icon";

export default function ButtonInsert() {
  return (
    <div className="p-5">
      <button className="text-white rounded-md bg-primary px-6 py-2 flex gap-2 hover:scale-105">
        Tambah Makanan{" "}
        <span>
          <Icon name="plus" />
        </span>
      </button>
    </div>
  );
}
