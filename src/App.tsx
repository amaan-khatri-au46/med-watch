import React, { Suspense } from "react";
import "./App.css";

// Import the spinner from Material Tailwind
import { Spinner } from "@material-tailwind/react";

// Lazily load the Home component
const Home = React.lazy(() => import("@/pages/Home"));

const App: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          {/* @ts-ignore */}
          <Spinner color="#083D6A" className="h-8 w-8 lg:h-10 lg:w-10" />
        </div>
      }
    >
      <Home />
    </Suspense>
  );
};

export default App;
