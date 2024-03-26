import styles from "../../Styles/login.module.css";
import googleimg from "../../Images/googleimg.png"
import axios from "axios"

const SignUpCard = () => {

    const fetchdata = async () => {
        window.location.href = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com`;
    }

    return(
        <div className={styles.signup_card}>
            <div>
                <p>Create a new account</p>
                <div onClick={() => fetchdata()}>
                    <img src={googleimg} alt="googleimg" />
                    <p>Sign Up with Google</p>
                </div>
            </div>
            <button >Create an Account</button>
            <div><span>Already have an account?</span> <span>Sign In</span></div>
        </div>
    )
}

export default SignUpCard;