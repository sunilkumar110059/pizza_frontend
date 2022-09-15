import { Routes, Route } from 'react-router-dom';
import {
  // client page
  HOME_PATH, PRODUCTS_PATH, PRODUCT_DETAIL_PATH, ADD_TO_CART_PATH,
  // admin page
  ADMIN_ADD_PRODUCT_PATH
} from './constant/routePath/RoutePath';


import { HomeIndex, AddToCardIndex, ProductDetailsIndex, ProductsIndex } from './component/pages/PagesComponentPath';
import { AddPizza } from './admin/AdminComponentPath'


function App() {
  return (
    <Routes>
      <Route path={HOME_PATH} element={<HomeIndex />} />
      <Route path={PRODUCTS_PATH} element={<ProductsIndex />} />
      <Route path={`${PRODUCT_DETAIL_PATH}/:id`} element={<ProductDetailsIndex />} />
      <Route path={ADD_TO_CART_PATH} element={<AddToCardIndex />} />
      <Route path={ADMIN_ADD_PRODUCT_PATH} element={<AddPizza />} />

    </Routes>
  );
}


export default App;
