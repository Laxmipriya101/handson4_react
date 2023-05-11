import React from "react";
import Nav from "./Nav";

export default function Students() {
  return (
    <>
      <Nav />
      <br />
      <h1>Students Details</h1>
      <br />
      <br />
      <br />
      <br />
      <div className="box">
        <table className="tableBox">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr>
          <tr>
            <td>John</td>
            <td>24</td>
            <td>MERN</td>
            <td>October</td>
            <td>Edit</td>
          </tr>

          <tr>
            <td>Doe</td>
            <td>25</td>
            <td>MERN</td>
            <td>November</td>
            <td>Edit</td>
          </tr>
          <tr>
            <td>Biden</td>
            <td>26</td>
            <td>MERN</td>
            <td>October</td>
            <td>Edit</td>
          </tr>
          <tr>
            <td>Barar</td>
            <td>22</td>
            <td>MERN</td>
            <td>September</td>
            <td>Edit</td>
          </tr>
          <tr>
            <td>Christ</td>
            <td>23</td>
            <td>MERN</td>
            <td>October</td>
            <td>Edit</td>
          </tr>
          <tr>
            <td>Elent</td>
            <td>24</td>
            <td>MERN</td>
            <td>November</td>
            <td>Edit</td>
          </tr>
        </table>
      </div>
    </>
  );
}
