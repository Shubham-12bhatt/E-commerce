import { Route, Routes, Navigate } from "react-router-dom";
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
        <Route path="/" element={<Navigate to="/addproduct" />} />
      </Routes>
    </div>
  );
};

export default Admin;