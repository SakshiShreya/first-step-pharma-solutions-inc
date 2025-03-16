import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/header";
import { Provider } from "./components/ui/provider";

interface Props {}

const App: React.FunctionComponent<Props> = () => (
  <Provider>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </Provider>
);

export default App;
