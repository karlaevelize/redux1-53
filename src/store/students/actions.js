export const toggleFavorite = (id) => {
  console.log("toggle id", id)
  return {
    type: "STUDENT/toggleFavorite",
    payload: id
  }
}