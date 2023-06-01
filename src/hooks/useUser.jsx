import { useContext } from "react";
import { UserContext } from "../context/UsersContext";

const useUser = () => {

    return useContext(UserContext)
}

export default useUser;
