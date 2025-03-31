import { useEffect, useState } from 'react'
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ICellRendererParams, ModuleRegistry } from 'ag-grid-community';
import { ColDef } from "ag-grid-community";
import Button from '@mui/material/Button';
import AddCar from './AddCar';
import EditCar from './EditCar';

ModuleRegistry.registerModules([AllCommunityModule]);

const BASE_URL: string = "https://car-rest-service-carshop.2.rahtiapp.fi";

export type Car = {
    id: string;
    brand: string;
    color: string;
    model: string;
    fuel: string;
    modelYear: string;
    price: string;
    _links: {
        self: {
            href: string;
        };
    },
}

const Carlist = () => {

    const [columnDefs] = useState<ColDef<Car>[]>([
        { field: "brand" },
        { field: "color" },
        { field: "model" },
        { field: "fuel" },
        { field: "modelYear", headerName: "Year" },
        { field: "price" },
        { headerName: "Edit",
            cellRenderer: (params: ICellRendererParams<Car>) => 
                <EditCar currentCar={params.data as Car} fetchData={fetchData} />
        },
        {
            field: "_links.self.href", headerName: "DELETE",
            cellRenderer: (params: { value: string; }) => (
                <Button
                    onClick={() => handleDelete(params.value)}
                >
                    Delete
                </Button>
            )
        },
    ]);

    const handleDelete = (url: string) => {
        if (window.confirm("Do you want to delete car?")) {
            deleteCar(url);
        }
    }


    const [cars, setCars] = useState<Car[]>([]);

    const fetchData = () => {
        fetch(`${BASE_URL}/cars`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCars(data._embedded.cars);
            })
            .catch(error => console.error(error));
    }

    const deleteCar = (url: string) => {
        const options = {
            method: "DELETE"
        };
        fetch(url, options)
            .then(() => fetchData())
            .catch(error => console.log(error));

    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            <AddCar fetchData={fetchData} />
            <div style={{ width: screen.width, height: 1000 }}>
                <AgGridReact<Car>
                    rowData={cars}
                    columnDefs={columnDefs}
                />
            </div>
        </>
    )
}

export default Carlist;