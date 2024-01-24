import { createContext,useContext } from "react";

export const TodoContext = createContext({
    // todo array bnay
    // har ek todo pe apni id hogi
    // completed hai ya nhi wo likh di 
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,            
        }
        // upar ye properties hai

        
    ],
    // array ke bhr hai 
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}

    // ye upar sari functionalities hai inko
    // bas define karn hota hai
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider