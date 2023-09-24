import './App.css'
import Header from './components/Header/Header'
import GlobalProvider from './context/GlobalState'
function App() {

  return (
    <>
    <GlobalProvider>
      <Header />
      <h1>Hello Word</h1>
    </GlobalProvider>
    </>
  )
}

export default App
