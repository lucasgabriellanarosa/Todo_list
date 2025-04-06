import { useSaveTodos } from "./hooks/useSaveTodos"
import styles from './App.module.css'
import { Header } from "./components/Header"

function App() {
  useSaveTodos()

  return (
    <div className={styles.container}>
      <header>
        <Header />
      </header>
    </div>
  )
}

export default App
