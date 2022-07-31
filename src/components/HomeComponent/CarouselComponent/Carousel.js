import { useState, useRef, useEffect } from "react";
import Parse from 'parse/dist/parse.min.js';

import "./Carousel.css";
import { cauroselData } from "../../../services/ItemServices/getServices";

const Carousel = () => {

  const cardsClick = () => {
    alert(`You clicked ME !`);
  };
  const onMouseOver = () => {
    console.log("You passed over");
  };
  const onMouseLeave = () => {
    console.log("You left the card");
  };
 
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsArray, setCardsArray] = useState([])


  useEffect(() => {
        
    (async () => {
     
        const query = new Parse.Query('Properties');      
        query.limit(10); // limit to at most 10 results      
        query.skip(0); // skip the first 10 results      
        try {
          const results = await query.find();
          const data = JSON.stringify(results)         
          console.log(JSON.parse(data));
          const result = JSON.parse(data)
          const sentData = []
          for (let item of result){
            const current ={
              description: item.RentOrSale,
              title: item.Description,
              image: item.Images[0],
              id: item.objectId
            }
            sentData.push(current)
          }
          setCardsArray(sentData)
        } catch (error) {
          console.log(`Error: ${JSON.stringify(error)}`);
        }
    })()
     },[])

  const carousel = useRef(null);
  let intervalTime = 3500;
  let rotateInterval;

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
         
    } else {
      setCurrentIndex(0);
    }
  }; 

  ///auto rotate
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    const autoSlide = () => {
      rotateInterval = setInterval(moveNext, intervalTime);
    };
    if (autoScroll) {
      autoSlide();
    }
    return () => clearInterval(rotateInterval);
  }, [currentIndex, autoScroll]);
  //
  ///Using keyboard arrows
  const keyPressHandler = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      e.stopPropagation();
      movePrev();
      return;
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      e.stopPropagation();
      moveNext();
      return;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyPressHandler);
    return () => {
      window.removeEventListener("keydown", keyPressHandler);
    };
  });

  ////
  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);
  /////

  return (
    <div className="Carousel-Main-Container">
      <div
        id="Main-Carousel-Container"
        onMouseEnter={() => setAutoScroll(false)}
        onMouseLeave={() => setAutoScroll(true)}
      >
        <p>
          {" "}
          <i className="carousel-icon left" onClick={movePrev}></i>
        </p>
        <div id="carousel" ref={carousel}>
          {cardsArray.map((card, i) => {
            return (
              <div
                className="carousel-card"
                onMouseOver={onMouseOver}
                onMouseLeave={onMouseLeave}
                key={i}
                onClick={() => card.clickEvent()}
              >
                <div
                  className="carousel-card-image"
                  style={{ backgroundImage: `url(${card.image})` }}
                ></div>
                <p className="carousel-card-title">{card.title}</p>
                <p className="carousel-card-description">{card.description}</p>
              </div>
            );
          })}
        </div>
        {/* /here I will include dots slider */}
        {/* <div>DOTS</div> */}
        <p>
          {" "}
          <i className="carousel-icon right" onClick={moveNext}></i>
        </p>
      </div>
    </div>
  );
};

export default Carousel;