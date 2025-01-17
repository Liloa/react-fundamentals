// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
// // Exercise:
// const smallBox = <div className={'box box--small'} style={{backgroundColor:'lightblue', fontStyle: 'italic'}}>small lightblue box</div>
// const mediumBox = <div className={'box box--medium'} style={{backgroundColor:'pink', fontStyle: 'italic'}}>medium pink box</div>
// const largeBox = <div className={'box box--large'} style={{backgroundColor:'orange', fontStyle: 'italic'}}>large orange box</div>


// Extra credit 1
// const Box = ({className, style, children})=> <div className={className + ' box'} style={{...style, fontStyle: 'italic'}}>{children}</div>
//
// const smallBox = <Box className={'box--small'} style={{backgroundColor:'lightblue'}}>small lightblue box</Box>
// const mediumBox = <Box className={'box--medium'} style={{backgroundColor:'pink'}}>medium pink box</Box>
// const largeBox = <Box className={'box--large'} style={{backgroundColor:'orange'}}>large orange box</Box>

// Extra credit 2
const Box = ({className, style, size,...props})=> <div className={`box box--${size}`} style={{...style, fontStyle: 'italic'}} {...props}/>
// from the course
// const sizeClass = size ? `box--${size}` : ''
const smallBox = <Box size={'small'} style={{backgroundColor:'lightblue'}}>small lightblue box</Box>
const mediumBox = <Box size={'medium'} style={{backgroundColor:'pink'}}>medium pink box</Box>
const largeBox = <Box size={'large'} style={{backgroundColor:'orange'}}>large orange box</Box>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
