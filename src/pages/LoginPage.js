import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { authenticateUser } from '../features/auth/authSlice'
import { useNavigate } from "react-router-dom"
import { FaUserCircle } from 'react-icons/fa'

function LoginPage() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm() //cf. https://www.react-hook-form.com/api/useform/
  const { token, loginError } = useSelector((state) => state.auth)
  
  //data = {email: string, password: string}
  const submitForm = (data) => {
    dispatch(authenticateUser(data))
  }

  useEffect(() => {
    document.title = 'ArgentBank - Login'
    if(token){
      navigate('/profile')
    }
}, [navigate, token, ])

  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
        <FaUserCircle size={18} />
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input type="email" id="username" {...register('email')} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" {...register('password')} />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" type='submit'>Sign In</button>
            {/*the error message is dynamically retreived from the API response,
            so that the user can know what to modify (if email exists but password doesn't match,
            for example)*/}
            { (loginError) && (<div className='login-error'>{loginError}</div>) }
          </form>
        </section>
      </main>
    </>
  );
}

export default LoginPage