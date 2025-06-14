import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { io } from "socket.io-client";
// import { SOCKET_URL } from "../config";
const SOCKET_URL = "https://saccoserver.haramad.co.ke"

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const { userdata, authUser } = useContext(AuthContext);
  const userId = userdata?._id;
  console.log("useridis",userId)

  useEffect(() => {
    if (userdata) {
      const socket = io(SOCKET_URL, {
        query: { userId,role:"admin" },
      });
      setSocket(socket);

      return () => socket.close();
    } else if (socket) {
      socket.close();
      setSocket(null);
    }
  }, [authUser, userId]); // Include userId and authUser as dependencies

  return (
    <SocketContext.Provider value={{ socket, setSocket }}>
      {children}
    </SocketContext.Provider>
  );
};