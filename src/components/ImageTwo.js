import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function MyImageTwo() { //image comp as well for the 2nd page and setting the same sizes
  const commonImageStyle = {
    width: '650px',
    height: '550px',
    objectFit: 'cover', 
  };

  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNMxtIE1TGaP4_7OYtQYzCnWslrOCNb5dejg&usqp=CAU" thumbnail style={commonImageStyle} />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUnxnfO5LB9---It21iZqCA58BKTo18zyE1Q&usqp=CAU" thumbnail style={commonImageStyle} />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9jo9kahlEvzVMhutS6Ul71JYzrFmH3EqgOQ&usqp=CAU" thumbnail style={commonImageStyle} />
        </Col>
      </Row>
    </Container>
  );
}

export default MyImageTwo;
