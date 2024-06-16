import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Students.css';

const studentsData = [
  {
    id: 1,
    name: 'John Doe',
    age: 18,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 17,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Sam Wilson',
    age: 19,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 4,
    name: 'Sara Connor',
    age: 18,
    image: 'https://via.placeholder.com/150'
  },
  // Add more students as needed
];

function Users() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStudents = studentsData.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="container py-5">
        <br />
        <h2 className="text-center mb-4">O'quvchilar</h2>
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Ism va familiya bo'yicha qidirish"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="row">
          {filteredStudents.map(student => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={student.id}>
              <div className="card student-card shadow-sm">
                <img src={student.image} className="card-img-top rounded-circle mx-auto mt-3" alt={student.name} />
                <div className="card-body text-center">
                  <h5 className="card-title">{student.name}</h5>
                  <p className="card-text">Yosh: {student.age}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Users;
