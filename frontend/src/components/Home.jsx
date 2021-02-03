import React from 'react';

function Home() {
    return <div className='container'>
        <h1>Small Business Helper</h1>
        <form>
            <div class='form-group'>
                <label for='exampleInputEmail1'>Email address</label>
                <input type='email' class='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Enter email'></input>
                <small id='emailHelp' class='form-text text-muted'>We'll never share your email with anyone else.</small>
            </div>

            <div class='form-group'>
                <label for='exampleInputPassword1'>Password</label>
                <input type='password' class='form-control' id='exampleInputPassword1' placeholder='Password'></input>
            </div>
            
            <button type='submit' class='btn btn-primary'>Submit</button>
        </form>


    </div>
}

export default Home;