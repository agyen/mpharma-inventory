import { Fragment } from "react";
import { Header } from "./components/Header";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Fragment>
      <Header />
      <Provider store={store}>
        <div className="container"></div>
        <ProductList />
      </Provider>
    </Fragment>
  );
}

export default App;
