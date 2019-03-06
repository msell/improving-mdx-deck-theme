import theme from 'mdx-deck/themes'

import { code, header } from './fonts'
import colors from './colors'
import codeTheme from './improving-code-theme'

export * from './layouts'

export default {
  ...theme,
  font: header.join(','),
  monospace: code.join(','),
  transitionTimingFunction: 'linear',
  transitionDuration: '.3s',
  colors: {
    background: 'white',
    heading: colors.improving
  },
  blockquote: {
    color: colors.improving,
    paddingLeft: '2rem',
    borderLeft: `5px solid ${colors.improving}`
  },
  paragraph: {
    color: colors.improving
  },
  li: {
    color: colors.improving
  },
  prism: {
    style: codeTheme
  }
}
