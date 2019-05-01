// import { document, console } from 'global'
import { storiesOf } from '@storybook/html'

// https://storybook.js.org/docs/guides/guide-html/

storiesOf('Demo', module)
  .add('hi ho', () => require('./test.html'))
  .add('hi ho', () => require('./test.html'))
  .add('hi ho', () => require('./test.html'))
  .add('hi ho', () => require('./test.html'))
  .add('hi ho', () => require('./test.html'))
// .add('heading', () => '<h1>Hello World</h1>')
// .add('button', () => {
//   const button = document.createElement('button')
//   button.type = 'button'
//   button.innerText = 'Hello Button'
//   button.addEventListener('click', e => console.log(e))
//   return button
// });
