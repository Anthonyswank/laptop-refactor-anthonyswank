import React from 'react';
import slugify from 'slugify';
import Currency from '../Currency.js';

export default function FeatureOptions({
	item,
	feature,
	itemHash,
	checked,
	onUpdateFeature
}) {
	return (
		<div className="feature__item">
			<input
				type="radio"
				id={itemHash}
				className="feature__option"
				name={slugify(feature)}
				checked={checked}
				onChange={e => onUpdateFeature(feature, item)}
			/>
			<label htmlFor={itemHash} className="feature__label">
				{item.name} ({Currency.format(item.cost)})
			</label>
		</div>
	)
}