export const addSubject = (data) => {
  // console.log("data", data)
  return {
    type: "SUBJECT/add",
    payload: data
  }
}

export const deleteSubject = (id) => {
  // console.log("id to delete", id)
  return {
    type: "SUBJECT/delete",
    payload: id
  }
}