import { createContext } from "react";

const userContext = createContext({
     user: null,
     setUser() {},
});

const defaultUserContextState = {
     user: null,
     setUser() {},
}

export {userContext, defaultUserContextState}
