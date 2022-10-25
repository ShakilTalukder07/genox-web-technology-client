import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignIn = () => {

    const { providerLogIn, signIn } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset(" ");
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='flex'>
            <form onSubmit={handleSignIn}>
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
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="btn-group btn-group-vertical ml-9 mt-10">
                <button onClick={handleGoogleSignIn} className="btn sm:btn-sm md:btn-md lg:btn-lg mb-4"> <FaGoogle className='mr-2'></FaGoogle> SignIn with Google</button>

                <button className="btn sm:btn-sm md:btn-md lg:btn-lg"><FaGithub className='mr-2'></FaGithub> SignIn With GitHub</button>
            </div>
        </div>
    );
};

export default SignIn;