import { InputLoginRegister } from "./style";

const CInputLoginRegister = (props) => {
    return (
        <InputLoginRegister
            setConfirmationPwd={props.setConfirmationPwd}
            setPwd={props.setPwd}
            setEmail={props.setEmail}
            setName={props.setName}
            onChange={props.onChange}
            margin={props.margin}
            type={props.type}
            placeholder={props.placeholder}
        />
    )
}

export default CInputLoginRegister;