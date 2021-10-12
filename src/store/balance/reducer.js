const initialState = {
  amount: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "USER/deposit": {
      // console.log("action", action)
      return {
        ...state,
        amount: state.amount + action.payload
      }
    }
    case "USER/reset": {
      return {
        ...state,
        amount: initialState.amount
      }
    }
    default: {
      return state;
    }
  }
}