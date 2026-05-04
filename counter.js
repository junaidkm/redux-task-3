import { createStore, combineReducers } from "redux";


const counterInitialState = { count: 0 };

function counterReducer(state = counterInitialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    default:
      return state;
  }
}


const authInitialState = { user: null };

function authReducer(state = authInitialState, action) {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };

    case "LOGOUT":
      return { user: null };

    default:
      return state;
  }
}


const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});


const store = createStore(rootReducer);


store.subscribe(() => {
  console.log("Updated State:", store.getState());
});


store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

store.dispatch({ type: "LOGIN", payload: "Junaid" });
store.dispatch({ type: "LOGOUT" });


console.log("Final State:", store.getState());