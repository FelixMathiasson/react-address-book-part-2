import './App.css';
import { Route, Routes } from 'react-router-dom'
import Menu from './components/menu'
import ContactsList from './components/ContactsList'
import ContactOutput from './components/ContactOutput'
import ContactAdder from './components/ContactAdder'

function App() {
    return (
        <>
            <header className='menu-bar'>
				<Menu />
			</header>            
            <div>
                <Routes>
                    <Route path = '/' />
                    <Route path= '/add-new-contact' element={<ContactAdder/>} />
                    <Route path = '/contacts' element = {<ContactsList/>} />
                    <Route path='/contacts/:id' element={<ContactOutput />} />
                </Routes>
            </div>
        </>
    )
    
}

export default App;
