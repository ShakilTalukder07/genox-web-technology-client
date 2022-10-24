import React from 'react';
import { FaFontAwesome, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <form>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Please Log In with your verify email address.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <div className="label">
                                    <p><Link href="#" className="link link-hover">Register</Link> Now.</p>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>
                            <button className="btn btn-wide sm:btn-sm md:btn-md lg:btn-lg"> <FaFontAwesome icon={FaGoogle}></FaFontAwesome> SignIn with Google</button>
                            </div>
                            <div>
                            <button className="btn btn-wide sm:btn-sm md:btn-md lg:btn-lg"> <FaFontAwesome icon={ FaGithub }></FaFontAwesome> SignIn With GitHub</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SignIn;