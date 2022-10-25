import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseOption = ({course}) => {
// const courseOption = useLoaderData();

    return (
        <div>
           <h1> {course.length} </h1>
        </div>
    );
};

export default CourseOption;