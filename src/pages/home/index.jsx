import { useLayoutEffect, useState } from "react";
import CHeader from "../../components/header"
import { ContainerHome } from "./style";
import { jwtDecode } from "jwt-decode";

const Home = () => {
    const [userRole, setUserRole] = useState("")

    useLayoutEffect(() => {
        const token = localStorage.getItem("token");
        const decoded = jwtDecode(token)
        setUserRole(decoded.role)
    }, [])

    return (
        
        <ContainerHome>
            <CHeader>
            </CHeader>

            {
                userRole == "Comum" ?
                (
                    <></>
                ):
                (
                    <></>
                )
                 
            }
        </ContainerHome>
    )
}

export default Home;