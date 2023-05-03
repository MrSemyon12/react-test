import Page from "./Page";
import { Provider } from "react-redux";
import store from "../store/index.js";
import "../css/App.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Page />
      </div>
    </Provider>
  );
}

export default App;
