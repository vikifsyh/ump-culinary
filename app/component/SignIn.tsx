"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-baseWhite">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleLogin}
      >
        <div className="mb-4">
          <label
            className="block text-baseBlack text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-baseBlack text-sm font-bold mb-2"
            htmlFor="namatoko"
          >
            Nama Kedai
          </label>
          <input
            id="namatoko"
            type="text"
            placeholder="Nama Kedai"
            value={username}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-baseBlack text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="items-center justify-between">
          <button
            type="submit"
            className="bg-primary w-full hover:bg-primary/50 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Masuk
          </button>
          <div className="mt-4">
            <p className="text-sm text-baseBlack">
              Sudah punya akun?{" "}
              <Link
                href={"/login"}
                className="text-primary hover:text-primary/50 font-bold"
              >
                Masuk
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
