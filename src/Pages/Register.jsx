import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Providers/AuthProvider";

const Register = () => {

    const { createUser, handleUpdate } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        if (password.length < 6) {
            toast.error('Password should be at least 6 characters or longer!');
            return;
        }
        else if (!(/[A-Z]/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password))) {
            toast.error('Your password should have at least one uppercase letter and a special character.');
            return;
        }


        createUser(email, password)
            .then(result => {
                handleUpdate()
                    .then(() => {
                        toast.success('User created Successfully!!');

                        navigate('/');
                    })
                console.log(result.user);

                const createdAt = result.user?.metadata?.creationTime;
                const user = { name, email, createdAt: createdAt };
                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="hero py-20 bg-base-200 my-12">
            <div className="">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-10 text-center">Register now!</h1>
                </div>
                <div className="card w-96 shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
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

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral text-white">Register</button>
                        </div>
                    </form>
                    <p className="mx-auto mb-4">Already have an account? Please <Link to={'/login'}><span className="font-extrabold">Login</span></Link></p>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Register;