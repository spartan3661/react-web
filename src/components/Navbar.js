import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Navbar() {

	const [openLinks, setOpenLinks] = useState(false);
	const toggleOpenLinks = () =>{
		setOpenLinks(!openLinks)
	}
	
	return (
		<div className='navbar'>
			<div className='left-side' id={openLinks ? "open" :"close"}>
				<p className='text-white'>Zongyu Carnes</p>

				<a href="https://github.com/spartan3661" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
					<GitHubIcon className="text-gray-100 hover:text-gray-500 cursor-pointer w-8 h-8" />
				</a>

				<a href="https://linkedin.com/in/zongyu-carnes" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
					<LinkedInIcon className="text-gray-100 hover:text-gray-500 cursor-pointer w-8 h-8" />
				</a>

				<div className='hiddenLinks'>
					<Link to="/" className='text-white hover:text-gray-400'>About</Link>
					<Link to="/menu" className='text-white hover:text-gray-400'>Projects</Link>
					
					<Link to="/contact" className='text-white hover:text-gray-400'>Contact</Link>
				</div>
			</div>

			<div className='right-side'>
				<Link to="/" className='text-white hover:text-gray-400'>About</Link>
				<Link to="/project" className='text-white hover:text-gray-400'>Projects</Link>
				
				
				<button onClick={toggleOpenLinks}>
					<ReorderIcon />
				</button>

			</div>

		</div>
  )
}

/*<Link to="/contact" className='text-white hover:text-gray-400'>Contact</Link>*/
export default Navbar