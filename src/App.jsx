import React from "react";
import "./App.css";
import Router from "./shared/Router";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Router />
        </QueryClientProvider>
    );
};

export default App;
