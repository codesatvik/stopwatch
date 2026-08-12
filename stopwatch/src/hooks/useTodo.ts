import axios from "axios";
import { useEffect, useState } from "react";


export function useTodos() { 
    const [todos, setTodos] = useState([]);
    useEffect(() => { 
        axios.get("https://jsonplaceholder.typicode.com/todos/")
            .then(response => { setTodos(response.data)})
    },[])
    return { todos, setTodos };
}
