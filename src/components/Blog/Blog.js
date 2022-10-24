import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className='mt-6'>
                <h1 className='text-3xl font-bold'> 1. What is cors ?</h1>
                <br />
                <p className='text-2xl font-bold'>Cross-Origin Resource Sharing (CORS)</p>
                <br />
                <p><span className='font-bold'>Cross-Origin Resource Sharing</span> (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
            </div>
            <div className='mt-6'>
                <h1 className='text-3xl font-bold'>2. Why are we using firebase? What other options do we have to implement authentication ?</h1>
                <br />
                <p>The Firebase Realtime Database <span className='font-bold'>lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code.</span> Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
                <br />
                <p>
                    Some alternatives of firebase are: <span className='font-bold'>Auth0 –</span> Excellent for enabling secure, single sign-on. <span className='font-bold'>MongoDB –</span> Stores data in JSON-like documents.
                </p>
            </div>
            <div className='mt-6'>
                <h1 className='text-3xl font-bold'>How does the private route work?</h1>
                <br />
                <p><span className='font-bold'>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.</span> If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            </div>
            <div className='mt-6'>
                <h1 className='text-3xl font-bold'>What is Node ? How does Node work ?</h1>
                <br />
                <p><span className='font-bold'>NodeJs</span> is an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.</p>
                <br />
                <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js <span className='font-bold'>runs on chrome v8 engine which converts javascript code into machine code,</span> it is highly scalable, lightweight, fast, and data-intensive.</p>
            </div>
        </div>
    );
};

export default Blog;