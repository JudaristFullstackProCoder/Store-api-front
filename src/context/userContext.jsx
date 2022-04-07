import { createContext } from "react";

const userContext = createContext({
     user: null,
     setUser: () => {}
});

const defaultUserContext = {
     user: null,
     setUser: () => {}
}

export {userContext, defaultUserContext}
