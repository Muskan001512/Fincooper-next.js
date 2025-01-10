"use client";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";

const page = () => {
  const email = useRef("");
  const password = useRef("");
  const { push } = useRouter();

  const handleSubmit = async (e) => {
    e?.preventDefault();
    const emailtoSend = email.current.value;
    const passwordtoSend = password.current.value;
    fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: emailtoSend, password: passwordtoSend }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.status) {
          setCookie("token", res?.token, {
            maxAge: 3600,
          });
          setTimeout(() => {
            push("/customer-list");
          }, 500);
        } else {
          toast.error(res?.message);
        }
      })
      .catch(() => toast.error("Something went wrong."));
  };

  useEffect(()=>{
    if(getCookie("token")){
      push("/customer-list")
    }
  },[])

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center text-gray-700">
        Welcome Back!
      </h2>
      <p className="mt-2 text-sm text-center text-gray-500">
        Login to continue
      </p>
      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            ref={email}
            className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            ref={password}
            className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default page;
