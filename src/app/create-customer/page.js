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
    // const [customer, setCustomer] = useState()
    const [formData, setFormData] = useState({
        userId: '',
        name: '',
        completed: false,
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/api/user", {
            method: id ? "PUT" : "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getCookie("token")}`,
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((res) => {
                if (res?.status) {
                    toast.success(res?.message);
                    push("/customer-list")
                } else {
                    toast.error(res?.message);
                    push("/")
                    res?.message === "Unauthorized" && deleteCookie("token")
                }
            })
            .catch(() =>toast.error("Something went wrong."));
    };

    useEffect(() => {
        if (getCookie("token") && id) {
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
                        setFormData(res?.customer);
                    } else {
                        toast.error(res?.message);
                    }
                })
                .catch((error) => {
                    toast.error("Something went wrong.")
                });
        }
    }, [])
    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-4">User Form</h2>
            <div className="mb-4">
                <label htmlFor="userId" className="block text-gray-700">User ID</label>
                <input
                    type="number"
                    id="userId"
                    name="userId"
                    value={formData.userId}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Title</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700">Phone</label>
                <input
                    type="number"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="inline-flex items-center text-gray-700">
                    <input
                        type="checkbox"
                        name="completed"
                        checked={formData.completed}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2">Completed</span>
                </label>
            </div>
            <div className="text-center">
                <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Create
                </button>
            </div>
        </form>
    )
}

export default page;