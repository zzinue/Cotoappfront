import { createContext } from "react";

export const UserContext = createContext({
    name: null,
    token: null
});