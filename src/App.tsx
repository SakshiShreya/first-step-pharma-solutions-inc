import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/header";

interface Props {}

const App: React.FunctionComponent<Props> = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

export default App;
