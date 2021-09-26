import React, {useState} from 'react'

import Todo from '../componets/Todo';
import Addtodo from './Addtodo';

export default function Todos() {

    function onDelete(todo)
    {
        const r=todos.filter((e) => {
            return e!==todo
        })
        setTodo(r);
        console.log(todos);
    }

    const AddTodoFunc = ((desc,time) =>
    {
        let s=0;
        if (todos.length === 0) {
            s = 0;
        }
        else
        {
            s=todos[todos.length-1].sno+1;
        }
        const t={
            sno:s,
            desc: desc,
            time:time
        }
        setTodo([... todos,t]);
    })

    let [todos, setTodo] = useState([
        {
            sno: 1,
            desc: "brush teeth",
            time: "7:00"
        },
        {
            sno: 2,
            desc: "Add breakfast",
            time: "7:30"
        },
        {
            sno: 3,
            desc: "goto college",
            time: "8:00"
        },
    ])
    return (
        <div>
            <Addtodo addtodo={AddTodoFunc}/>
            { todos.map((todo) => {
                return <Todo key={todo.sno} onDelete={onDelete} result={todo}/>
            })
            }
        </div>
    )
}
