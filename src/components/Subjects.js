import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { selectSubjects } from "../store/subjects/selectors"
import { selectFavorite, selectFavorites } from "../store/students/selectors"
import { addSubject, deleteSubject } from "../store/subjects/actions"
import { toggleFavorite } from "../store/students/actions"

export default function Subjects(){

  const dispatch = useDispatch()

  const [ newSubject, setNewSubject ] = useState("")
  // cconsole.log("to add:", newSubject)

  const subjects = useSelector(selectSubjects)
  // console.log("subjects", subjects)

  const favorites = useSelector(selectFavorites)
  console.log("favorites", favorites)

  return (
    <div>
      <h2>Subjects</h2>
      <input value={newSubject} onChange={(e) => setNewSubject(e.target.value)}/>
      <button onClick={() => dispatch(addSubject(newSubject))}>Add</button>
      {subjects.map(sub => <div key={sub.id}>
        <p>{sub.name} 
          <button onClick={() => dispatch(deleteSubject(sub.id))}>Remove</button>
          <button onClick={() => dispatch(toggleFavorite(sub.id))}>{favorites.includes(sub.id) ? "♥" : "♡"}</button>
        </p> 
        </div>)} 
    </div>
  )
}