import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Courses.css'

const Courses = () => {
    const courses = useLoaderData()
    // console.log(courses);
    return (
        <div>
            <h1 className='text-3xl font-bold'>We have {courses.length} courses.</h1>
            <div className='flex justify-between'>
                <div>
                    {
                        courses.map(course => <p className='text-xl font-bold mt-3 '
                            key={course.id}>
                            <Link to={`/category/${course.id}`}>
                                {course.name}
                            </Link>
                        </p>)
                    }
                </div>
                {/* <div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div >
    );
};

export default Courses;