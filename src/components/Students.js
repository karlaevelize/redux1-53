import { useSelector } from "react-redux"
import { selectStudents, selectPopularStudents, selectMaleStudents } from "../store/students/selectors"

export default function Students(){

  const students = useSelector(selectStudents)
  console.log("students", students)

  const popularStudents = useSelector(selectPopularStudents)
  console.log("popular", popularStudents)

  const maleStudents = useSelector(selectMaleStudents)
  console.log("male", maleStudents)

  return(
    <div>
      <h2>Students</h2>
      {students.map(student => <p key={student.id}>{student.name}</p>)}
    </div>
  )
}