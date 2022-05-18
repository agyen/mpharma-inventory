import { Fragment } from "react";
import { Header } from "./components/Header";
import { store } from "./store/store";
import { Provider } from "react-redux";
import ProductList from "./components/ProductList";
import { ProductAdd } from "./components/ProductAdd";

function App() {
  return (
    <Fragment>
      <Header />
      <Provider store={store}>
        <div className="container"></div>
        <ProductList />
        <ProductAdd />
      </Provider>
    </Fragment>
  );
}

export default App;
