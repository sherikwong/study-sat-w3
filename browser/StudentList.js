import React from "react";

const StudentList = props => {
  const students = props.students;
  return (
    <div>
      <form>
        <select>
    {students.map(student=> <option key={student.id}>{student.firstName}</option>)}
        </select>
        <button type="submit">Submit</button>
      </form>
  </div>
  );

}
export default StudentList;
