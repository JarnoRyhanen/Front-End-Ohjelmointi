import { useState, useRef } from 'react';
import { Todo } from '../types';
import { AgGridReact as AgGrid } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { ColDef } from "ag-grid-community"
import dayjs, { Dayjs } from 'dayjs';
import CustomDatePicker from './CustomDatePicker';

ModuleRegistry.registerModules([AllCommunityModule]);

const Todolist = () => {

    const [columnDefs] = useState<ColDef<Todo>[]>([
        { field: "description", sortable: true, filter: true, floatingFilter: true },
        {
            field: "priority",
            sortable: true,
            filter: true,
            floatingFilter: true,
            cellStyle: (params) =>
                params.value === "High" ? { color: "red" } : { color: "black" },
        },
        { field: "duedate", sortable: true, filter: true, floatingFilter: true },
    ]);
    const [value, setValue] = useState<Dayjs | null>(dayjs(''));

    const [todo, setTodo] = useState<Todo>({
        description: '',
        duedate: '',
        priority: '',
    });

    const [todos, setTodos] = useState<Todo[]>([]);
    const gridRef = useRef<AgGrid<Todo>>(null);

    const addTodo = () => {
        console.log(todo);
        setTodos([...todos, todo]);
        setTodo({ description: "", duedate: '', priority: "" });
    };

    const handleDelete = () => {
        if (gridRef.current?.api.getSelectedNodes().length) {
            setTodos(todos.filter((_todo, i) => i !== Number(gridRef.current?.api.getSelectedNodes()[0].id)));
        } else {
            alert("Select a row first!");
        }
    }

    const onchangeDate = (event: Dayjs | null) => {
        const formattedDate: string = event?.format("DD/MM/YYYY") || '';
        setTodo({...todo, duedate: formattedDate});
    }

    return (
        <>
            <div className='flex flex-col p-4 m-2 w-full'>
                <div className='mb-2 flex justify-center gap-1.5'>
                    <input
                        placeholder="Description"
                        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
                        value={todo.description}
                    />
                    <input
                        placeholder="Priority"
                        onChange={(e) => setTodo({ ...todo, priority: e.target.value })}
                        value={todo.priority}
                    />
                    <CustomDatePicker 
                    value={value}
                    onChange={onchangeDate}
                    />
                    <button onClick={addTodo}>Add</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
                <div className='m-auto w-[50rem] h-[20rem] justify-center'>
                    <AgGrid
                        ref={gridRef}
                        rowData={todos}
                        columnDefs={columnDefs}
                        rowSelection="single"
                    />
                </div>
            </div>
        </>
    )
};

export default Todolist;