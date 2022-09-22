import Redux from "redux";

// Function createStore dengan parameter sebuah reducer untuk menginisiasi store
const { createStore } = Redux;

const initialState = {
  counter: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

let store = createStore(counter);

// Function subscribe ( optional ) untuk bisa mendaftarkan sebuah aksi yang akan di trigger secara otomatis ketika ada perubahan state
store.subscribe(() => console.log(store.getState()));

// Function dispatch yang menerima parameter berupa object berisi type dan payload ( optional ) untuk diteruskan dan di konsumsi oleh reducer
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "DECREMENT" });
