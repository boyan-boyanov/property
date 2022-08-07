import CardComponent from '../CardComponent/CardComponent';
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { getOne } from '../../services/ItemServices/getServices';
import './detailsComponent.css'
import { editItem } from '../../services/ItemServices/createService';
import { v4 } from 'uuid'
import { AuthContext } from '../../contexts/UserContext';
import {  Rings } from 'react-loader-spinner'

export const DetailsComponent = () => {
    const params = useParams()
    const [itemData, setItemData] = useState({})
    const [comments, setComments] = useState({ username: '', comments: '', commentId: '', owner: '' })
    const [commentError, setCommentError] = useState(true)
    const [showError, setShowError] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 850)
    const [existItem, setExistItem] = useState(true)
    const [loader, setLoader] = useState(true)

    const { auth } = useContext(AuthContext)
    const navigate = useNavigate()


    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 850;
            if (ismobile !== isMobile) {
                setIsMobile(ismobile)
            }
        }, false)
    }, [isMobile])

    useEffect(() => {
        async function waitData() {
            const data = await getOne(params.objectId)
            //console.log(data);
            if (!data.Owner) {
                navigate('/404')
                setExistItem(false)
            } else {
                setLoader(false)
            }
            setItemData(data)
        }
        waitData()
    }, [params.objectId, existItem]);

    // useEffect(() => {
    //     if (!existItem) {
    //         navigate('/catalog')
    //     }
    //     console.log(existItem);
    // }, [existItem])



    function createProps(x) {
        let pic = ''
        //console.log(x);
        if (x.Images !== undefined) {
            for (let img of x.Images) {
                pic = pic + img + " "
            }
            pic = pic.trim()
        }
        return {
            size: isMobile ? "medium" : "large",
            cardWidth: "1000px",
            title: itemData.Description,
            subtitle: itemData.RentOrSale,
            description: `${itemData.Type} for ${itemData.RentOrSale},  price: ${itemData.Price} $`,
            image: pic,
        }
    }

    const addCommetHandler = (e) => {
        e.preventDefault()

        const newData = itemData.comments
        newData.push(comments)
        //console.log(newData);
        setItemData(state => ({
            ...state, ...{ comments: newData }
        }))
        editItem(itemData, params.objectId)
       // console.log(itemData);
        //console.log(itemData.Owner);
        setShowError(false)
        setComments(state => ({ ...state, comments: "" }))
    }

    const showCommentError = (e) => {
        if (comments.comments.length < 10) {
            setShowError(true)
        }
    }

    const onChange = (e) => {
        let userData = JSON.parse(localStorage.getItem('userData'))
        let username = userData.username
        let userId = userData.objectId
        const randomID = v4()
        setComments(state => ({
            ...state, ...{
                [e.target.name]: e.target.value,
                username,
                commentId: randomID,
                owner: userId
            }
        }))

        if (e.target.value.length >= 10) {
            setCommentError(false)
        } else {
            setCommentError(true)
        }
    }

    return (
        //<button onClick={showAll}>UTUTUTUTUT</button>
        <>
            {loader ? (
                <div className='loader'>
                    <Rings width='100' height='100' color='red' ariaLabel='loading' />
                    <Rings width='100' height='100' color='red' ariaLabel='loading' />
                    <Rings width='100' height='100' color='red' ariaLabel='loading' />
                </div>
            ) : (
                <>

                    <CardComponent styles={createProps(itemData, isMobile)} favorites={itemData.favorites} allId={{ owner: itemData.Owner, itemId: params.objectId }} />

                    <section className="comments">
                        <h3>Comments:</h3>
                        <article >
                            {itemData.comments?.map(x =>
                                <div className='comments__commetWrapper' key={x.commentId}>
                                    <h3 className='comments__commetWrapper__username'>{x.username}</h3>
                                    <p className='comments__commetWrapper__message'>{x.comments}</p>
                                </div>
                            )}
                            {!itemData.comments?.length > 0 &&
                                <div className='noCommets'>
                                    <p className='noComments__p'>No commets for this property</p>
                                    <p className='noComments__p'>Add first comment.</p>
                                </div>
                            }
                        </article >
                    </section >
                    {auth.username &&
                        <form id="comments" className='comments-form' onSubmit={addCommetHandler}>
                            <label htmlFor="comments">Post new comment:</label>
                            {showError &&
                                <p className='showCommentError'>Comment must be at least 10 characters</p>}
                            <textarea className='comments__textarea' name="comments" required onChange={onChange} onBlur={showCommentError}
                                cols="30" rows="10" value={comments.comments} placeholder="Comment must be at least 10 characters" />
                            <button type="submit" disabled={commentError}>Add comment</button>
                        </form>
                    }
                </>
            )}

        </>
    )
} 