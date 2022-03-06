import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import Example from "./components/ReactQueryExample/Example";
import QuickStart from "./components/ReactQueryExample/QuickStart";
import Chache from "./components/SWRExample/Chache";
import Fetcher from "./components/SWRExample/Fetcher";
import Mutate from "./components/SWRExample/Mutate";
// import Pagination from "./components/SWRExample/Pagination";
// import TestMocking from "./components/TestMocking";
import Profile from "./components/SWRExample/Profile";
// import Pagination from "./components/ReactQueryExample/Pagination";
import InfiniteScroll from "./components/ReactQueryExample/InfiniteScroll";

const queryClient = new QueryClient();

function App() {
    return (
        <div className="App">
            {/* <TestMocking /> */}
            {/* <Profile /> */}
            {/* <Chache /> */}
            {/* <Fetcher /> */}
            {/* <Mutate /> */}
            {/* <Pagination /> */}
            <QueryClientProvider client={queryClient}>
                {/* <Example /> */}
                {/* <QuickStart /> */}
                {/* <Pagination /> */}
                <InfiniteScroll />
                <ReactQueryDevtools />
            </QueryClientProvider>
        </div>
    );
}

export default App;
