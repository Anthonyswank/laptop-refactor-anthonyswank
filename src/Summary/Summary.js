import React from 'react';
import Options from './Options.js';
import Total from './Total.js';

export default class Summary extends React.Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.selected[feature];

      return (
        <Options
          key={featureHash}
          featureHash={featureHash}
          selectedOption={selectedOption}
          feature={feature}
        />
      );
    });

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <Total
          selected={this.props.selected}
        />
      </section>
    );
  }
}