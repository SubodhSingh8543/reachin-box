import styles from "../../Styles/inbox.module.css";
import { MdCircle, MdLightMode, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";

const Inbox = ({ data }) => {
    let monthObj = {
        "01": "Jan",
        "02": "Feb",
        "03": "Mar",
        "04": "Apr",
        "05": "May",
        "06": "Jun",
        "07": "Jul",
        "08": "Aug",
        "09": "Sept",
        "10": "Oct",
        "11": "Nov",
        "12": "Dec",
    }

    console.log(data[1]?.body);

    return (
        <div className={styles.inbox_container}>
            <div className={styles.all_inboxdiv}>
                <div>
                    <div>
                        <span>All Inbox(s)</span>
                        <MdOutlineKeyboardArrowDown />
                    </div>
                    <div><span>25/25</span> Inboxes selected</div>
                </div>
                <div>
                    <IoMdRefresh />
                </div>
            </div>
            <div className={styles.search_div}>
                <input type="text" />
                <div>
                    <span><span>26</span>NewReplies</span>
                    <span>
                        Newest <MdOutlineKeyboardArrowDown />
                    </span>
                </div>
            </div>
            <div className={styles.emails_list}>
                {
                    data?.map((el, i) => (
                        <div key={i}>
                            <div>
                                <p>{data[i]?.fromEmail}</p>
                                <p>{monthObj[data[i]?.sentAt?.split("-")[1]]} {data[i]?.sentAt?.split("-")[2]?.split("T")[0]}</p>
                            </div>
                            <p>{data[i]?.body?.split("<p>")[2] ? data[i]?.body?.split("<p>")[2] : "Empty message"}</p>
                            <div>
                                <div>
                                    <MdCircle style={{ height: "11.5px", width: "11.5px" }} />
                                    <p>Interested</p>
                                </div>
                                <div>
                                    <BsFillSendFill style={{ height: "11.5px", width: "11.5px" }} />
                                    <p>Campaign Name</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Inbox;