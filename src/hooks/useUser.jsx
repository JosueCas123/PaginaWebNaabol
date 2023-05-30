import { useContext } from "react";
import { AuthContext } from "../context/AuthContex";
import { UserContext } from "../context/UsersContext";

const useUser = () => {

    return useContext(UserContext)
}

export default useUser;
