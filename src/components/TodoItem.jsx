import styles from"./todoItem.module.css"
export default function TodoItem({item,todos,setTodos}) {
   function handleDelete(item){
    console.log("the button is clicked for this item",item);
   setTodos( todos.filter((todo)=> todo!==item));// filters and provide array
   }
   function handleClick(name){
   
setTodos( todos.map((todo)=>
    todo.name===name?{...todo,done:!todo.done}:todo // invert the value of done  
))

   }
   const classNames= item.done? styles.completed:"";// change the class name

   return <div className={styles.item}>
        <div className={styles.itemName}>
            <span className={classNames} onClick={()=>handleClick(item.name)}>{item.name}</span>
        <span>
            <button onClick={()=>handleDelete(item)} className={styles.deleteButton}>X</button>
            </span>
        </div>
       
        <hr className={styles.line}/>
        
        </div>
}