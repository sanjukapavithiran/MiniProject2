import React from "react";
import { useParams } from "react-router-dom"; // Import useParams hook

const EnrollmentPage = () => {
  const { courseName } = useParams(); // Use useParams hook to access URL parameters

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Enrollment Request submitted!'); 
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>To Enroll for {courseName} ...</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
          <input type="text" id="name" name="name" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input type="email" id="email" name="email" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
          <textarea id="message" name="message" rows="4" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} required />
        </div>
        <div style={{ textAlign: 'center' }}>
          <button type="submit" style={{ backgroundColor: '#1eb2a6', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EnrollmentPage;
