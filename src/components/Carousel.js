import Carousel from "react-bootstrap/Carousel";

function CupPictures() {
    //TODO:Adjust style for pictures later
  const imageStyles1 = {
    width: "300px", 
    height: "200px", 
  };
  const imageStyles2 = {
    width: "500px", 
    height: "500px", 
  };
  const imageStyles3 = {
    width: "400px", 
    height: "300px", 
  };
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src="https://i.pinimg.com/originals/27/e4/33/27e433ef6863d5c2d68cdc8b8905bf29.jpg"
          text="First Championship"
          alt="pic 1"
          styles={imageStyles1}
        />
        <Carousel.Caption>
          <h3> 1st Stanley Cup</h3>
          <p> 1996 NHL Champions</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmYM_r216yJF3QOgr1Umws7st_Fn7sCTHNlg&usqp=CAU"
          styles={imageStyles2}
          text="Second Championship"
          alt="pic 2"
        />
        <Carousel.Caption>
          <h3>2nd Stanley Cup</h3>
          <p> 2001 NHL Champions</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkqGzmRbzp8WdrZzBrPkbzglqD4iGSFcI_8Q&usqp=CAU"
          styles={imageStyles3}
          text="Third Championship"
          alt="pic 3"
        />
        <Carousel.Caption>
          <h3>3rd Championship</h3>
          <p>2021 NHL Champions</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CupPictures;
