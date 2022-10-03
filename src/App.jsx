import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header/Header";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.scss";
import StickyFooter from "./components/Footer/Footer";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg" sx={{ minHeight: "100vh" }}>
        <Switch>
          <Route path={"/"} exact>
            <Home />
          </Route>
          <Route path={"/news"}>News</Route>
          <Route path={"/about"}>About</Route>
        </Switch>
      </Container>
      <StickyFooter />
    </>
  );
}
export default App;
