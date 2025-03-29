import TodoItem from "./TodoItem";
import styles from "./todoList.module.css";
export default function TodoList({todos, setTodos}) {
    const sortedTodos=todos
    .slice()
    .sort((a, b)=> Number(a.done)-Number(b.done));// sorting array on the basis of done or not done
    return(
        <div className={styles.list}>
             {sortedTodos.map((item) => (
        <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos}/>
       ))}

        </div>

    );
}