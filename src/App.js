import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Homepage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { AuthContext } from "./context/AuthContext";
import MyQuotes from "./components/quotes/MyQuote";
import NewQuotes from "./components/quotes/NewQuotes";
import AccountDetails from "./components/account-details/AccountDetails";

function App() {
  const { currentUser } = useContext(AuthContext);

  const AuthRoute = ({ children }) => {
    return currentUser ? children : <Navigate to="/signIn" />;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/quotes" />} />
          <Route
            path="/"
            element={
              <AuthRoute>
                <HomePage />
              </AuthRoute>
            }
          >
            <Route path="quotes" element={<MyQuotes />} />
            <Route path="quotes/new" element={<NewQuotes />} />
            <Route path="account" element={<AccountDetails />} />
          </Route>
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
