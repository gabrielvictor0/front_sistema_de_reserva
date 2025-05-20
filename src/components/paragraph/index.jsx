import CLink from "../link";
import { Paragraph, SemiboldParagraph } from "./style";

const CParagraphLink = (props) => {
    return(
        <Paragraph>{props.txt} <CLink txt={props.txtLink}/> </Paragraph>
    )
}

export default CParagraphLink;

export const CRegularParagraph = (props) => {
    return(
       <Paragraph>{props.txt}</Paragraph>
    )
}

export const CSemiboldParagraph = (props) => {
    return(
        <SemiboldParagraph>
            {props.txt}
        </SemiboldParagraph>
    )
}