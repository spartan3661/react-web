import React from 'react'

function Footer() {
	const currentYear = new Date().getFullYear()
	const emailAddress = 'wb5oc2fmn@mozmail.com'
  return (
	<div className='mt-10'>
		<footer className='fixed bottom-0 w-full bg-gray-800 text-white py-3 mt-auto'>
			<div className='content-center'>
				<p>{currentYear} @ Zongyu Carnes</p>
				<p>Email Me Here: <a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
			</div>
		</footer>
	</div>
  )
}

export default Footer