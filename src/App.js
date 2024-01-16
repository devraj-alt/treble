import "./App.css";

import { AllRoutes } from "./routes/AllRoutes";
import { CategoryProvider } from "./context/CategoryContext";
// import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <div className="App">
      <CategoryProvider>
        <AllRoutes />
        {/* <ProductProvider></ProductProvider> */}
      </CategoryProvider>
    </div>
  );
}

export default App;
