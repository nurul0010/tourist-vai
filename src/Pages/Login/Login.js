import React from 'react';
import useFirebase from '../Hooks/useFirebase';

const Login = () => {

    const { user, logOut, handleGoogleLogin } = useFirebase();

    return (
        <div>
            {!user.email ? <div>
                <h3>Please log in hare</h3>
                <form>
                    <input type="text" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <input type="submit" value='login' />
                </form>

                <br />
                <button onClick={handleGoogleLogin}>Google Signin</button>
            </div> :
                <div className='mt-5'>
                    <h3>Welcome</h3>
                    <h5>You are corrently sign in as - {user?.displayName}</h5>
                    <button className='mt-5 btn-secondary' onClick={logOut}>Logout</button>
                </div>}
        </div>
    );
};

export default Login;