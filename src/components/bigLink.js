import React from 'react'
import {Link as GatsbyLink} from 'gatsby'
import css from '@emotion/css'

export default function BigLink({to, children, external, noMargin}) {
  const linkStyle = css`
    text-decoration: none;
    &:hover,
    &:active {
      text-decoration: underline;
    }
  `
  return (
    <h1
      css={css`
        ${noMargin && `margin: 0`};
      `}
    >
      {external ? (
        <a href={to} css={linkStyle} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <GatsbyLink to={to} css={linkStyle}>
          {children}
        </GatsbyLink>
      )}
    </h1>
  )
}
