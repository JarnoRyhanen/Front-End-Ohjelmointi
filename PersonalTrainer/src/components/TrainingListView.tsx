import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { ColDef } from "ag-grid-community";
import { useEffect, useState } from "react";
import { Training } from "../Types";

ModuleRegistry.registerModules([AllCommunityModule]);

const TrainingListView = () => {

    const [trainingData, setTrainingData] = useState<Training[]>([]);

    const fetchData = () => {
        fetch("https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/gettrainings")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setTrainingData(data);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    const [columnDefs] = useState<ColDef<Training>[]>([
        { field: "customer.firstname", headerName: "Customer First Name" },
        { field: "customer.lastname", headerName: "Customer Last Name" },
        { field: "date", headerName: "Date", },
        { field: "duration", headerName: "Duration (min)" },
        { field: "activity", headerName: "Activity" },
    ]);

    return (
        <div className="p-2 m-3 shadow h-screen">
            <AgGridReact
                rowData={trainingData}
                columnDefs={columnDefs}
                defaultColDef={{
                    sortable: true,
                    filter: true,
                }}
            />
        </div>
    );
}

export default TrainingListView;