import React from "react";
import "./CardComponent.css"

const CardComponent = (props) => {
  
    console.log(props);
    let size = props.styles.size || "small"
    let images = []
    if(props.styles.image){
        images = props.styles.image.split(' ')
    }
    let key = 1;
    const imgCount = images.length
    const descriptionColor = { color: props.styles.descriptionColor }
    const titleColor = {
        color: props.styles.titleColor,
        textShadow: props.styles.titleShadow
    }
    const subtitleColor = {
        color: props.styles.subtitleColor,
        backgroundColor: props.styles.subtitleBackground
    }

    const cardStyles = {
        width: props.styles.cardWidth,
        height: props.styles.cardHeight,
        backgroundColor: props.styles.background
    }

    return (
        <div className={"CardComponent__container" + props.styles.size}>
            <article style={cardStyles} className={"CardComponent__article " + props.styles.size}>
                <section className={"CardComponent__top " + props.styles.size}>

                    {images.map((image) =>
                        <img style={imgCheck(key, imgCount, size)} className={"CardComponent__img " + props.styles.size} src={image} key={key++} alt="pic_name" />
                    )}

                </section>
                <section className={"CardComponent__bottom " + props.styles.size}>
                    <h5 style={subtitleColor} className={"CardComponent__subtitle " + props.styles.size}>{props.styles.subtitle}</h5>
                    <h1 style={titleColor} className={"CardComponent__title " + props.styles.size}>{props.styles.title}</h1>
                    <p style={descriptionColor} className={"CardComponent__info " + props.styles.size}>{props.styles.description}</p>
                </section>
            </article>
        </div>

    )
}

export default CardComponent

function imgCheck(key, imgCount, size) {
    let imgRadius = {}
    size = size.toLowerCase()
    if (key == 1 && imgCount != 1) {
        if (size == "small" || size == "medium") {
            imgRadius = {
                "border-top-left-radius": "5px",
                "border-top-right-radius": "0px"
            };
        } else if (size == 'large') {
            imgRadius = {
                "border-top-left-radius": "5px",
                "border-bottom-left-radius": "0px"
            };
        }
    } else if (key > 1 && imgCount != key) {
        imgRadius = {
            "border-radius": "0px"
        };
    } else if (key > 1 && imgCount == key) {
        if (size == "small" || size == "medium") {
            imgRadius = {
                "border-top-left-radius": "0px",
                "border-top-right-radius": "5px"
            };
        } else if (size == 'large') {
            imgRadius = {
                "border-radius": "0px"
            };
        }

    }
    return imgRadius
}
