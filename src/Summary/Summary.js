import React from 'react'
import Total from './Total.js';
import Currency from '../Currency.js'

export default function Summary({ selected }) {
	const summaryItems = Object.keys(selected).map((feature, idx) => {
		const featureHash = feature + '-' + idx
		const selectedOption = selected[feature]

		return (
			<div className="summary__option" key={featureHash}>
				<div className="summary__option__label">{feature} </div>
				<div className="summary__option__value">
					{selectedOption.name}
				</div>
				<div className="summary__option__cost">
					{Currency.format(selectedOption.cost)}
				</div>
			</div>
		)
	})
	return <section className='main__summary'>
		{summaryItems}
		{<Total 
			selected={selected}
		/>}
	</section>
}