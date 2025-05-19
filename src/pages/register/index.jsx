import { ContainerForm, ContainerRegister, ContainerSideForm, SideImage } from "./style"
import FoodImage from '../../assets/images/comida-register.jpg'
import CInputLoginRegister from "../../components/input";
import CButtonLoginRegister from "../../components/button";
import CParagraphLink from "../../components/paragraph";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [confirmationPwd, setConfirmationPwd] = useState("");

    async function RegisterUser() {
        try {
            if (pwd.trim() == confirmationPwd.trim()) {
                const response = await (axios.post('http://localhost:5235/RegisterUser',
                    {
                        "name": name,
                        "email": email,
                        "password": pwd,
                        "role": "Comum"
                    }))

                alert("Usuário registrado com sucesso!")
                navigate("/login")
            } else {
                alert("Senhas não correspondentes!")
            }
        } catch (error) {
            alert("Falha ao registrar usuário!")
        }

    }

    return (
        <ContainerRegister>
            <SideImage src={FoodImage} />

            <ContainerSideForm>
                <ContainerForm>
                    <CInputLoginRegister
                        onChange={(txt) => { setName(txt.target.value) }}
                        setName={setName}
                        type="text"
                        placeholder="Nome completo:"
                    />

                    <CInputLoginRegister
                        onChange={(txt) => { setEmail(txt.target.value) }}
                        setEmail={setEmail}
                        margin="20px 0px 0px"
                        type="email"
                        placeholder="E-mail:"
                    />

                    <CInputLoginRegister
                        onChange={(txt) => { setPwd(txt.target.value) }}
                        setPwd={setPwd}
                        margin="20px 0px 0px"
                        type="password"
                        placeholder="Senha:"
                    />

                    <CInputLoginRegister
                        onChange={(txt) => { setConfirmationPwd(txt.target.value) }}
                        setConfirmationPwd={setConfirmationPwd}
                        margin="20px 0px 0px"
                        type="password"
                        placeholder="Confirme a senha:"
                    />

                    <CButtonLoginRegister onClick={() => RegisterUser()} RegisterUser={RegisterUser} margin="30px 0px 5px" txt="Registrar" />
                    <CParagraphLink txt="Já possui uma conta?" txtLink="Faça login" />
                </ContainerForm>
            </ContainerSideForm>
        </ContainerRegister>
    )
}

export default Register;