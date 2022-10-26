import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseOption = () => {
    const courseOption = useLoaderData();
    console.log(courseOption);
    return (
        <div>
            {/* {
                courseOption.map( singleCourse => <p> {singleCourse.title} </p> )
            } */}
        </div>
    );
};

export default CourseOption;