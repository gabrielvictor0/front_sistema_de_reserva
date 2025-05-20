import { CGenericButton } from "../button";
import { CRegularParagraph, CSemiboldParagraph } from "../paragraph";
import { ContainerHeader, ContainerUserDescription } from "./style";

const CHeader = () => {
    return (
        <ContainerHeader>
            
            <ContainerUserDescription>
                <CRegularParagraph txt="firstname secondname" />
                <CSemiboldParagraph txt="Comum" />
            </ContainerUserDescription>

            <CGenericButton txt="Marcar reserva" />
        </ContainerHeader>
    )
}

export default CHeader;