import logoimg from "../../Images/headerimg.png";
import styles from "../../Styles/login.module.css";

const Header = () => {

    return(
        <div className={styles.header_div}>
            <img src={logoimg} alt="err" />
        </div>
    )
}

export default Header;