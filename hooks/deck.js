import intro from './topics/intro.mdx'
import threeThings from './topics/three-things.mdx'
import wrapperHell from './topics/wrapper-hell.mdx'
import docs from './topics/docs.mdx'
import rules from './topics/rules.mdx'
// import useState from './topics/useState.mdx'
// import './fonts/Webfonts/futurapt_book_macroman/stylesheet.css'
// import './fonts/Webfonts/futurapt_bookitalic_macroman/stylesheet.css'
// import './fonts/Webfonts/futurapt_demi_macroman/stylesheet.css'
// import './fonts/Webfonts/futurapt_demiitalic_macroman/stylesheet.css'
// import 'typeface-space-mono'
// import 'typeface-spectral'

export { default as theme } from 'improving-mdx-theme'
export default [
  ...intro,
  ...threeThings,
  ...wrapperHell,
  ...rules,
  // ...useState,
  ...docs
]
