import { useSelector } from "react-redux";
import Sidebar from "../Components/DashboardComponents/sidebar";
import styles from "../Styles/dashboard.module.css";
import DashboardHead from "../Components/DashboardComponents/dasboardHead";
import no_mgs_img from "../Images/no_messageimg.png"
import Inbox from "../Components/DashboardComponents/inbox";
import { useEffect, useState } from "react";
import axios from "axios";
import LeadDetails from "../Components/DashboardComponents/leadDetails";
import { MdCircle, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";


const Dashboard = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            let data = await axios.get(`https://hiring.reachinbox.xyz/api/v1/onebox/list`, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
                }
            });
            setData(data?.data?.data)
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className={styles.dashboard_container}>
            <Sidebar />
            <div>
                <DashboardHead />
                <div className={styles.dashboard_body}>
                    {true ?
                        <div>
                            <Inbox data={data} />
                            <div className={styles.dashboard_mid_con}>
                                <div>
                                    <div>
                                        <p>Orlando</p>
                                        <p>orladom@gmail.com</p>
                                    </div>
                                    <div>
                                        <div>
                                            <MdCircle />
                                            <p>Meeting Completed</p>
                                            <MdOutlineKeyboardArrowDown />
                                        </div>
                                        <div>Move <MdOutlineKeyboardArrowDown /></div>
                                        <div>
                                            <BsThreeDots />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <LeadDetails />
                        </div>
                        :
                        <div>
                            <img src={no_mgs_img} alt="error" />
                            <p>
                                It’s the beginning of a legendary sales pipeline
                            </p>
                            <p>
                                When you have inbound E-mails you’ll see them here
                            </p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Dashboard;