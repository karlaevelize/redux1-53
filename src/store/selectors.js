//cross slice example
//we are replacing the id's with the actual object

export const selectFavoritesWithSubjects = reduxState => {
  //1. map the array of favorites
  return reduxState.students.favorites.map(favId => {
   //2. find a matching id in the subject array
   //3. if it matches, we keep that object in the new array
    return reduxState.subjects.subjects.find(sub => sub.id === favId)
  })
}