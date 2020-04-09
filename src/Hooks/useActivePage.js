import { useContext, useEffect } from "react";
import { GlobalContext } from "../Context/GlobalContext";


const useActivePage = page => {    
    const { setActivePage } = useContext(GlobalContext);

    useEffect(() => {
        setActivePage(page)
    }, [page, setActivePage])
}

export default useActivePage;