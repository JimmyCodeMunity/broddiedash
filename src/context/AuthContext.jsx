import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false)
    const [authtoken, setAuthtoken] = useState(null)
    const [userdata, setUserdata] = useState(null)

    // const adminlogin = async (email, password) => {
    //     setLoading(true)
    //     console.log("details", email, password)
    //     try {
    //         const response = await axios.post("http://localhost:5000/api/v1/admin/adminlogin", { email, password });
    //         const data = response.data;
    //         console.log("log data", data)
    //         setIsAdminAuthenticated(true);
    //         setLoading(false);
    //         localStorage.setItem("ad_auth_token", data.token)
    //         localStorage.setItem("ad_authenticated", true)
    //         setAuthtoken(data.token);
    //         getAdmindata(data?.token)
    //     } catch (error) {
    //         setLoading(false)
    //         // console.log("error",error)
    //         if (error.status == 400) {
    //             toast.error("Account does not exist")
    //             console.log(error.response.data.message);
    //         }

    //     }
    // }

    // Fetch user data using token


    const adminlogin = async (email, password) => {
        setLoading(true);
        try {
            const response = await axios.post("https://broddie.menthealventures.com/api/v1/admin/adminlogin", { email, password });
            const data = response.data;
            setIsAdminAuthenticated(true);
            setLoading(false);
            localStorage.setItem("ad_auth_token", data.token);
            localStorage.setItem("ad_authenticated", true);
            setAuthtoken(data.token);
            await getAdmindata(data?.token);
            return true; // Login successful
        } catch (error) {
            setLoading(false);
            if (error.response && error.response.status == 400) {
                toast.error("Account does not exist");
            } else if (error.response && error.response.status == 401) {
                toast.error("Invalid Password");

            }
            else {
                toast.error("Login failed. Please check credentials.");
            }
            return false; // Login failed
        }
    };




    const getAdmindata = async (token) => {
        try {
            if (token) {
                const response = await axios.post(`https://broddie.menthealventures.com/api/v1/admin/getadmindata`, { token });
                const userData = response.data;
                setUserdata(userData);
                // localStorage.setItem('userdata', JSON.stringify(userData)); // Store in browser
                // console.log('admin data from API:', userData);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };


    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const token = localStorage.getItem("ad_auth_token")
                const isLogged = JSON.parse(localStorage.getItem("ad_authenticated"))


                if (token) {
                    setAuthtoken(token)
                    await getAdmindata(token)
                }

                if (token && isLogged) {
                    setIsAdminAuthenticated(true)
                    await getAdmindata(token)
                }
            } catch (error) {
                console.log("error occuredd")
                setLoading(false)

            }
            setLoading(false);
        }
        checkLoginStatus()
    }, [])


    const logout = () => {
        setIsAdminAuthenticated(false);
        setAuthtoken(null);
        setUserdata(null);
        // setAuthUser(null);
        localStorage.removeItem('ad_auth_token');
        localStorage.removeItem('ad_authenticated');
    };
    return (
        <AuthContext.Provider value={{ adminlogin, isAdminAuthenticated, logout, userdata, setLoading, getAdmindata, loading }}>
            {children}
        </AuthContext.Provider>
    )
}