import "./auth.scss";
import { useState } from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerOne, authFadeInUpVariants, modalVariants, authPageFadeInVariants } from "../../motionUtils";
import { LOGO_URL, SIGNIN_BGIMG_URL } from "../../requests.js";
import { useSelector } from "react-redux";
import { selectAuthErrors } from "../../redux/auth/auth.selectors";

const Auth = () => {
	const [isSignedUp, setIsSignedUp] = useState(true);
	const authError = useSelector(selectAuthErrors);

	return (
		<motion.div
			className="Auth"
			variants={authPageFadeInVariants}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			<div className="Auth__opacityLayer" />
			<div className="Auth__bgLayer" style={{ backgroundImage: `url(${SIGNIN_BGIMG_URL})` }} />
			<Link to="/" className="Auth__logo">
				<img className="Auth__logo--img" src={LOGO_URL} alt="Cosflix_logo" />
			</Link>
			<motion.div
				className="Auth__content"
				variants={modalVariants}
				initial="hidden"
				animate="visible"
				exit="hidden"
			>
				<motion.div variants={staggerOne} initial="initial" animate="animate" exit="exit">
					<motion.h2 variants={authFadeInUpVariants} className="Auth__content--title">
						{isSignedUp ? "Sign In" : "Sign Up"}
					</motion.h2>
					<motion.small variants={authFadeInUpVariants} className="Auth__content--disclaimer">
						{/*`This Is The Cosflix not Netflix ${isSignedUp ? "sign in" : "sign up"}. Please don't insert your Netflix credentials here!`*/}
						{/*`Pay attention: this is not the original Netflix ${isSignedUp ? "sign in" : "sign up"}. Don't insert your real credentials here!`*/}
					</motion.small>
					{isSignedUp ? <SignIn /> : <SignUp />}
					{authError && <motion.p variants={authFadeInUpVariants} className='Auth__content--errors'>{authError}</motion.p>}
					<motion.hr variants={authFadeInUpVariants} className="Auth__content--divider" />
					<motion.small variants={authFadeInUpVariants} className="Auth__content--toggleView">
						{isSignedUp
							? `New to Cosflix? `
							: "Do you already have an account? "}
						<span className="toggler" onClick={() => setIsSignedUp(!isSignedUp)}>
							{isSignedUp ? "Sign Up" : "Sign In"}
						</span>
					</motion.small>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Auth;
