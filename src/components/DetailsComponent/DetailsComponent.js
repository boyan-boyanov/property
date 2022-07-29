import CardComponent from '../CardComponent/CardComponent';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOne } from '../../services/ItemServices/getServices';
import './detailsComponent.css'
import { editItem } from '../../services/ItemServices/createService';
import { v4 } from 'uuid'




export const DetailsComponent = () => {
    const params = useParams()
    const [itemData, setItemData] = useState({})
    const [comments, setComments] = useState({ username: '', comments: '', commentId: '', owner: '' })

    useEffect(() => {
        async function waitData() {
            const data = await getOne(params.objectId)
            console.log(data);
            setItemData(data)
        }
        waitData()

    }, [params.objectId]);




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
            size: "large",
            cardWidth: "1000px",
            cardHeight: "",
            background: "",
            title: itemData.Description,
            titleShadow: "",
            titleColor: "",
            subtitle: itemData.RentOrSale,
            description: `${itemData.Type} for ${itemData.RentOrSale},  price: ${itemData.Price} $`,
            descriptionColor: "",
            image: pic,
            subtitleColor: "",
            subtitleBackground: "",
            textRows: ""  //not work for now
        }
    }

    const addCommetHandler = (e) => {
        e.preventDefault()
        // const randomID = v4()
        // console.log(`random >>> ${randomID}`);
        // const id = makeid(8)
        // console.log(id);
        // setComments(state =>({...state, commentId: randomID}))
        console.log(comments);
        const newData = itemData.comments
        newData.push(comments)
        console.log(newData);
        setItemData(state => ({
            ...state, ...{ comments: newData }
        }))
        editItem(itemData, params.objectId)
        console.log(itemData);
        console.log(itemData.Owner);

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

    }

    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

    return (
        //<button onClick={showAll}>UTUTUTUTUT</button>
        <>
            <CardComponent styles={createProps(itemData)} allId={{ owner: itemData.Owner, itemId: params.objectId }} />
            <section className="comments">
                <h3>Comments:</h3>
                <article >
                    {itemData.comments?.map(x =>
                        <div key={x.commentId}>
                            <h3>{x.username}</h3>
                            <p>{x.comments}</p>
                            <div className='comments-article-div'>
                                <button className="addFavorite"
                                >Edit</button>
                                <button className="edit"
                                >Delete</button>
                            </div>
                        </div>
                    )}
                    {!itemData.comments.length > 0 &&
                        <div className='noCommets'>
                            <p className='noComments__p'>No commets for this property</p>
                            <p className='noComments__p'>Add first comment.</p>
                        </div>
                    }
                </article >
            </section >

            <form id="comments" className='comments-form' onSubmit={addCommetHandler}>
                <label htmlFor="comments">Post new comment:</label>
                <textarea name="comments" required onChange={onChange}
                    cols="30" rows="10" value={comments.comments} />
                <button type="submit" >Add comment</button>
            </form>
        </>
    )
} 