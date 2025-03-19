// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FaTimes } from "react-icons/fa";

// const AdminMenu = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       <button
//         className={`${
//           isMenuOpen ? "top-2 right-2" : "top-5 right-7"
//         } bg-[#151515] p-2 fixed rounded-lg`}
//         onClick={toggleMenu}
//       >
//         {isMenuOpen ? (
//           <FaTimes color="white" />
//         ) : (
//           <>
//             <div className="w-6 h-0.5 bg-gray-200 my-1"></div>
//             <div className="w-6 h-0.5 bg-gray-200 my-1"></div>
//             <div className="w-6 h-0.5 bg-gray-200 my-1"></div>
//           </>
//         )}
//       </button>

//       {isMenuOpen && (
//         <section className="bg-[#151515] p-4 fixed right-7 top-5">
//           <ul className="list-none mt-2">
//             <li>
//               <NavLink
//                 className="list-item py-2 px-3 block mb-5 hover:bg-[#2E2D2D] rounded-sm"
//                 to="/admin/dashboard"
//                 style={({ isActive }) => ({
//                   color: isActive ? "greenyellow" : "white",
//                 })}
//               >
//                 Admin Dashboard
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 className="list-item py-2 px-3 block mb-5 hover:bg-[#2E2D2D] rounded-sm"
//                 to="/admin/categorylist"
//                 style={({ isActive }) => ({
//                   color: isActive ? "greenyellow" : "white",
//                 })}
//               >
//                 Create Category
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 className="list-item py-2 px-3 block mb-5 hover:bg-[#2E2D2D] rounded-sm"
//                 to="/admin/productlist"
//                 style={({ isActive }) => ({
//                   color: isActive ? "greenyellow" : "white",
//                 })}
//               >
//                 Create Product
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 className="list-item py-2 px-3 block mb-5 hover:bg-[#2E2D2D] rounded-sm"
//                 to="/admin/allproductslist"
//                 style={({ isActive }) => ({
//                   color: isActive ? "greenyellow" : "white",
//                 })}
//               >
//                 All Products
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 className="list-item py-2 px-3 block mb-5 hover:bg-[#2E2D2D] rounded-sm"
//                 to="/admin/userlist"
//                 style={({ isActive }) => ({
//                   color: isActive ? "greenyellow" : "white",
//                 })}
//               >
//                 Manage Users
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 className="list-item py-2 px-3 block mb-5 hover:bg-[#2E2D2D] rounded-sm"
//                 to="/admin/orderlist"
//                 style={({ isActive }) => ({
//                   color: isActive ? "greenyellow" : "white",
//                 })}
//               >
//                 Manage Orders
//               </NavLink>
//             </li>
//           </ul>
//         </section>
//       )}
//     </>
//   );
// };

// export default AdminMenu;

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const AdminMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".admin-menu")) {
        setIsMenuOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Menu Toggle Button */}
      <button
        className={`fixed top-5 right-7 bg-[#151515] p-2 rounded-lg z-50`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <FaTimes color="white" />
        ) : (
          <>
            <div className="w-6 h-0.5 bg-gray-200 my-1"></div>
            <div className="w-6 h-0.5 bg-gray-200 my-1"></div>
            <div className="w-6 h-0.5 bg-gray-200 my-1"></div>
          </>
        )}
      </button>

      {/* Sidebar Menu */}
      {isMenuOpen && (
        <section className="admin-menu bg-[#151515] p-4 fixed right-7 top-5 w-64 shadow-lg rounded-md z-40">
          <ul className="list-none mt-2">
            {[
              { to: "/admin/dashboard", label: "Admin Dashboard" },
              { to: "/admin/categorylist", label: "Create Category" },
              { to: "/admin/productlist", label: "Create Product" },
              { to: "/admin/allproductslist", label: "All Products" },
              { to: "/admin/userlist", label: "Manage Users" },
              { to: "/admin/orderlist", label: "Manage Orders" },
            ].map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  className="list-item py-2 px-3 block mb-3 hover:bg-[#2E2D2D] rounded-sm"
                  to={to}
                  style={({ isActive }) => ({
                    color: isActive ? "greenyellow" : "white",
                  })}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default AdminMenu;
