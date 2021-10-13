const initialState = {
  loading: true,
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
  ]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}