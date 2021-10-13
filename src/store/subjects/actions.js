export const addSubject = (data) => {
  // console.log("data", data)
  return {
    type: "SUBJECT/add",
    payload: data
  }
}