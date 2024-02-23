import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function MyImage() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyw1vtynkuf5Je4cOPg0R2Y4WsqYq0wQDS-w&usqp=CAU" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyw1vtynkuf5Je4cOPg0R2Y4WsqYq0wQDS-w&usqp=CAU" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://www.hockeydb.com/ihdb/photos/cale-makar-2023-690.jpg" thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default MyImage;