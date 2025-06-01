import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
// import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledVideoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .projects-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    // grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-template-columns: repeat(2, 1fr); /* 2 columns by default */
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;
    width: 100%;
    height: -webkit-max-content; /* Safari fix */

    @media (max-width: 1080px) {
      //   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      grid-template-columns: repeat(1, 1fr); /* 1 column on smaller screens */
    }
  }
`;

const StyledProject = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .project-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);
    overflow: auto;
  }

  header {
    width: 100%;
  }

  .project-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);

    a {
      position: static;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .project-description {
    color: var(--light-slate);
    font-size: 17px;

    aspect-ratio: 16/9;

    .vimeocontainer {
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: var(--border-radius);
    }
    .vimeoframe {
      height: 100%;
      width: 100%;
      outline: none;
    }

    .youtubeframe {
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      outline: none;
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;

const Vijeos = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/projects/" }
          frontmatter: { video_title: { ne: "", regex: "/.*/" } }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              video_embed
              video_title
              video_id
              tech
              tuurfix
            }
          }
        }
      }
    }
  `);

  const revealTitle = useRef(null);
  const revealVids = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    revealVids.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const GRID_LIMIT = 6;
  const projects = data.projects.edges.filter(({ node }) => node);
  const vidsToShow = projects;

  const videoInner = node => {
    const { frontmatter } = node;
    const { video_embed, video_title, video_id, tech, tuurfix } = frontmatter;
    const extrastyle = tuurfix ? { aspectRatio: '2 / 1' } : {};

    return (
      <div className="project-inner">
        <header>
          <h3 className="project-title">{`${video_title} `}</h3>

          <div className="project-description" style={extrastyle}>
            {video_embed === 'vimeo' && (
              <>
                <div className="vimeocontainer">
                  <iframe
                    className="vimeoframe"
                    src={`https://player.vimeo.com/video/${video_id}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    title={video_title}></iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
              </>
            )}
            {video_embed === 'youtube' && (
              <iframe
                className="youtubeframe"
                src={`https://www.youtube-nocookie.com/embed/${video_id}?controls=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
            )}
          </div>
        </header>

        <footer>
          {tech && (
            <ul className="project-tech-list">
              {tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          )}
        </footer>
      </div>
    );
  };

  return (
    <StyledVideoSection id="videos">
      <h2 className="numbered-headingd" ref={revealTitle}>
        Videos
      </h2>

      <ul className="projects-grid">
        {prefersReducedMotion ? (
          <>
            {vidsToShow &&
              vidsToShow.map(({ node }, i) => (
                <StyledProject key={i}>{videoInner(node)}</StyledProject>
              ))}
          </>
        ) : (
          <TransitionGroup component={null}>
            {vidsToShow &&
              vidsToShow.map(({ node }, i) => (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}>
                  <StyledProject
                    key={i}
                    ref={el => (revealVids.current[i] = el)}
                    style={{
                      transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                    }}>
                    {videoInner(node)}
                  </StyledProject>
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
      </ul>
    </StyledVideoSection>
  );
};

export default Vijeos;
