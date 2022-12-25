import "./app.css";
// import { RequireAuth } from "react-auth-kit";
import Navbar from "./Components/Navbar/Navbar";
import Popular from "./Components/Popular/Popular";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Offers from "./Components/Offers/Offers";
import Footer from "./Components/Footer/Footer";
import LineUP from "./Components/Pages/LineUP/LineUP";
import News from "./Components/Pages/News/News";
import Information from "./Components/Pages/Information/Information";
import Faq from "./Components/Pages/Faq/Faq";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import News1 from "./Components/Pages/News1/News1";
import News2 from "./Components/Pages/News2/News2";
import News3 from "./Components/Pages/News3/News3";
import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/Register/Register";
import { AuthContextProvider } from "./Components/Context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={LineUP} path="/lineup" />
            <Route component={News} path="/news" />
            <Route component={Information} path="/information" />
            <Route component={Faq} path="/faq" />
          </Switch>
          <AuthContextProvider>
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
          </AuthContextProvider>
          <Route component={Popular} path="/" exact />
          <Route component={Blog} path="/" exact />
          <Route component={Offers} path="/" exact />
          <Route component={About} path="/" exact />
          <Route component={News1} path="/news1" />
          <Route component={News2} path="/news2" />
          <Route component={News3} path="/news3" />
          <Footer />
        </div>
      </Router>
    </BrowserRouter>
  );
}

export default App;
