import Button from "react-bootstrap/Button";

const Footer = (props) => {
    return (
        <div>
        <Button href={props.url}> {props.footer} </Button> {}
        </div>
        );
}

export default Footer;