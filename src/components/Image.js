import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function MyImage() { //images comp for the 3rd page
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://www.hockeydb.com/ihdb/photos/nathan-mackinnon-2024-690.jpg" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://www.hockeydb.com/ihdb/photos/mikko-rantanen-2021-690.jpg"  thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://www.hockeydb.com/ihdb/photos/cale-makar-2023-690.jpg" thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default MyImage;