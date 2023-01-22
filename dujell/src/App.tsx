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

  function handleLogin(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/login');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
      if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
        console.log('login credentials are good');
      }
    }
    xhr.send(JSON.stringify({ username, password }))

    console.log({ username, password });
    
  }

  return (
    <div className='dujell-font' style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: '20em', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          { page === Page.LOGIN && <h2>Login Here</h2> }
          { page === Page.REGISTER && <h2>Register Here</h2> }
        </div>
        { page === Page.REGISTER && <InputField placeholder='Email' type='email' /> }
        { <InputField id='username' placeholder='Username' type='text' /> }
        { <InputField id='password' placeholder='Password' type='password' /> }
        { page === Page.REGISTER && <InputField placeholder='Confirm Password' type='password' /> }
        { page === Page.REGISTER && <InputField placeholder='Mobile no' type='text' /> }
        { page === Page.LOGIN && <InputButton onClick={handleLogin} >Login</InputButton> }
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
    <input id={props.id} style={{ marginTop: '1.5em', height: '3em'}} placeholder={props.placeholder} type={props.type}/>
  );
}

function InputButton(props: any){

  // Custom BUTTON Component/Element

  return(
    <button style={{ marginTop: '1.5em', height: '3em'}} onClick={props.onClick} >{props.children}</button>
  );
}

export default App
