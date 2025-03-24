import { useState } from "react";

function App() {
  const [data, setData] = useState([
    {
      grid: 1,
      name: 'Kishan',
      email: 'kishan@gmail.com',
      password: 'kishan@123',
      course: ["html", "css", "bootstrap", "js"],
      city: "Surat"
    },
    {
      grid: 2,
      name: 'Jay',
      email: 'jay@gmail.com',
      password: 'kishan@123',
      course: ["photoshop", "figma", "illustrator", "adobe xd"],
      city: "Rajkot"
    },
    {
      grid: 3,
      name: 'Ajay',
      email: 'ajay@gmail.com',
      password: 'ajay@123',
      course: ["html", "css", "bootstrap", "nodejs"],
      city: "Amreli"
    },
    {
      grid: 4,
      name: 'Nisha',
      email: 'nisha@gmail.com',
      password: 'nisha@123',
      course: ["html", "css", "bootstrap", "python"],
      city: "Vadodara"
    }
  ]);

  return (
    <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>Grid</th>
            <th>Name</th>
            <th>Email</th>
            <th>Courses</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => (
            <tr key={index}>
              <td>{value.grid}</td>
              <td>{value.name}</td>
              <td>{value.email}</td>
              <td>{value.course.join(", ")}</td>
              <td>{value.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
