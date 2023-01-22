import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

enum Page{
  LOGIN = 0,
  REGISTER = 1,
}

function App() {
  const [page, setPage] = useState(Page.LOGIN); // React Hook
  
  function handleCreateAccount(){
    // Setting LOGIN Page to REGISTER Page
    setPage(Page.REGISTER);
  }
  function handleAlreadyAccount(){
    // Setting REGISTER Page to LOGIN Page
    setPage(Page.LOGIN);
  }

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        { page === Page.REGISTER && <InputField placeholder='Email' type='email' /> }
        { <InputField placeholder='Username' type='text' /> }
        { <InputField placeholder='Password' type='password' /> }
        { page === Page.REGISTER && <InputField placeholder='Confirm Password' type='password' /> }
        { page === Page.REGISTER && <InputField placeholder='Mobile no' type='text' /> }
        { page === Page.LOGIN && <InputButton>Login</InputButton> }
        { page === Page.LOGIN && <InputButton onClick={handleCreateAccount}>Create an account</InputButton> }
        { page === Page.REGISTER && <InputButton onClick={handleAlreadyAccount}>Already have an account</InputButton> }
        { page === Page.REGISTER && <InputButton>Register</InputButton> }
      </div>
    </div>
  )
}

function InputField(props: any){

  // Custom INPUT Component/Element

  return(
    <input style={{height: '3em'}} placeholder={props.placeholder} type={props.type} />
  );
}

function InputButton(props: any){

  // Custom BUTTON Component/Element

  return(
    <button style={{height: '3em'}} onClick={props.onClick} >{props.children}</button>
  );
}

export default App
