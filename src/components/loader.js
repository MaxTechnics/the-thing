import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-navy);
  z-index: 99;

  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    transition: var(--transition);
    opacity: ${props => (props.isMounted ? 1 : 0)};
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
      #B {
        opacity: 0;
      }
    }
  }

  .gerald {
    opacity: 0;
  }
`;

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: '.gerald',
        delay: 300,
        duration: 800,
        easing: 'easeInOutQuart',
        opacity: 1,
        rotate: '180deg',
      })
      .add({
        targets: '.gerald',
        duration: 800,
        easing: 'easeInOutQuart',
        // rotate: '720deg'
        rotate: '360deg',
      })
      .add({
        targets: '.gerald',
        // delay: 500,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
        // rotate: '900deg'
        // rotate: '560deg'
      })
      .add({
        targets: '.loader',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledLoader className="loader" isMounted={isMounted}>
      <Helmet bodyAttributes={{ class: `hidden` }} />

      <div className="logo-wrapper">
        {/* <IconLoader /> */}
        <StaticImage
          backgroundColor="transparent"
          src="../images/gerald.png"
          width={100}
          quality={95}
          className="gerald"
          formats={['AUTO', 'WEBP', 'AVIF']}
          objectFit="contain"
          alt="Gerald"
        />
      </div>
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
