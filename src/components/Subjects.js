import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { selectSubjects } from "../store/subjects/selectors"
import { addSubject } from "../store/subjects/actions"

export default function Subjects(){

  const dispatch = useDispatch()

  const [ newSubject, setNewSubject ] = useState("")
  
  console.log("to add:", newSubject)

  const subjects = useSelector(selectSubjects)

  return (
    <div>
      <h2>Subjects</h2>
      <input value={newSubject} onChange={(e) => setNewSubject(e.target.value)}/>
      <button onClick={() => dispatch(addSubject(newSubject))}>Add</button>
      {subjects.map(sub => <p key={sub.id}>{sub.name}</p>)} 
    </div>
  )
}