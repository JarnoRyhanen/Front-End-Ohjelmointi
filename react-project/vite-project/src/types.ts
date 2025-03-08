export type Todo = {
    description: string;
    duedate: string;
    priority: string;
  }
  
  export type TodoTableProps = {
    todos: Todo[];
    handleDelete: (row: number) => void;
  }