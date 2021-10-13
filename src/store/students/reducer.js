const initialState = {
  students: [
    { id: 1, name: "Anna", popular: true, gender: "f" },
    { id: 2, name: "Bruce", popular: true, gender: "m" },
    { id: 3, name: "Carol", popular: true, gender: "f" },
    { id: 4, name: "Daniel", popular: true, gender: "m" },
    { id: 5, name: "Evelyn", popular: true, gender: "f" },
    { id: 6, name: "Fernando", popular: false, gender: "m" },
    { id: 7, name: "Ginny", popular: false, gender: "f" },
    { id: 8, name: "Herman", popular: false, gender: "m" },
    { id: 9, name: "Iris", popular: false, gender: "f" },
    { id: 10, name: "Johann", popular: false, gender: "m"}
  ],
  favorites: [ 2, 3, 4 ]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "STUDENT/toggleFavorite": {

      const idCheck = state.favorites.includes(action.payload) 
        ? state.favorites.filter(fav => fav != action.payload)
        : [...state.favorites, action.payload]

      console.log("new array fav", idCheck)
      return {
        ...state,
        favorites: [...idCheck]
      }
    }
    default: {
      return state;
    }
  }
}