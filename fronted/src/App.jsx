import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import CreateRecipePage from './pages/CreateRecipePage'
import EditRecipePage from './pages/EditRecipePage'

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/create' element={<CreateRecipePage />} />
            <Route path='/edit/:id' element={<EditRecipePage />} />       
        </Routes>
    </BrowserRouter>
  )
}

export default App
