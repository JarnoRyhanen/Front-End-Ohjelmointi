import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { ColDef } from "ag-grid-community";
import { useEffect, useState } from "react";
import { Customer } from "../Types";

ModuleRegistry.registerModules([AllCommunityModule]);

const CustomerListView = () => {

    const [customerData, setCustomerData] = useState<Customer[]>([]);

    const fetchData = () => {
        fetch("https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/customers")
            .then((response) => response.json())
            .then((data) => {
                console.log(data._embedded.customers);
                setCustomerData(data._embedded.customers);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    const [columnDefs] = useState<ColDef<Customer>[]>([
        { field: "firstname", headerName: "First Name"},
        { field: "lastname", headerName: "Last Name" },
        { field: "streetaddress", headerName: "Street Address" },
        { field: "postcode", headerName: "Postal Code" },
        { field: "city", headerName: "City" },
        { field: "email", headerName: "Email" },
        { field: "phone", headerName: "Phone" },
    ]);

    return (
        <div className="p-2 m-3 shadow h-screen">
            <AgGridReact
                rowData={customerData}
                columnDefs={columnDefs}
                defaultColDef={{
                    sortable: true,
                    filter: true,
                }}
            />
        </div>
    );
}

export default CustomerListView;