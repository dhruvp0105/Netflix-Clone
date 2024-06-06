import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../firebase'
import netfilx_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

  const [signState, setSignstate] = useState("Sign In")

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();  //It will not reload the page when submit the form
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password)
    }
    else {
      await signup(name, email, password)
    }
    setLoading(false);

  }

  return (
    loading ? <div className="login-spinner">
      <img src={netfilx_spinner} alt='netflix-img'></img>
    </div>
      :
      <div className='login'>
        <img src={logo} alt='logo-img' className='login-logo'></img>
        <div className="login-form">
          <h1>{signState}</h1>
          <form action=''>
            {
              signState === "Sign Up" ? <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Your name'></input> : <></>
            }
            <input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Email'></input>
            <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Password'></input>
            <button onClick={user_auth} type='submit'>{signState}</button>
            <div className="form-help">
              <div className="remember">
                <input type='checkbox'></input>
                <label htmlFor=''>remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>

          <div className="form-switch">
            {
              signState === "Sign In" ? <p>New to Netflix? <span onClick={() => { setSignstate("Sign Up") }}>Sign Up Now</span></p> : <p>Already have Account? <span onClick={() => { setSignstate("Sign In") }}>Sign In Now</span></p>
            }
          </div>
        </div>
      </div>
  )
}

export default Login