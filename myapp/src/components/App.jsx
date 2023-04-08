import Post from "./Post";
import "../css/App.css";

function App() {
  return (
    <div className="App">
      <Post post={{ id: 1, title: "Java", body: "sadDadwfafaf" }} />
    </div>
  );
}

export default App;
