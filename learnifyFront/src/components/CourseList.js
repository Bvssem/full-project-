import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses } from '../store/actions/courseActions';
import Course from './Course';
import './CourseList.css'; // Import CSS file for styling

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.course.courses);
  const loading = useSelector(state => state.course.loading);
  const error = useSelector(state => state.course.error);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="course-list-container">
      <h2>Course List</h2>
      <div className="course-cards">
        {courses.map(course => (
          <div className="course-card" key={course.id}>
            <Course course={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
