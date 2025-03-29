import { useState } from "react";
import styles from "./form.module.css";
export default function Form({todos,setTodos}){
    // const[todo, setTodo]=useState("");
    const[todo,setTodo]=useState({name:"",done:false});

    function handleSubmit(e){
        e.preventDefault();//preventing auto submission of form
        setTodos([...todos,todo]);//adding items to list or array
        setTodo({name:"",done:false});//clearup
    }
    return(
         <form className={styles.todoform} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
            <input 
                    className={styles.modernInput}
                    placeholder="Enter todo item.."
                    onChange={(e)=> setTodo({name:e.target.value,done:false})} value={todo.name} type="text" />
                    <button className={styles.modernButton} type="submit">Add</button>
            </div>
                    
                </form>
    );
}