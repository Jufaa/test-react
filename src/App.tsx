import "./App.css";
import { NavBar } from "./components";
import { Home } from "./pages";
import store from "./redux/store";
import { LayoutContainer } from "./styled-components";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <LayoutContainer>
        <Home />
      </LayoutContainer>
    </Provider>
  );
}

export default App;
