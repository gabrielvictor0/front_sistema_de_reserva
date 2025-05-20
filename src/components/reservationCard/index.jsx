import { CGenericButton } from "../button";
import { ContainerRervationCard } from "./style";

const CReservationCard = (props) => {
    return(
        <ContainerRervationCard>

            {
                props.status == "Ativa" ?
                (
                    <CGenericButton />
                )
                : 
                (
                    <></>
                )
            }
        </ContainerRervationCard>
    )
}
export default CReservationCard;