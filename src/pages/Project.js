import Card from '../components/Card'
import React from 'react'
import audioVizPic from '../assets/audio-visualizer.png'

export default function Project() {
	const visualizerData = {
		title: "Audio Visualizer",
		description: "A simple audio visualizer app built using Python and PyQT5.",
		imageURL: audioVizPic,
		webURL: 'https://github.com/spartan3661/audioVisualizer'
	}

	const ItemGrid = ({ items }) => {
		return (
		  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
			{items.map((item, index) => (
			  <div key={index} className='rounded'>
				{item}
			  </div>
			))}
		  </div>
		);
	  }

	const items =[<Card title={visualizerData.title} 
		description={visualizerData.description} 
		imageURL={visualizerData.imageURL} 
		webURL={visualizerData.webURL}/>]


	
  return (
	<div>
		<ItemGrid items = {items} />
	</div>
  )
}
