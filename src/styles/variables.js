import { css } from 'styled-components';

const variables = css`
  :root {
    --clr-surface-tonal-a0: #19241e;
    --clr-surface-tonal-a10: #2e3933;
    --clr-surface-tonal-a20: #454e49;
    --clr-surface-tonal-a30: #5d6560;
    --clr-surface-tonal-a40: #767d79;
    --clr-surface-tonal-a50: #909692;

    --gerald-outline: #583327;
    --gerald-fur: #ffd26e;
    --gerald-fur-darker: #cca858;
    --gerald-stripe: #b4713c;
    --gerald-feet: #8c5a38;
    --gerald-accent: #ffedc5;

    // --dark-navy: #020c1b;
    // --dark-navy: var(--clr-surface-tonal-a0);
    --dark-navy: var(--gerald-outline);

    // --navy: #0a192f;
    // --navy: var(--clr-surface-tonal-a10);
    --navy: var(--gerald-outline);

    // --light-navy: #112240;
    // --light-navy: var(--clr-surface-tonal-a20);
    --light-navy: var(--gerald-feet);
    // --lightest-navy: #233554;
    // --lightest-navy: var(--clr-surface-tonal-a30);
    --lightest-navy: var(--gerald-outline);

    // --navy-shadow: rgba(2, 12, 27, 0.7); // darknavy rgb
    // --navy-shadow: rgba(25, 36, 30, 0.7);
    --navy-shadow: rgba(88, 51, 39, 0.7);

    // --navcolor: rgba(46, 57, 51, 0.85); /* navy */
    --navcolor: rgba(88, 51, 39, 0.85); /* navy */

    --dark-slate: #495670;
    // --slate: #8892b0;
    --slate: var(--gerald-fur-darker);
    // --light-slate: #a8b2d1;
    --light-slate: var(--gerald-fur);
    // --lightest-slate: #ccd6f6;
    --lightest-slate: var(--gerald-fur);
    --white: #e6f1ff;

    // --green: #64ffda;
    // --green-tint: rgba(100, 255, 218, 0.1);
    // --green: #00e8a0;
    --green: var(--gerald-accent);
    --green-tint: rgba(255, 237, 197, 0.1);

    --pink: #f57dff;
    --blue: #57cbff;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    // --border-radius: 4px;
    --border-radius: 0.5rem;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
