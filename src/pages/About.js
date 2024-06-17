import React from 'react'
import myPic from '../assets/carnes.jpg'

function About() {
  return (
	/*
	<div className='flex bg-neutral-400 table-auto'>
		<div className='flex-none md:shrink-0'>
			<img src={myPic} className='rounded-full  w-auto h-96 m-10'></img>
		</div>
		<div className='p-8 flex-auto content-center m-10'>
			<p>
				My name is Zongyu Carnes or Ben for short. I am a third year student currently 
				in general maths at the University of Waterloo. 
				I recently transferred into the math faculty but have used various programming languages for 
				coursework and personal projects. I am fully prepared to immerse myself in new technologies 
				and methodologies to further my skills and contribute meaningfully.
			</p>
		</div>
	</div>
	
	*/

	<div class="max-w-max mx-auto bg-gray-300 rounded-xl shadow-md overflow-hidden md:max-w-max min-h-max hover:bg-gray-100">
		<div class="md:flex">
			<div class="md:shrink-0">
				<img class="rounded-full object-cover md:h-full md:w-48" src={myPic} alt="Pic of me"></img>
			</div>
			<div class="p-8">
				<div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Zongyu Carnes</div>
					<p class="mt-2 text-slate-500">
						My name is Zongyu Carnes or Ben for short. I am a third year student currently 
						in general maths at the University of Waterloo. 
						I recently transferred into the math faculty but have used various programming languages for 
						coursework and personal projects. I am fully prepared to immerse myself in new technologies 
						and methodologies to further my skills and contribute meaningfully.
					</p>
			</div>
		</div>
	</div>

  )
}

export default About