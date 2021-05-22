// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  // Exercies
  // const handleSubmit = (event)=>{
  //   event.preventDefault();
  //   alert(event.target.elements[0].value)
  // }
  //
  // return (
  //   <form  onSubmit={handleSubmit}>
  //     <div>
  //       <label>Username:</label>
  //       <input type="text" />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )

  // extracredit 1
  // const inputRef = React.useRef(null);
  // const handleSubmit = (event)=>{
  //   event.preventDefault();
  //   if(inputRef.current && inputRef.current.value){
  //     alert(inputRef.current.value)
  //   }
  // }
  // return (
  //   <form  onSubmit={handleSubmit}>
  //     <div>
  //       <label>Username:</label>
  //       <input ref={inputRef} type="text" />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )

  // extracredit 2
  // const [errorMessage, setErrorMessage] = React.useState(null)
  // const inputRef = React.useRef(null);
  // const handleSubmit = (event)=>{
  //   event.preventDefault();
  //
  //   if(inputRef.current && inputRef.current.value){
  //     alert(inputRef.current.value)
  //   }
  // }
  // const handleChange = (event)=>{
  //   const value = event.target.value
  //   if(value || value===undefined){
  //     const isValid = value === value.toLowerCase()
  //     setErrorMessage(isValid ? null : 'Username must be lower case')
  //   }
  // }
  // return (
  //   <form  onSubmit={handleSubmit}>
  //     <div>
  //       <label>Username:</label>
  //       <input onChange={handleChange} ref={inputRef} type="text" />
  //     </div>
  //     {errorMessage}
  //     <button disabled={!!errorMessage} type="submit">Submit</button>
  //   </form>
  // )
  // extracredit 3
  const [username, setUsername] = React.useState(null)
  const handleSubmit = (event)=>{
    event.preventDefault();

    if(username){
      alert(username)
    }
  }
  const handleChange = (event)=>{
    const value = event.target.value
    if(value){

      setUsername(value.toLowerCase())
    }
  }
  return (
    <form  onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input onChange={handleChange} value={username} type="text" />
      </div>
      <button disabled={!username} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
