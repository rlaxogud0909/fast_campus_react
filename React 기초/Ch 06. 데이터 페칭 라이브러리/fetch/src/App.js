import "./App.css";
import Chache from "./components/SWRExample/Chache";
import Fetcher from "./components/SWRExample/Fetcher";
import Mutate from "./components/SWRExample/Mutate";
import Pagination from "./components/SWRExample/Pagination";
// import TestMocking from "./components/TestMocking";
import Profile from "./components/SWRExample/Profile";

function App() {
    return (
        <div className="App">
            {/* <TestMocking /> */}
            {/* <Profile /> */}
            {/* <Chache /> */}
            {/* <Fetcher /> */}
            <Mutate />
            <Pagination />
        </div>
    );
}

export default App;
