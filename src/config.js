module.exports = {
  email: 'mxm.coppieters@yahoo.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/maxtechnics',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/Maxim65846912',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/maxim-coppieters-846014292',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
    {
      name: 'Blog',
      url: '/blog',
    },
  ],

  colors: {
    // green: '#64ffda',
    green: '#ffedc5', // Gerald accent
    // navy: '#0a192f',
    navy: '#583327', // Gerald outline
    // darkNavy: '#020c1b'
    darkNavy: '#583327', // Gerald Outline
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
