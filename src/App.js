import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import About from './pages/About';
import Footer from './components/Footer';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {

	return (
		<div className="App">
			
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' exact element={<About/>}/>
					<Route path='/project' exact element={<Project/>}/>
					<Route path='/contact' exact element={<Contact/>}/>
				</Routes>
				<Footer/>

			</Router>

		</div>
	);
}

export default App;
