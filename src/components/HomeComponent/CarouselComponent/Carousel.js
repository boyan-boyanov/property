import { useState, useRef, useEffect } from "react";

import "./Carousel.css";

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

  const cards = [
    {
      image: "https://picsum.photos/400/300",
      title: "This is a title",
      description: "This is a description",
      clickEvent: cardsClick,
    },
    {
      image: "https://picsum.photos/500/600",
      title: "This is a second title",
      description: "This is a  second description",
      clickEvent: cardsClick,
    },
    {
      image: "https://picsum.photos/200/400",
      title: "This is a third title",
      description: "This is a third description",
      clickEvent: cardsClick,
    },
    {
      image: "https://picsum.photos/700/340",
      title: "This is a fourth title",
      description: "This is a fourth description",
      clickEvent: cardsClick,
    },
    {
      image: "https://picsum.photos/600/300",
      title: "This is a fifth title",
      description: "This is a fifth description",
      clickEvent: cardsClick,
    },
    {
      image: "https://picsum.photos/700/300",
      title: "This is a sixt title",
      description: "This is a sixt description",
      clickEvent: cardsClick,
    },
    {
      image: "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930__480.jpg",
      title: "This is a seventh title",
      description: "This is a seventh description",
      clickEvent: cardsClick,
    },{
      image: "https://picsum.photos/500/300",
      title: "This is a 8 title",
      description: "This is a 8 description",
      clickEvent: cardsClick,
    },{
      image: "https://picsum.photos/500/300",
      title: "This is a 9 title",
      description: "This is a 9 description",
      clickEvent: cardsClick,
    },{
      image: "https://picsum.photos/500/300",
      title: "This is a 10 title",
      description: "This is a 10 description",
      clickEvent: cardsClick,
    },{
      image: "https://picsum.photos/500/300",
      title: "This is a 11 title",
      description: "This is a 11 description",
      clickEvent: cardsClick,
    },
  ];

  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsArray, setCardsArray] = useState(cards)

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
      //    const cLength = 4  
      // const nextEl = cardsArray.slice(0,cLength)
           
      //  setCardsArray(old => [...old.slice(cLength), ...nextEl])
     
    //  console.log(cardsArray.length);
    
    } else {
      setCurrentIndex(0);
    }
  };

  // const slideLeft = () => {
  //   let slider = document.getElementById("carousel");
  //   slider.scrollLeft = slider.scrollLeft - 400;

  // };

  // const slideRight = () => {
  //   let slider = document.getElementById("carousel");
  //   slider.scrollLeft = slider.scrollLeft + 400;
  // };

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