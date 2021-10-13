const initialState = {
  subjects: [
    { id: 1, name: "Math" },
    { id: 2, name: "Biology" },
    { id: 3, name: "Chemistry" },
    { id: 4, name: "Physics"},
    { id: 5, name: "Geography"},
  ]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SUBJECT/add": {
      // console.log("action", action.payload)
      return {
        ...state,
        subjects: [
          ...state.subjects, 
          {
            id: state.subjects.length + 1,
            name: action.payload
          }]
      }
    }
    case "SUBJECT/delete": {
      // console.log("action delete", action.payload)
      const arrayWithDeletedSubject = state.subjects.filter(sub => sub.id != action.payload)
      // console.log("new array", arrayWithDeletedSubject)
      return {
        ...state,
        subjects: [...arrayWithDeletedSubject]
      }
    }
    default: {
      return state;
    }
  }
}