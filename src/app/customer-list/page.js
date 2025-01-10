"use client";
import TableComponent from "@/common/TableComponent";
import useRouteAccess from "@/hooks/useRouteAccess";
import { getCookie, deleteCookie } from "cookies-next";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa"
import { useRouter } from "next/navigation";

const page = () => {
  const [customers, setCustomers] = useState([]);
  const [searchText, setSearchText] = useState("")
  const [searchRes, setSearchRes] = useState([])
  const { push } = useRouter()
  useRouteAccess()

  const getUsers = () => {
    if (getCookie("token")) {
      fetch("/api/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("token")}`,
        }
      })
        .then((response) => response.json())
        .then((res) => {
          if (res?.status) {
            setCustomers(res?.customers);
          } else {
            push("/")
            toast.error(res?.message);
            res?.message === "Unauthorized" && deleteCookie("token")
          }
        })
        .catch(() => toast.error("Something went wrong."));
    }
  }
  useEffect(() => {
    getUsers()
  }, []);

  const handleDelete = (id) => {
    if (getCookie("token")) {
      fetch("/api/user", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("token")}`,
        },
        body: JSON.stringify({ id })
      })
        .then((response) => response.json())
        .then((res) => {
          if (res?.status) {
            toast.success(res?.message)
            getUsers()
          } else {
            toast.error(res?.message);
          }
        })
        .catch(() => toast.error("Something went wrong."));
    }
  }

  const handleSearchChange = (e) => {
    setSearchText(e?.target?.value?.trim())
  }

  useEffect(() => {
    if (searchText) {
      setSearchRes(customers?.filter(cus => {
        console.log(cus)
        return cus?.name?.toLowerCase().includes(searchText?.toLowerCase()) ||
          cus?.phone?.toString()?.toLowerCase().includes(searchText?.toLowerCase())
      }))
    } else {
      setSearchRes([])
    }
  }, [searchText])

  const data = useMemo(() => searchRes?.length ? searchRes : customers, [customers, searchRes]);

  const columns = useMemo(
    () => [
      { Header: 'User Id', accessor: 'userId' },
      { Header: 'ID', accessor: 'id' },
      { Header: 'Title', accessor: 'name' },
      { Header: 'Phone Number', accessor: 'phone' },
      { Header: 'Completed', accessor: 'completed', Cell: ({ value }) => <>{value ? "Yes" : "No"}</> },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: ({ row }) => (
          <div className="flex space-x-4">
            <button onClick={() => push(`/view-customer/${row?.original?.id}`)} className="text-blue-600 hover:text-blue-900">
              <FaEye />
            </button>
            <button onClick={() => push(`/create-customer/${row?.original?.id}`)} className="text-green-600 hover:text-green-900">
              <FaEdit />
            </button>
            <button onClick={() => handleDelete(row?.original?.id)} className="text-red-600 hover:text-red-900">
              <FaTrashAlt />
            </button>
          </div>
        ),
      },
    ],
    []
  );
  return <div className="container mx-auto p-4">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
      Customer List
    </h1>
    <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-4">
      <input
        type="text"
        placeholder="Search customers..."
        value={searchText}
        onChange={handleSearchChange}
        className="w-full sm:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 sm:mb-0"
      />
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        onClick={() => push('/create-customer')}
      >
        Create New Customer
      </button>
    </div>
    {searchText?.length && !searchRes?.length ? <div className="h-[40vh] flex items-center justify-center text-3xl">
      No results found
    </div> : <TableComponent columns={columns} data={data} />}
    <div className="flex flex-end justify-end items-center mb-4">
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" onClick={() => {
        deleteCookie("token")
        push("/")
      }}>
        Logout
      </button>
    </div>
  </div>
};

export default page;
