import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({children}) => {
    const [workflow, setWorkflow] = useState();

    return (
        <Context.Provider value ={{
            workflow,
            setWorkflow
        }}>{children}</Context.Provider>
    )
}

export default AppContext