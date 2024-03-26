import { useSelector } from "react-redux";
import styles from "../../Styles/sidebar.module.css";
import img1 from "../../Images/sidebar_logo1.png";
import { RiBarChart2Fill, RiHome5Fill, RiUserSearchFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { BsFillInboxFill, BsFillSendFill } from "react-icons/bs";
import { MdViewList } from "react-icons/md";

const Sidebar = () => {
    const data = useSelector((res) => res.themeReducer);

    console.log(data)

    return(
        <div className={styles.sidebar_container}>
         <img src={img1} alt="err" />
         <div>
            <RiHome5Fill/>
            <RiUserSearchFill/>
            <IoMdMail/>
            <BsFillSendFill/>
            <MdViewList/>
            <BsFillInboxFill></BsFillInboxFill>
            <RiBarChart2Fill />
         </div>
         <div>
            NS
         </div>
        </div>
    )
}

export default Sidebar;