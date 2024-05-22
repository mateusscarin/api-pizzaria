import { Router } from "express";

import multer from "multer";
import uploadConfig from "./config/multer";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { AddItemController } from "./controllers/item/AddItemController";
import { RemoveItemController } from "./controllers/item/RemoveItemController";
import { CloseOrderController } from "./controllers/order/CloseOrderController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { DetailsOrderController } from "./controllers/order/DetailsOrderController";
import { ListClosedOrdersController } from "./controllers/order/ListClosedOrdersController";
import { ListOpenOrdersController } from "./controllers/order/ListOpenOrdersController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./services/user/middlewares/IsAuthenticated";

const router: Router = Router();
const upload = multer(uploadConfig.upload('./tmp'));

router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/userinfo', isAuthenticated, new DetailUserController().handle);

router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.get('/categories', isAuthenticated, new ListCategoryController().handle);

router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);
router.get('/products/category', isAuthenticated, new ListByCategoryController().handle);

router.post('/order', isAuthenticated, new CreateOrderController().handle);
router.delete('/order', isAuthenticated, new RemoveOrderController().handle);
router.patch('/order/draft', isAuthenticated, new SendOrderController().handle);
router.patch('/order/status', isAuthenticated, new CloseOrderController().handle);
router.get('/orders/open', isAuthenticated, new ListOpenOrdersController().handle);
router.get('/orders/closed', isAuthenticated, new ListClosedOrdersController().handle);
router.get('/order/details', isAuthenticated, new DetailsOrderController().handle);

router.post('/item', isAuthenticated, new AddItemController().handle);
router.delete('/item', isAuthenticated, new RemoveItemController().handle);
export { router };

