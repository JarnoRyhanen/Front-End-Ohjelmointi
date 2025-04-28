import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { ColDef } from "ag-grid-community";
import { useEffect, useState } from "react";
import { Customer } from "../Types";
import AddCustomer from "./AddCustomer";

ModuleRegistry.registerModules([AllCommunityModule]);

const CustomerListView = () => {
    const [customerData, setCustomerData] = useState<Customer[]>([]);
    const [showAddCustomerForm, setShowAddCustomerForm] = useState(false);
    const [newCustomer, setNewCustomer] = useState<Customer>({
        firstname: "",
        lastname: "",
        streetaddress: "",
        postcode: "",
        city: "",
        email: "",
        phone: "",
        _links: { self: "", customer: "", trainings: "" },
    });

    const fetchData = () => {
        fetch("https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/customers")
            .then((response) => response.json())
            .then((data) => {
                console.log(data._embedded.customers);
                setCustomerData(data._embedded.customers);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const [columnDefs] = useState<ColDef<Customer>[]>([
        { field: "firstname", headerName: "First Name" },
        { field: "lastname", headerName: "Last Name" },
        { field: "streetaddress", headerName: "Street Address" },
        { field: "postcode", headerName: "Postal Code" },
        { field: "city", headerName: "City" },
        { field: "email", headerName: "Email" },
        { field: "phone", headerName: "Phone" },
    ]);

    const handleAddCustomer = () => {
        setShowAddCustomerForm(true);
    };

    const handleFormClose = () => {
        setShowAddCustomerForm(false);
        setNewCustomer({
            firstname: "",
            lastname: "",
            streetaddress: "",
            postcode: "",
            city: "",
            email: "",
            phone: "",
            _links: { self: "", customer: "", trainings: "" },
        });
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch("https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/customers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCustomer),
        })
            .then((response) => {
                if (response.ok) {
                    fetchData();
                    handleFormClose();
                } else {
                    console.error("Failed to add customer");
                }
            })
            .catch((error) => console.error(error));
    };

    return (
        <div className="p-2 m-3 shadow h-screen">
            <div className="mb-4">
                <button
                    onClick={handleAddCustomer}
                    className="bg-[#4CAF50] text-white px-4 py-2 rounded shadow hover:bg-[#45a049] transition"
                >
                    Add Customer
                </button>
            </div>

            {showAddCustomerForm && <AddCustomer
                newCustomer={newCustomer}
                setNewCustomer={setNewCustomer}
                handleFormClose={handleFormClose}
                handleFormSubmit={handleFormSubmit}
            />}

            <AgGridReact className="z-10"
                rowData={customerData}
                columnDefs={columnDefs}
                defaultColDef={{
                    sortable: true,
                    filter: true,
                }}
            />
        </div>
    );
};

export default CustomerListView;