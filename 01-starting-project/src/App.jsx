import { Header } from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx"; // Default import
import Examples from "./components/Examples.jsx"; // Default import

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
