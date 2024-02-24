import Carousel from "react-bootstrap/Carousel";

function CupPictures() { //Carousel comp on the first page and setting pictures see they are all the same size
  const commonImageStyles = {
    width: "600px",
    height: "400px",
  };

  return (
    <Carousel>
      <Carousel.Item>
        <img
          src="https://i.pinimg.com/originals/27/e4/33/27e433ef6863d5c2d68cdc8b8905bf29.jpg"
          alt="pic 1"
          style={commonImageStyles}
        />
        <Carousel.Caption>
          <h3>1st Stanley Cup</h3>
          <p>1996 NHL Champions</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://media.gettyimages.com/id/81372875/photo/stanley-cup-finals-colorado-avalanches-rob-blake-adam-foote-ray-bourque-and-goalie-patrick-roy.jpg?s=612x612&w=gi&k=20&c=3-UATRsHvvzbNNmtJKDkaYUAwYIL90VJCGNwHloqX00="
          alt="pic 2"
          style={commonImageStyles}
        />
        <Carousel.Caption>
          <h3>2nd Stanley Cup</h3>
          <p>2001 NHL Champions</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://cdn.nhlpa.com/img/assets/nhlpa.com/gallery/D20C60EB-093B-4F54-8EDE-8C5D4DBFF4FB/avs-cup-feature.jpg"
          alt="pic 3"
          style={commonImageStyles}
        />
        <Carousel.Caption>
          <h3>3rd Stanley Cup</h3>
          <p>2022 NHL Champions</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CupPictures;
