import { registerRootComponent } from "expo";
import { createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import App from "./App";

const initialState = {
  markers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add":
      return {
        ...state,
        markers: [
          ...state.markers,
          {
            title: action.title,
            description: action.desc,
            shareFriends: action.share,
            coordinate: action.coordinate,
          },
        ],
      };
    default:
      return {
        ...state,
      };
  }
};

const store = createStore(reducer);

function AppContainer() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default registerRootComponent(AppContainer);
