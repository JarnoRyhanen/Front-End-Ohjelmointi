import { TodoTableProps } from '../types';

const TodoTable = (props: TodoTableProps) => {
    return (
        <>
            <div className='flex justify-center'>
                <table className='m-2 p-2 w-60/100 border-2'>
                    <thead>
                        <tr className='flex justify-around border-b-2 py-2'>
                            <th>Description</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.todos.map((todo, index) => (
                            <tr key={index} className='flex justify-around border-b-2 py-2'>
                                <td className='max-w-70 text-wrap break-words'>{todo.description}</td>
                                <td className=''>{todo.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TodoTable;