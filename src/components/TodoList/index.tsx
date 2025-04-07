import { useContext } from 'react'
import styles from './TodoList.module.css'
import { TodoContext } from '../../contexts/TodoContext'

export const TodoList = () => {

    const {state: todos} = useContext(TodoContext)

    return (
        <div className={styles.container}>
            {todos.length > 0 &&
                <div className={styles.infoTasksContainer}>
                    <span className={styles.infoDoneTasks}>Concluídas</span>

                    <div className={styles.infoCountDoneTasks}>
                        {todos.filter(item => item.isDone).length} de {todos.length}
                    </div>
                </div>
            }
        </div>
    )
}