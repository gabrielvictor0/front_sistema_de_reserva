import { CGenericButton } from "../button";
import { CRegularParagraph, CSemiboldParagraph } from "../paragraph";
import { ContainerHeader, ContainerUser, ContainerUserDescription, UserImage } from "./style";
import ImgHeader from '../../assets/icons/User.png'
import { use, useEffect, useLayoutEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const CHeader = () => {
    const [userName, setUserName] = useState("")
    const [userRole, setUserRole] = useState("")

    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        const decoded = jwtDecode(token)
        setUserName(decoded.username)
        setUserRole(decoded.role)
        console.log( decoded)
    }, [])

    return (
        <ContainerHeader>

            <ContainerUser >
                <UserImage src={ImgHeader} />
                <ContainerUserDescription>
                    <CRegularParagraph txt={userName} />
                    <CSemiboldParagraph txt={userRole} />
                </ContainerUserDescription>
            </ContainerUser>

            <CGenericButton txt="Marcar reserva" />
        </ContainerHeader>
    )
}

export default CHeader;