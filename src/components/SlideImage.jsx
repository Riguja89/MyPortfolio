import Carousel from 'react-bootstrap/Carousel';

function SlideImage({imgs}) {
  return (
    <Carousel variant="dark">
        {imgs.map((imgn, i)=>(
                         <Carousel.Item key={i}>
                         <img
                           className="d-block w-100 rounded"
                           src={imgn.img}
                           alt="First slide"
                         />

                           
                        
                       </Carousel.Item>
        ))}
    </Carousel>
  );
}



export default SlideImage;