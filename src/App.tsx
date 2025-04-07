import { useSaveTodos } from "./hooks/useSaveTodos"
import styles from './App.module.css'
import { Header } from "./components/Header"
import { TodoList } from "./components/TodoList"

function App() {
  useSaveTodos()

  return (
    <div className={styles.container}>
      <header>
        <Header />
      </header>

      <main>
        <TodoList />
      </main>
    </div>
  )
}

export default App
