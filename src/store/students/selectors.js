export const selectStudents = (reduxState) => reduxState.students.students

export const selectPopularStudents = (reduxState) => {
  return reduxState.students.students.filter(student => student.popular)
}

export const selectMaleStudents = (reduxState) => {
  return reduxState.students.students.filter(student => student.gender === "m")
}

export const selectFavorites = (reduxState) => reduxState.students.favorites