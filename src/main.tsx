import RecatDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from "./context/AuthContext";
import { QueryProvider } from "./lib/react-query/QueryProvider";

RecatDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <AuthProvider>
            <QueryProvider>
                <App />
            </QueryProvider>
        </AuthProvider>
    </BrowserRouter>
);