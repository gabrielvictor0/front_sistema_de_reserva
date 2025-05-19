import { ContainerForm, ContainerLogin, ContainerSideForm, SideImage } from "./style";
import FoodImage from '../../assets/images/comida-login.jpg'
import CInputLoginRegister from "../../components/input";
import CButtonLoginRegister from "../../components/button";
import CParagraphLink from "../../components/paragraph";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    async function LoginUser() {
        try {
            const response = await (axios.post(`http://localhost:5235/Login`, {
                "email": email,
                "password": pwd
            }))
            alert(response.data.token)
            localStorage.setItem("token", response.data?.token)
            navigate("/home")
        } catch (error) {
            alert("Falha ao logar!")
        }
    }

    return (
        <ContainerLogin>
            <SideImage src={FoodImage} />

            <ContainerSideForm>
                <ContainerForm>
                    <CInputLoginRegister onChange={(txt) => {setEmail(txt.target.value)}} setEmail={setEmail} type="email" placeholder="E-mail:" />
                    <CInputLoginRegister onChange={(txt) => {setPwd(txt.target.value)}} setPwd={setPwd} margin="20px 0px 0px" type="password" placeholder="Senha:" />

                    <CButtonLoginRegister onClick={() => LoginUser()} LoginUser={LoginUser} margin="30px 0px 5px" txt="Entrar" />
                    <CParagraphLink txt="Ainda não possui uma conta?" txtLink="Registre-se" />
                </ContainerForm>
            </ContainerSideForm>
        </ContainerLogin>
    )
}

export default Login;   