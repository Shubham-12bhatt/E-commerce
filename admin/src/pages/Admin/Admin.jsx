import { Route, Routes } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Addproduct from "../../components/Addproduct";
import ListProduct from "../../components/ListProduct";

const Admin = () => {
  return (
    <div className="mt-25">
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<Addproduct/>} />
        <Route path="/listproduct" element={<ListProduct/>} />
        <Route/>
      </Routes>
    </div>
  );
};

export default Admin;