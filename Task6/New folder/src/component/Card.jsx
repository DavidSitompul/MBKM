  // import { fontWeight } from "@mui/system";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

  const  BasicExample = (props) => {
    const { text, image, cashback, harga, kota } = props.objek;
    return (
      <Card style={{ width: "13rem", marginRight:20, boxShadow: "0px 0px 1px #000000" }}>
        <Card.Body>
        <Card.Img className="image" src={image} /  >
          <Card.Text>{text}</Card.Text>
          <Card.Title>{harga}</Card.Title>
          <div>{cashback === true && <Button style={{ backgroundColor: "#9BFFB9", border: "none", color: "#02C730", fontWeight: "bold" }}>CashBack</Button>}</div>
          <Card.Text>
            <div className="logo" style={{ color: "#646464" }}>
              <img src="../logo512.png" width="30" height="30" alt="" srcset="" /> {kota}
            </div>
          </Card.Text>
          <Card.Text>
            <div className="titik" style={{ fontSize: "30px", color: "grey", float: "right", marginTop: "-30px" }}>
              ...
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };

  export default BasicExample;
