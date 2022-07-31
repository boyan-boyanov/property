import React, { useEffect, useState } from "react"
import './userProfile.css'
import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";
import { getByOwner } from "../../services/ItemServices/getServices";
import CardComponent from '../CardComponent/CardComponent';


const UserProfile = () => {
    const [offer, setOffer] = useState([])
    const { auth } = useContext(AuthContext)
    
    useEffect(() => {

        (async () => {
            const myOffers = await getByOwner(auth.objectId)
            setOffer(myOffers)
            
        })()
    }, [auth.objectId])

    function createProps(x) {
        let pic = ''
        for (let img of x.Images) {
            pic = pic + img + " "           
        }
        pic = pic.trim()
        return {
            size: "small",
            title: x.Description,
            subtitle: x.RentOrSale,
            description: `${x.Type} for ${x.RentOrSale},  price: ${x.Price} $`,
            image: pic,
        }
    }


    return (
        <div>
            <div className="user-profile-container">
                <div className="user-profile-container__back">
                    <span className="user-profile-container__mask" />
                    <div className="user-profile-container__item">
                        <div className="user-profile-container__row">
                            <div className="user-profile-container__col">
                                <h1 className="user-profile-container__h1">Hello {auth.username}</h1>
                                <p className="user-profile-container__p">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
                                <a href="#!" className="user-profile-container__a">Add Photo</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="user-profile-card">
                    <div className="card-profile-card__imgContainer">
                        <div className="card-profile-card__divimg">
                            <img className="card-profile-card__img" src="https://cdn.pixabay.com/photo/2015/05/02/08/02/angel-749625_960_720.jpg"></img>
                        </div>
                    </div>
                    <div className="card-profile-card__info">
                        <p className="card-profile-card__p">Username: {auth.username}</p>
                        <p className="card-profile-card__p">Email: {auth.email}</p>
                        <p className="card-profile-card__p">Added properties: {offer.length}</p>
                        <p className="card-profile-card__p">Favorite properties:</p>
                    </div>
                </div>
            </div>

            <div className={'catalog-container'}>
                <h1>My Offers</h1>
                {offer.length > 0 ?
                    offer.map(x => <CardComponent key={x.objectId} styles={createProps(x)} allId={{ owner: x.Owner, itemId: x.objectId }} />)
                    : <p className='no-articles'>No Articles yet</p>}
            </div>



        </div>

    );



}

export default UserProfile

