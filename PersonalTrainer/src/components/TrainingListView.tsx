import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { ColDef } from "ag-grid-community";
import { useEffect, useState } from "react";
import { AddTraining as AddT, Training } from "../Types";
import dayjs from "dayjs";
import AddTraining from "./AddTraining";

ModuleRegistry.registerModules([AllCommunityModule]);

const TrainingListView = () => {
    const [trainingData, setTrainingData] = useState<Training[]>([]);
    const [showAddTrainingForm, setShowAddTrainingForm] = useState(false);
    const [newTraining, setNewTraining] = useState<AddT>({
        date: "",
        duration: 0,
        activity: "",
        customer: "",
    });

    const [columnDefs] = useState<ColDef<Training>[]>([
        { field: "customer.firstname", headerName: "Customer First Name" },
        { field: "customer.lastname", headerName: "Customer Last Name" },
        {
            field: "date",
            headerName: "Date",
            valueFormatter: (params) => {
                return dayjs(params.value).format("DD.MM.YYYY HH:mm");
            },
        },
        { field: "duration", headerName: "Duration (min)" },
        { field: "activity", headerName: "Activity" },
        {
            field: "id",
            headerName: "DELETE",
            cellRenderer: (params: {value: string}) => (
                <button
                    className="text-red-500 font-semibold"
                    onClick={() => handleDelete(params.value)}
                >
                    Delete
                </button>
            ),
        },
    ]);

    const fetchData = () => {
        fetch("https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/gettrainings")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setTrainingData(data);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleAddTraining = () => {
        setShowAddTrainingForm(true);
    };

    const handleFormClose = () => {
        setShowAddTrainingForm(false);
        setNewTraining({
            date: "",
            duration: 0,
            activity: "",
            customer: "",
        });
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch("https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/trainings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTraining),
        })
            .then((response) => {
                if (response.ok) {
                    fetchData();
                    handleFormClose();
                } else {
                    console.error("Failed to add training");
                }
            })
            .catch((error) => console.error(error));
    };

    const handleDelete = (trainingId: string) => {
        if (window.confirm("Are you sure you want to delete this training entry?")) {
            fetch(`https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/trainings/${trainingId}`, {
                method: "DELETE",
            })
                .then((response) => {
                    if (response.ok) {
                        fetchData();
                    } else {
                        console.error("Failed to delete training entry");
                    }
                })
                .catch((error) => console.error(error));
        }
    }

    return (
        <div className="p-2 m-3 shadow h-screen">
            <div className="mb-4">
                <button
                    onClick={handleAddTraining}
                    className="bg-[#4CAF50] text-white px-4 py-2 rounded shadow hover:bg-[#45a049] transition"
                >
                    Add Training
                </button>
            </div>

            {showAddTrainingForm && (
                <AddTraining
                    newTraining={newTraining}
                    setNewTraining={setNewTraining}
                    handleFormClose={handleFormClose}
                    handleFormSubmit={handleFormSubmit}
                />
            )}

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
};

export default TrainingListView;