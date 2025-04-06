import { ChangeEvent, useContext } from 'react'
import { Todo } from '../../@types/Todo'
import styles from './TodoItem.module.css'
import { TodoContext } from '../../contexts/TodoContext'
import TrashIcon from '../../assets/trash.svg?react'


type Props = {
    data: Todo,
    dataIndex: number
}

export const TodoItem = ({ data, dataIndex }: Props) => {
    const {dispatch} = useContext(TodoContext)
    
    const handleToggleIsDone = (ev: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'CHANGE',
            payload: {
                index: dataIndex,
                isDone: ev.target.checked
            }
        })
    }

    const handleDelete = () => {
        dispatch({
            type: 'DELETE',
            payload: {
                index: dataIndex
            }
        })
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.isDoneContainer}>
                <input
                    type='checkbox'
                    className={styles.isDoneInput}
                    checked={data.isDone}
                    onChange={handleToggleIsDone}
                />
            </div>

            <div className={`${styles.taskTitleContainer} ${data.isDone ? styles.taskDoneTitleContainer : ''} `}>
                {data.title}
            </div>

            <div className={styles.deleteTaskContainer}>
                <button 
                    className={styles.deleteTaskBtn}
                    onClickCapture={handleDelete}
                >
                    <TrashIcon />
                </button>
            </div>
        </div>
    )
}