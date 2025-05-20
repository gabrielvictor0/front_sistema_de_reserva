import { ButtonLoginRegister, GenericButton } from "./style";

const CButtonLoginRegister = (props) => {
    return (
        <ButtonLoginRegister
            LoginUser={props.LoginUser}
            RegisterUser={props.RegisterUser}
            onClick={props.onClick} 
            margin={props.margin}
        >
            {props.txt}
        </ButtonLoginRegister>
    )
}

export default CButtonLoginRegister;

export const CGenericButton = (props) => {
    return(
        <GenericButton>{props.txt}</GenericButton>
    )
}


