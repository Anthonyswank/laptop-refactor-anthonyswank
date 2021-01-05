// This object will allow us to
// easily convert numbers into US dollar values
const Currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  export default Currency;