import styles from "../../Styles/dashboardhead.module.css";
import { MdCircle, MdLightMode, MdOutlineKeyboardArrowDown } from "react-icons/md";


const DashboardHead = () => {

    return (
        <div className={styles.das_head_container}>
            <p>Onebox</p>
            <div>
                <div>
                    <MdCircle />
                    <MdLightMode />
                </div>
                <div>
                    <p>Tim’s Workspace</p>
                    <MdOutlineKeyboardArrowDown />
                </div>
            </div>
        </div>
    )
}

export default DashboardHead;