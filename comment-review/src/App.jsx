import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DynamicTable() {
  const [rows, setRows] = useState([
    { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com", salary: "$75,000" },
    { id: 2, name: "Michael Smith", email: "michael.smith@example.com", salary: "$60,000" },
    { id: 3, name: "Samantha Brown", email: "samantha.brown@example.com", salary: "$85,000" },
  ]);

  const handleChange = (id, field, value) => {
    setRows(rows.map((row) => (row.id === id ? { ...row, [field]: value } : row)));
  };

  const addRow = () => {
    setRows([...rows, { id: Date.now(), name: "", email: "", salary: "" }]);
  };

  const deleteRow = (id) => {
    if (rows.length > 3) {
      setRows(rows.filter((row) => row.id !== id));
    } else {
      alert("At least three rows should be present.");
    }
  };

  return (
    <div className="container mt-5 p-4 bg-light rounded shadow">
      <h2 className="text-center mb-4 text-primary">Employee Salary Table</h2>
      <table className="table table-striped table-bordered text-center">
        <thead className="bg-primary text-white">
          <tr>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.id} className={index % 2 === 0 ? "table-success" : "table-warning"}>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={row.name}
                  onChange={(e) => handleChange(row.id, "name", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="email"
                  className="form-control"
                  value={row.email}
                  onChange={(e) => handleChange(row.id, "email", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={row.salary}
                  onChange={(e) => handleChange(row.id, "salary", e.target.value)}
                />
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteRow(row.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center">
        <button className="btn btn-success" onClick={addRow}>Add Row</button>
      </div>
    </div>
  );
}