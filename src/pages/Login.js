import { useNavigate } from "react-router-dom";
import { useState } from "react";

// logni and send props to show at dashboard

const Login = ({setUser}) =>{

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');

    // get this hook to navigate to dashboard
    const navigate = useNavigate()

    // check of null in name and email
    const handleSubmit = (e) =>{
        e.preventDefault()

        // if name and email are false that send return blank to stop 
        if(!name || !email) return;

        // if it true use this to set useState setUser in App.js
        // and go to dashboard to show name
        setUser({name : name, email : email})
        navigate('/dashboard')
    }

    return (
        <section className='section'>

        <form className='form' onSubmit={handleSubmit}>
          <h5>login</h5>

            <div className='form-row'>
                <label htmlFor='name' className='form-label'>
                    name
                </label>
                <input
                    type='text'
                    className='form-input'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className='form-row'>
                <label htmlFor='email' className='form-label'>
                    email
                </label>
                <input
                    type='email'
                    className='form-input'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <button type='submit' className='btn btn-block'>
                login
            </button>
        
        </form>
      </section>
    )
}

export default Login
