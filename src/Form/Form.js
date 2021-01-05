import React from 'react'
import Features from '../Features/Features'

export default function Form({ features, onUpdateFeature, selected }) {
	const featureItems = Object.keys(features).map((feature, idx) => {
		const featureHash = feature + '-' + idx
		const options = features[feature]
		return (
			<Features
				key={featureHash}
				feature={feature}
				options={options}
				onUpdateFeature={onUpdateFeature}
				selected={selected}
			/>
		)
	})
	return (
		<form className="main__form">
			<h2>Customize your laptop</h2>
			{featureItems}
		</form>
	)
}