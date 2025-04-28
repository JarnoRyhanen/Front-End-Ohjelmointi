import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { ColDef } from "ag-grid-community";
import { useEffect, useState } from "react";
import { Customer } from "../Types";
import AddCustomer from "./AddCustomer";
import EditCustomer from "./EditCustomer";

ModuleRegistry.registerModules([AllCommunityModule]);

const CustomerListView = () => {
    const [customerData, setCustomerData] = useState<Customer[]>([]);
    const [showAddCustomerForm, setShowAddCustomerForm] = useState(false);
    const [showEditCustomerForm, setShowEditCustomerForm] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

    const [newCustomer, setNewCustomer] = useState<Customer>({
        firstname: "",
        lastname: "",
        streetaddress: "",
        postcode: "",
        city: "",
        email: "",
        phone: "",
        _links: { self: { href: "" }, customer: { href: "" }, trainings: { href: "" } },
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
        {
            field: "_links.self",
            headerName: "EDIT",
            cellRenderer: (params: { data: Customer }) => (
                <button
                    className="text-blue-400 font-semibold"
                    onClick={() => handleEditCustomer(params.data)}
                >
                    EDIT
                </button>
            ),
        },
        {
            field: "_links.self",
            headerName: "DELETE",
            cellRenderer: (params: { value: { href: string } }) => (
                <button
                    className="text-red-500 font-semibold"
                    onClick={() => handleDelete(params.value.href)}
                >
                    Delete
                </button>
            ),
        },
    ]);

    const handleAddCustomer = () => {
        setShowAddCustomerForm(true);
    };

    const handleEditCustomer = (customer: Customer) => {
        setSelectedCustomer(customer);
        setShowEditCustomerForm(true);
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
            _links: { self: { href: "" }, customer: { href: "" }, trainings: { href: "" } },
        });
    };

    const handleEditFormClose = () => {
        setShowEditCustomerForm(false);
        setSelectedCustomer(null);
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

    const handleEditFormSubmit = (updatedCustomer: Customer) => {
        const url = updatedCustomer._links.self.href;
        fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedCustomer),
        })
            .then((response) => {
                if (response.ok) {
                    fetchData();
                    handleEditFormClose();
                } else {
                    console.error("Failed to edit customer");
                }
            })
            .catch((error) => console.error(error));
    };

    const handleDelete = (url: string) => {
        if (window.confirm("Are you sure you want to delete this customer?")) {
            fetch(url, {
                method: "DELETE",
            })
                .then((response) => {
                    if (response.ok) {
                        fetchData();
                    } else {
                        console.error("Failed to delete customer");
                    }
                })
                .catch((error) => console.error(error));
        }
    }

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

            {showAddCustomerForm && (<AddCustomer
                newCustomer={newCustomer}
                setNewCustomer={setNewCustomer}
                handleFormClose={handleFormClose}
                handleFormSubmit={handleFormSubmit}
            />)}

            {showEditCustomerForm && selectedCustomer && (
                <EditCustomer
                    updatedCustomer={selectedCustomer}
                    setUpdatedCustomer={setSelectedCustomer}
                    handleFormClose={handleEditFormClose}
                    handleFormSubmit={handleEditFormSubmit}
                />
            )}

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