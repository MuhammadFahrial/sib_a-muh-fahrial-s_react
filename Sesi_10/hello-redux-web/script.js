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

// Function createStore dengan parameter sebuah reducer untuk menginisiasi store
var store = Redux.createStore(counter);

var el = document.getElementById("counter");
const render = () => {
  el.innerHTML = store.getState().counter.toString();
};

render();
// Function subscribe ( optional ) untuk bisa mendaftarkan sebuah aksi yang akan di trigger secara otomatis ketika ada perubahan state
store.subscribe(render);

var incEl = document.getElementById("increment");
var decEl = document.getElementById("decrement");

incEl.addEventListener("click", () => {
  // Function dispatch yang menerima parameter berupa object berisi type dan payload ( optional ) untuk diteruskan dan di konsumsi oleh reducer
  store.dispatch({ type: "INCREMENT" });
});

decEl.addEventListener("click", () => {
  // Function dispatch yang menerima parameter berupa object berisi type dan payload ( optional ) untuk diteruskan dan di konsumsi oleh reducer
  store.dispatch({ type: "DECREMENT" });
});
