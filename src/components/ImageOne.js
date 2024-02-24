import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function MyImageOne() { //images for the 2nd page and set the pictures all the some size as well
  const commonImageStyle = {
    width: '500px',
    height: '500px',
    objectFit: 'cover', 
  };

  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEGgd72kSDuU14i3uC-pFR4XgZZRjp9jy5VQ&usqp=CAU" thumbnail style={commonImageStyle} />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyr_DydkU-GK64HocW5ahH82g3k74tZ_3o3A&usqp=CAU" thumbnail style={commonImageStyle} />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkjTDXl7NsBSr0QoQcJ_A3ZA6DEzygDWRWQ&usqp=CAU" thumbnail style={commonImageStyle} />
        </Col>
      </Row>
    </Container>
  );
}

export default MyImageOne;
