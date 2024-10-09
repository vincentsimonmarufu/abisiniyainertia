import React from "react";
import Layout from "@/Layouts/layout/layout.jsx";
import { Link } from "@inertiajs/react";
import Table from "@/Components/Table/Table";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Index = ({ rides }) => {
    const columns = [
        {
            title: "Route Name",
            accessor: "route_name",
        },
        {
            title: "Bus Name",
            accessor: "bus_name",
        },
        {
            title: "Departure Time",
            accessor: "departure_time",
        },
        {
            title: "Departure Date",
            accessor: "departure_date",
        },
        {
            title: "Actions",
            accessor: "actions",
            render: ({ id }) => (
                <div>
                    <Link
                        href={route("rides.edit", id)}
                        className="p-button p-component p-button-success mr-1"
                    >
                        Edit
                    </Link>
                    <Link
                        href={route("rides.destroy", id)}
                        className="p-button p-component p-button-danger"
                        method="delete"
                    >
                        Delete
                    </Link>
                </div>
            ),
        },
    ];

    return (
        <Layout>
            <div className="col-12 xl:col-12">
                <div className="card">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">
                            Rides
                        </h2>
                        <Link
                            href={route("rides.create")}
                            className="p-button p-component p-button-primary"
                        >
                            Create Ride
                        </Link>
                    </header>
                    <Table columns={columns} data={rides.data} />
                    <div className="flex justify-center mt-4">
                        {rides.links.map((link, key) => (
                            <React.Fragment key={key}>
                                {link.url === null ? (
                                    <span className="py-2 px-3 leading-tight text-gray-600">
                                        ...
                                    </span>
                                ) : link.label === "Previous" ? (
                                    <Link
                                        href={link.url}
                                        className={`py-2 px-3 leading-tight flex items-center text-gray-600 bg-white border border-gray-300 hover:bg-gray-100 ${
                                            link.active
                                                ? "bg-blue-500 text-primary"
                                                : "text-gray-600"
                                        }`}
                                    >
                                        <HiChevronLeft className="mr-2" />
                                        Previous
                                    </Link>
                                ) : link.label === "Next" ? (
                                    <Link
                                        href={link.url}
                                        className={`py-2 px-3 leading-tight flex items-center text-gray-600 bg-white border border-gray-300 hover:bg-gray-100 ${
                                            link.active
                                                ? "bg-blue-500 text-primary"
                                                : "text-gray-600"
                                        }`}
                                    >
                                        Next
                                        <HiChevronRight className="ml-2" />
                                    </Link>
                                ) : (
                                    <Link
                                        href={link.url}
                                        className={`py-2 px-3 leading-tight text-gray-600 bg-white border border-gray-300 hover:bg-gray-100 ${
                                            link.active
                                                ? "bg-blue-500 text-primary"
                                                : "text-gray-600"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Index;
