import React, { useEffect, useState } from "react";
import "./CardComponent.css"
import { Link } from "react-router-dom";
import { deleteItem } from "../../services/ItemServices/createService";
import { useNavigate } from "react-router-dom";


const CardComponent = (props) => {
    const [isOwner, setIsOwner] = useState(false)
    const [isOnFavorite, setIsOnFavorite] = useState(false)
    const navigate = useNavigate()
    //const params = useParams()
    // console.log(props);
    useEffect(() => {
        if (localStorage.getItem('userData') != null) {
            const owner = JSON.parse(localStorage.getItem('userData')).objectId
            if (owner === props.allId.owner) {
                setIsOwner(true)
            }
        }
    }, [props.allId.owner])
    //console.log(props);

    function delteItem(e) {
        e.preventDefault()
        deleteItem(props.allId.itemId)
        navigate('/')
        // console.log(props.allId.itemId);
    }

    let size = props.styles.size || "small"
    let images = []
    if (props.styles.image) {
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

    const favoriteItem =(id) => {
        setIsOnFavorite(state => !state)
        console.log(id);
    }

    return (
        <div className={"CardComponent__container" + props.styles.size}>
            <article style={cardStyles} className={"CardComponent__article " + props.styles.size}>
                <section className={"CardComponent__top " + props.styles.size}>

                    {images.map((image) =>
                        <img style={imgCheck(key, imgCount, size)} className={"CardComponent__img " + props.styles.size} src={image} key={key++} alt="pic_name" />
                    )}
                    <div className="fontAwesom-container" onClick={() => favoriteItem(props.allId.itemId)}>
                        {isOnFavorite ? (<i class="fa-solid fa-star fa-spin" ></i>)
                            : (<i class="fa-regular fa-star fa-beat"></i>)}
                    </div>
                </section>
                <section className={"CardComponent__bottom " + props.styles.size}>
                    <h5 style={subtitleColor} className={"CardComponent__subtitle " + props.styles.size}>{props.styles.subtitle}</h5>
                    <h1 style={titleColor} className={"CardComponent__title " + props.styles.size}>{props.styles.title}</h1>
                    <p style={descriptionColor} className={"CardComponent__info " + props.styles.size}>{props.styles.description}</p>
                    <div>
                        {(props.styles.size === 'large' || props.styles.size === 'medium') ? <Link to={`/catalog`} className="cardComponentBtn" >BACK</Link> :
                            null
                        }
                    </div>
                </section>
                {isOwner &&
                    <div>
                        <Link to={`/catalog/edit/${props.allId.itemId}`} className="cardComponentBtn"  >EDIT</Link>
                        <Link to={`/catalog`} onClick={delteItem} className="cardComponentBtn" >DELETE</Link>
                    </div>
                }
                {!isOwner &&
                    <div>
                        {(props.styles.size === 'large' || props.styles.size === 'medium') ? null :
                            <Link to={`/catalog/${props.allId.itemId}`} className="cardComponentBtn" >DETAILS</Link>
                        }
                    </div>
                }
            </article>
        </div>

    )
}

export default CardComponent

function imgCheck(key, imgCount, size) {
    let imgRadius = {}
    size = size.toLowerCase()
    if (key === 1 && imgCount !== 1) {
        if (size === "small" || size === "medium") {
            imgRadius = {
                "border-top-left-radius": "5px",
                "border-top-right-radius": "0px"
            };
        } else if (size === 'large') {
            imgRadius = {
                "border-top-left-radius": "5px",
                "border-bottom-left-radius": "0px"
            };
        }
    } else if (key > 1 && imgCount !== key) {
        imgRadius = {
            "border-radius": "0px"
        };
    } else if (key > 1 && imgCount === key) {
        if (size === "small" || size === "medium") {
            imgRadius = {
                "border-top-left-radius": "0px",
                "border-top-right-radius": "5px"
            };
        } else if (size === 'large') {
            imgRadius = {
                "border-radius": "0px"
            };
        }

    }
    return imgRadius
}

