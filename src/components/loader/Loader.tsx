
const Loader = () => {
  const customLoaderStyle = {
    width: '40px',
    height: '40px',
    '--c': 'linear-gradient(#766DF4 0 0)',
    '--r1': 'radial-gradient(farthest-side at bottom, #766DF4 93%, #0000)',
    '--r2': 'radial-gradient(farthest-side at top, #766DF4 93%, #0000)',
    background: `
      var(--c),
      var(--r1),
      var(--r2),
      var(--c),
      var(--r1),
      var(--r2),
      var(--c),
      var(--r1),
      var(--r2)`,
    backgroundRepeat: 'no-repeat',
    animation: 'db1 1s infinite alternate',
  };

  return <div style={customLoaderStyle}></div>;
};

export default Loader;
