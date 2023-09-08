import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddGroupForm from "./View/InventoryComponents/AddGroupForm";
import AddItemForm from "./View/InventoryComponents/AddItemForm";
import Home from "./Components/Home";
import SalesHeader from "./Components/SalesHeader";
import Sales from "./Components/Sales";
import InventoryHome from "./View/InventoryComponents/InventoryHome";
import InventoryAdjustmentsForm from "./View/InventoryComponents/InventoryAdjustmentsForm";
import AddCustomer from "./Components/AddCustomer";
import { PurchaseHeader } from "./View/PurchaseComponents/PurchaseHeader";
import { PurchaseHome } from "./View/PurchaseComponents/PurchaseHome";
import { SalesOrder } from "./View/SalesComponents/SalesOrder";
import { ViewAdjustments } from "./View/InventoryComponents/ViewAdjustments";
import CustomerUpdateModal from "./View/SalesComponents/CustomerUpdateModal";
import { SalesPackages } from "./View/SalesComponents/SalesPackages";
import { AddVendors } from "./View/PurchaseComponents/AddVendors";
import { AddPackage } from "./View/SalesComponents/AddPackage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/item" exact element={<AddItemForm />} />
        <Route path="/itemGroup" exact element={<AddGroupForm />} />
        <Route path="/InventoryHome" exact element={<InventoryHome />} />
        <Route path="/salesHeader" exact element={<SalesHeader />} />
        <Route path="/sales" exact element={<Sales />} />
        <Route path="/salesPackages" exact element={<SalesPackages />} />
        <Route path="/addVendors" exact element={<AddVendors />} />
        <Route path="/" exact element={<Home />} />
        <Route
          path="/newAdjustments"
          exact
          element={<InventoryAdjustmentsForm />}
        />
        <Route path="/addCustomer" exact element={<AddCustomer />} />
        <Route path="/purchaseHeader" exact element={<PurchaseHeader />} />
        <Route path="/purchaseHome" exact element={<PurchaseHome />} />
        <Route path="/salesOrder" exact element={<SalesOrder />} />
        <Route path="/salesOrder" exact element={<SalesOrder />} />
        <Route path="/customerUpdateModal" exact element={<CustomerUpdateModal/>} />
        <Route path="/addPackage" exact element={<AddPackage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
