export const deposit = (data) => {
  return {
    type: "USER/deposit",
    payload: data
  }
}

export const reset = () => {
  return {
    type: "USER/reset"
  }
}