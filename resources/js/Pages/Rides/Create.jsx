import React, { useState } from "react";
import Layout from "@/Layouts/layout/layout.jsx";
import { InputText } from "primereact/inputtext";
import InputError from "@/Components/InputError";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { router } from "@inertiajs/react";
import { Panel } from "primereact/panel";

const Create = () => {
    const [values, setValues] = useState({
        route_name: null,
        bus_name: null,
        departure_time: "",
        departure_date: "",
    });

    const cities = [
        { name: "Travis", value: "Travis" },
        { name: "RomeTsx", value: "RomeTsx" },
        { name: "LondonLV", value: "LondonLV" },
        { name: "Istanbul", value: "Istanbul" },
        { name: "ParisBL", value: "ParisBL" },
    ];

    const routes = [
        { name: "Nairobi - Mombasa", value: "Nairobi - Mombasa" },
        { name: "Mombasa - Kisumu", value: "Mombasa - Kisumu" },
        { name: "Kisumu - Nairobi", value: "Kisumu - Nairobi" },
        { name: "Nairobi - Eldoret", value: "Nairobi - Eldoret" },
        { name: "Eldoret - Mombasa", value: "Eldoret - Mombasa" },
    ];

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }
    function handleBusChange(e) {
        setValues((values) => ({
            ...values,
            bus_name: e.value,
        }));
    }

    function handleRouteChange(e) {
        setValues((values) => ({
            ...values,
            route_name: e.value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.post("/rides", values);
    }
    return (
        <Layout>
            <div className="col-12 xl:col-12">
                <Panel header="Create Rides">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">
                            Create rides
                        </h2>
                    </header>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label
                                htmlFor="route_name"
                                className="block text-900 font-medium mb-2"
                            >
                                Route Name
                            </label>
                            <Dropdown
                                value={values.route_name}
                                options={routes}
                                optionLabel="name"
                                onChange={handleRouteChange}
                                placeholder="Select a Route Name"
                                className="w-full"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="bus_name"
                                className="block text-900 font-medium mb-2"
                            >
                                Bus Name
                            </label>
                            <Dropdown
                                value={values.bus_name}
                                options={cities}
                                optionLabel="name"
                                onChange={handleBusChange}
                                placeholder="Select a Bus"
                                className="w-full"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="departure_time"
                                className="block text-900 font-medium mb-2"
                            >
                                Departure Time
                            </label>
                            <InputText
                                id="departure_time"
                                type="time"
                                placeholder="Current Password"
                                className="w-full"
                                value={values.departure_time}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="departure_date"
                                className="block text-900 font-medium mb-2"
                            >
                                Departure Date
                            </label>
                            <InputText
                                id="departure_date"
                                type="date"
                                className="w-full"
                                value={values.departure_date}
                                onChange={handleChange}
                            />
                        </div>

                        <Button label="Create" severity="success"></Button>
                    </form>
                </Panel>
            </div>
        </Layout>
    );
};

export default Create;
