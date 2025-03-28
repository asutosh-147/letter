import { Route, Routes } from "react-router";
import Letter from "./Letter";
import Landing from "./Landing";
import Gift from "./Gift";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/letter"
        element={
          <div className="flex justify-center bg-gray-600 items-center min-w-full h-screen">
            <Letter />
          </div>
        }
      />
      <Route path="/gift" element={<Gift/>}/>
    </Routes>
  );
};

export default App;
