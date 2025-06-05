import { MdDashboard } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { FaFontAwesome } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaUserAstronaut } from "react-icons/fa";



const adminNav = [
    {
        id: "admindashboard",
        name: "Dashboard",
        path: "/admin-dashboard",
        icon: <MdDashboard className="inline-block mr-2" />
    },
    {
        id: "admintheme",
        name: "Theme",
        path: "/admin-theme",
        icon: <FaFontAwesome className="inline-block mr-2" />
    },
    {
        id: "adminproduct",
        name: "Product",
        path: "/admin-product",
        icon: <AiFillProduct className="inline-block mr-2" />
    },
    {
        id: "adminpayment",
        name: "Paymemt",
        path: "/admin-payment",
        icon: <MdPayments className="inline-block mr-2" />
    },
    {
        id: "admincontact",
        name: "Dashboard",
        path: "/admin-contact",
        icon: <MdContactPhone className="inline-block mr-2" />
    },
    {
        id: "admincompany",
        name: "Company",
        path: "/admin-company",
        icon: <FaBuilding className="inline-block mr-2" />
    },
    {
        id: "admincategory",
        name: "Category",
        path: "/admin-category",
        icon: <BiSolidCategoryAlt className="inline-block mr-2" />
    },
    {
        id: "adminauth",
        name: "Auth - User",
        path: "/admin-auth",
        icon: <FaUserAstronaut className="inline-block mr-2" />
    },

]

export default adminNav