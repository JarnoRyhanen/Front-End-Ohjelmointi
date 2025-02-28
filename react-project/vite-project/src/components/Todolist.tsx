import React from 'react';
import { useState } from 'react';
import TodoTable from './TodoTable';
import { Todo } from '../types';

const Todolist = () => {

    const [todo, setTodo] = useState<Todo>({
        description: '',
        date: ''
    });
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = () => {
        setTodos([...todos, todo]);
        setTodo({ description: "", date: "" });
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.id == "desc") {
            setTodo({ ...todo, description: event.target.value })
        } else {
            setTodo({ ...todo, date: event.target.value })
        }
    };

    const handleDelete = (row: number) => {
        setTodos(todos.filter((_todo, i) => i !== row));
    }

    return (
        <>
            <div className='bg-gray-700 mt-10 p-5 flex justify-evenly space-x-10 border-x-4 border-y-8 border-slate-900'>
                <h2 className='text-sky-50'>Add todo</h2>
                <input className='h-12 w-32 bg-white rounded-sm p-2 outline-offset-2 outline-sky-500 focus:outline-2' 
                    id="desc"
                    placeholder='Description'
                    onChange={handleChange}
                    value={todo.description} />
                <input  className='h-12 w-32 bg-white rounded-sm p-2 outline-offset-2 outline-sky-500 focus:outline-2' 
                    id='date'
                    placeholder='Date'
                    onChange={handleChange}
                    value={todo.date} />
                <button  className='h-12 w-24 bg-white rounded-3xl'  
                onClick={addTodo}>Add</button>
            </div>
                <TodoTable todos={todos} handleDelete={handleDelete} />
        </>
    )
};

export default Todolist;