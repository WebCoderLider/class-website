import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Students.css';
import axios from 'axios';



function Students() {
  const [searchTerm, setSearchTerm] = useState('');
  const [studentsData, setStudentsData] = useState([])

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStudents = studentsData.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() =>{
    axios.get('https://api.11school11d.uz/childrens')
    .then(res => setStudentsData(res.data))
    .catch(err => alert(err.message))
  },[])
  return (
    <div>
      <Navbar />
      <br /><br />
      <div className="container py-5">
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
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-img-container">
                  <img src={`https://api.11school11d.uz${student.image_url}`} className="card-img-top" alt={student.name} />
                  <div className="card-overlay">
                    <h5>{student.name}</h5>
                    <p>Yosh: {student.age}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Students;
