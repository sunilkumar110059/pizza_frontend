
import { Routes, Route } from 'react-router-dom';
import { ROUTE_CLIENT, ROUTE_ADMIN } from './constant/routePath/RoutePath';


import {
  HomeIndex, AboutIndex, ContactUs, AddToCardIndex, ProductDetailsIndex, ProductsIndex,
  NotFound, OrderSuccessFul, RegistrationIndex, LoginIndex, ProtectRouteIndex
} from './component/PagesComponentPath';

import { AddPizza } from './admin/AdminComponentPath'

function App() {
  return (
    <Routes>
      <Route element={<ProtectRouteIndex/>}>
        <Route path={ROUTE_CLIENT.PRODUCTS_PATH} element={<ProductsIndex />} />
        <Route path={`${ROUTE_CLIENT.PRODUCT_DETAIL_PATH}/:id`} element={<ProductDetailsIndex />} />
        <Route path={ROUTE_CLIENT.ADD_TO_CART_PATH} element={<AddToCardIndex />} />
        <Route path={ROUTE_CLIENT.ORDER_SUCCESSFUL_PATH} element={<OrderSuccessFul />} />
        <Route path={ROUTE_ADMIN.ADD_PRODUCT_PATH} element={<AddPizza />} />
      </Route>

      <Route path={ROUTE_CLIENT.HOME_PATH} element={<HomeIndex />} />
      <Route path={ROUTE_CLIENT.ABOUT_PATH} element={<AboutIndex />} />
      <Route path={ROUTE_CLIENT.CONTACT_PATH} element={<ContactUs />} />
      <Route path={ROUTE_CLIENT.REGISTRATION_PATH} element={<RegistrationIndex />} />

      <Route path={ROUTE_CLIENT.LOGIN_PATH} element={<LoginIndex />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}


export default App;
