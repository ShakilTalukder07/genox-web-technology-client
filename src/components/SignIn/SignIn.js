import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignIn = () => {
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { providerLogIn, gitHubLogIn, signIn } = useContext(AuthContext)

    const gitHubProvider = new GithubAuthProvider();

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

                navigate('/')
            })
            .catch(error => {
                console.error(error);
  
            })
    }

    const handleGitHubSignIn = () => {
        gitHubLogIn(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

                navigate('/');
            })
            .catch(error => {
                console.error(error);

            })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate('/')
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }

    return (
        <div className='flex'>
            <form onSubmit={handleSubmit}>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">Please LogIn with your verify email address. <span>You have to register first before you LogIn.</span></p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <div className="label">
                                        <p><Link to='/signUp' className="link link-hover">Register</Link> Now.</p>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <div>
                                    {error}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="btn-group btn-group-vertical ml-9 mt-10">
                <button onClick={handleGoogleSignIn} className="btn sm:btn-sm md:btn-md lg:btn-lg mb-4"> <FaGoogle className='mr-1'></FaGoogle>SignIn with Google</button>

                <button onClick={handleGitHubSignIn} className="btn sm:btn-sm md:btn-md lg:btn-lg"><FaGithub className='mr-2'></FaGithub> SignIn With GitHub</button>
            </div>
        </div>
    );
};

export default SignIn;