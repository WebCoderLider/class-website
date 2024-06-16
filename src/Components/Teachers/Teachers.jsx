import React from 'react';
import './Teachers.css';

const teachers = [
  {
    name: 'Toshpolatov Toshmamat',
    subject: 'Matematika',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVjakdlwjqHkqRZ7MX0n6gGR5ZF5T2IHv1-A&s'
  },
  {
    name: 'Alisher Alisherov',
    subject: 'Informatika',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEHrPwIPqCNDPc8Yb_t6_WvH839-3h8M4RzQ&s'
  },
  {
    name: 'Zaynabjon Zaynapova',
    subject: 'Ona tili',
    image: 'https://img.lovepik.com/element/40113/3290.png_300.png'
  },
  {
    name: 'Saida Saidova',
    subject: 'Ingiliz tili',
    image: 'https://img.lovepik.com/photo/20230421/medium/lovepik-old-female-english-teacher-and-students-in-the-classroom-photo-image_352156615.jpg'
  }
];

function Teachers() {
  return (
    <div className="container my-5 py-5">
      <h2 className="text-center mb-5">O'qituvchilar</h2>

      <div className="d-flex justify-content-center">
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card teacher-card shadow-sm">
            <img src={'https://img.lovepik.com/photo/20230421/medium/lovepik-old-female-english-teacher-and-students-in-the-classroom-photo-image_352156615.jpg'} className="card-img-top rounded-circle mx-auto mt-3" />
            <div className="card-body text-center">
              <h5 className="card-title">Ra'no Ra'noeva</h5>
              <p className="card-text">Direktorimz</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {teachers.map((teacher, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
            <div className="card teacher-card shadow-sm">
              <img src={teacher.image} className="card-img-top rounded-circle mx-auto mt-3" alt={teacher.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{teacher.name}</h5>
                <p className="card-text">{teacher.subject}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teachers;
