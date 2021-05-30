import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/login-page";
import ProfilePage from "./pages/profile-page";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={LoginPage} path="/" exact />
        <Route component={ProfilePage} path="/profile" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
