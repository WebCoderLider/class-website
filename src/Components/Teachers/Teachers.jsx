import React, { useEffect, useState } from 'react';
import './Teachers.css';
import axios from 'axios';

function Teachers() {
  const [teachers, setTeachers] = useState([])
  const [MainTeachers, setMainTeachers] = useState([])
  useEffect(() => {
    axios.get('https://api.11school11d.uz/teachers')
      .then(res => setTeachers(res.data))
      .catch(err => alert(err.message))
  }, [])
  useEffect(() => {
    axios.get('https://api.11school11d.uz/main-teachers')
      .then(res => setMainTeachers(res.data))
      .catch(err => alert(err.message))
  }, [])
  return (
    <div id="teachers" className="container my-5 py-5">
      <h2 className="text-center mb-5">O'qituvchilar</h2>

      <div className="d-flex justify-content-center row">
        {
          MainTeachers ? MainTeachers.map(el => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4 mx-2">
              <div className="card teacher-card shadow-sm">
                <img src={`https://api.11school11d.uz${el.image_url}`} className="card-img-top rounded-circle mx-auto mt-3" />
                <div className="card-body text-center">
                  <h5 className="card-title">{el.name}</h5>
                  <p className="card-text">{el.subject}</p>
                </div>
              </div>
            </div>
          )) : ""
        }
      </div>

      <div className="row">
        {teachers.map((teacher, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
            <div className="card teacher-card shadow-sm">
              <img src={`https://api.11school11d.uz${teacher.teacher_image}`} className="card-img-top rounded-circle mx-auto mt-3" alt={teacher.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{teacher.teacher_name}</h5>
                <p className="card-text">{teacher.teacher_subject}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teachers;
