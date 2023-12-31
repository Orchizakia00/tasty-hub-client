import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Providers/AuthProvider";
import Lottie from "lottie-react";
import animation from "../assets/animations/login-Animation - 1702382516663.json"

const Login = () => {

    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate('/');
                toast.success('Logged In Successfully!');
            })
            .catch(error => {
                setError(error.message);
                toast.error('Invalid Email or Password!!');
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const createdAt = result.user?.metadata?.creationTime;
                // const user = { name, email, createdAt: createdAt, photo };
                const { displayName, email, photoURL } = result.user; // Extract user data from Google sign-in response
                console.log(displayName, email, photoURL);

                // Send user data to the server
                fetch("https://tasty-hub-server.vercel.app/user", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: displayName,
                        email: email,
                        photo: photoURL,
                        createdAt: createdAt,
                    }),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        navigate("/");
                        toast.success("Logged In Successfully!");
                    })
                    .catch((error) => {
                        console.error(error);
                        toast.error("Failed to log in with Google!");
                    });
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="">
                <h1 className="text-5xl font-bold text-center mb-14">Login now!</h1>
                <div className="flex flex-col lg:flex-row gap-16">
                    <div>
                    <Lottie loop={true} animationData={animation}></Lottie>
                    </div>
                    <div className="card w-96 shadow-2xl bg-base-100 h-fit mt-6">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral">Login</button>
                            </div>
                        </form>
                        <p className="mb-6 text-center"> {error} </p>
                        <p className="mx-auto mb-4">Do not have an account? Please <Link to={'/register'}><span className="font-extrabold">Register</span></Link></p>
                        <p className="text-center">
                            <button onClick={handleGoogleSignIn} className="btn btn-ghost normal-case mb-6">
                                <FcGoogle />
                                Log in with Google</button></p>
                    </div>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Login;