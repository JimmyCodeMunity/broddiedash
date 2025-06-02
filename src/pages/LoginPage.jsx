import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { toast } from 'react-toastify'
import Loader from '../components/Loader'

const LoginPage = () => {
    const { adminlogin } = useContext(AuthContext)
    const [email, setEmail] = useState("admin@gmail.com")
    const [password, setPassword] = useState("anypassword")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    // const handleLogin = async (e) => {
    //     e.preventDefault()
    //     if (!email || !password) {
    //         toast.error("all fields are required")
    //         return
    //     }
    //     else {
    //         try {
    //             const success = adminlogin(email, password); // Await admin login

    //             if (success) {
    //                 toast.success("Logged in successfully");
    //                 navigate('/'); // Navigate only after success
    //             } else {
    //                 toast.error("Login failed. Check credentials");
    //             }
    //         } catch (error) {
    //             console.error("Error during login:", error);
    //             toast.error("Login failed. Try again.");
    //         } finally {
    //             setLoading(false);
    //         }

    //     }

    // }

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error("All fields are required");
            return;
        }

        setLoading(true);
        const success = await adminlogin(email, password); // Await login response

        if (success) {
            toast.success("Logged in successfully");
            navigate('/'); // Navigate only after success
        } else {
            toast.error("Login failed. Check credentials");
        }

        setLoading(false);
    };

    return (
        <div className="w-full h-full">
            {
                !loading ? (
                    <>
                        <div className='w-full grid grid-cols-2 gap-4 h-screen'>
                            <div className="w-full h-full bg-neutral-200">
                                <img src="https://images.unsplash.com/photo-1565876427310-0695a4ff03b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFydCUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D" className='w-full h-full object-cover' alt="" />
                            </div>
                            <div className="w-full flex flex-row items-center justify-center bg-white p-6 rounded-md">
                                <form action="" method="post" className="justify-center w-full px-6 space-y-5" onSubmit={handleLogin}>
                                    <h1 className="text-center text-2xl font-semibold">Sign In</h1>
                                    <div className="w-full space-y-4">
                                        <label htmlFor="" className='text-neutral-500'>Email</label>
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="text" placeholder='Enter email' className="w-full p-5 border rounded-xl border-neutral-200" />
                                    </div>
                                    <div className="w-full space-y-4">
                                        <label htmlFor="" className='text-neutral-500'>Password</label>
                                        <input
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            type="text" placeholder='********' className="w-full p-5 border rounded-xl border-neutral-200" />
                                    </div>
                                    <div className="w-full space-y-4">
                                        <button type='submit' className="p-5 bg-black w-full rounded-xl text-white text-xl">
                                            {
                                                !loading ? "Sign In" : "Loading..."
                                            }
                                        </button>
                                    </div>

                                    <div className="w-full flex-row items-end justify-end">
                                        <Link to="/" className="text-orange-400">Forgot Password</Link>
                                    </div>
                                </form>
                            </div>

                        </div></>
                ) : (
                    <><Loader /></>
                )
            }
        </div>
    )
}

export default LoginPage
