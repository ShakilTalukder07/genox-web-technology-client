import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Courses.css'

const Courses = () => {
    const courses = useLoaderData()
    // console.log(courses);
    return (
        <div>
            <h1 className='text-3xl font-bold'>We have {courses.length} courses.</h1>
            {
                courses.map(course => <p className='text-xl font-bold mt-3 '
                key={course.id}
                
                    >
                    { course.name }
                </p>)
}
        </div >
    );
};

export default Courses;