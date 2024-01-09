import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

export const useAuth = () => {
    // this is a hook and is a child from AuthContext
    const context = useContext(AuthContext);

    return context;
}