import CLink from "../link";
import { Paragraph } from "./style";

const CParagraphLink = (props) => {
    return(
        <Paragraph>{props.txt} <CLink txt={props.txtLink}/> </Paragraph>
    )
}

export default CParagraphLink;