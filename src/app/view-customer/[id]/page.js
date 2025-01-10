"use client"
import useRouteAccess from '@/hooks/useRouteAccess'
import { getCookie } from 'cookies-next'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {
    useRouteAccess()
    const { id } = useParams()
    const { push } = useRouter()
    const [customer, setCustomer] = useState()
    useEffect(() => {
        if (getCookie("token")) {
            fetch("/api/getuser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getCookie("token")}`,
                },
                body: JSON.stringify({ id })
            })
                .then((response) => response.json())
                .then((res) => {
                    if (res?.status) {
                        setCustomer(res?.customer);
                    } else {
                        toast.error(res?.message);
                        push("/")
                        res?.message === "Unauthorized" && deleteCookie("token")
                    }
                })
                .catch(() => toast.error("Something went wrong."));
        }
    }, [])
    return (
        <div className="container mx-auto p-6 bg-white rounded-lg shadow-md max-w-md">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Customer Details</h2>
            <div className="space-y-4 text-center">
                <div>
                    <h3 className="text-lg font-semibold text-gray-700">User ID</h3>
                    <p className="text-gray-600">{customer?.userId}</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-700">ID</h3>
                    <p className="text-gray-600">{customer?.id}</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-700">Name</h3>
                    <p className="text-gray-600">{customer?.name}</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-700">Completed</h3>
                    <p className="text-gray-600">{customer?.completed ? 'Yes' : 'No'}</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
                    <p className="text-gray-600">{customer?.phone}</p>
                </div>
            </div>
            <div className="text-center mt-6">
                <button onClick={() => push(`/create-customer/${id}`)} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Edit Customer
                </button>
            </div>
        </div>
    );
}

export default page
