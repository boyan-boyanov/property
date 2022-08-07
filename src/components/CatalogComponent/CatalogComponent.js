import React, { useEffect, useState } from 'react';
import { getAll } from '../../services/ItemServices/getServices';
import CardComponent from '../CardComponent/CardComponent';
import './catalogComponent.css'
import { Rings } from 'react-loader-spinner'


export const CatalogComponent = () => {
    const [allData, setAllData] = useState([]);
    const [showData, setShowData] = useState([]);
    const [page, setPage] = useState({})
    const [loader, setLoader] = useState(true)

    const numberOfViewItems = 5

    useEffect(() => {
        async function waitData() {
            const data = await getAll()
            setAllData(data.results)
            const show = data.results.slice(0, numberOfViewItems)
            setShowData(show)
            const numberOfPages = Math.ceil(data.results.length / numberOfViewItems)
            setPage({ numberOfPages, currentPage: 1 })
            //console.log(Math.ceil(data.results.length / numberOfViewItems));
            setLoader(false)

        }
        waitData()
    }, []);


    function createProps(x) {
        let pic = ''
        for (let img of x.Images) {
            pic = pic + img + " "
            //console.log(pic);
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

    const nextPage = () => {

        if (page.currentPage < page.numberOfPages) {
            const nextList = page.currentPage + 1
            setPage(state => ({
                ...state, currentPage: nextList
            }))
           // console.log("nextList", nextList);
            const startPoint = (nextList - 1) * numberOfViewItems
           // console.log("startPoint", startPoint);
            const endPoint = startPoint + numberOfViewItems
           // console.log("endPoint", endPoint);
            const nextListOfViews = allData.slice(startPoint, endPoint)
            setShowData(nextListOfViews)
        }

    }

    const previewPage = () => {
        if (page.currentPage > 1) {
            const previewList = page.currentPage - 1
            setPage(state => ({
                ...state, currentPage: previewList
            }))
           // console.log("previewList", previewList);
            const startPoint = (previewList - 1) * numberOfViewItems
           // console.log("startPoint", startPoint);
            const endPoint = startPoint + numberOfViewItems
          //  console.log("endPoint", endPoint);
            const previewListOfViews = allData.slice(startPoint, endPoint)
            setShowData(previewListOfViews)
        }
    }

    return (
        <>
            {loader ? (
                <div className='loader'>
                    <Rings width='100' height='100' color='red' ariaLabel='loading' />
                    <Rings width='100' height='100' color='red' ariaLabel='loading' />
                    <Rings width='100' height='100' color='red' ariaLabel='loading' />
                </div>
            ) : (
                <div className={'catalog-container'}>
                    <h1>Catalog</h1>
                    <span className='paginator'>
                        <button className='paginator__btn' onClick={previewPage}>&#8810; previews</button>
                        <span className='paginator__text'>{page.currentPage} / {page.numberOfPages}</span>
                        <button className='paginator__btn' onClick={nextPage}>next &#8811;</button>

                    </span>
                    {allData.length > 0 ?
                        showData.map(x => <CardComponent key={x.objectId} styles={createProps(x)} favorites={x.favorites} allId={{ owner: x.Owner, itemId: x.objectId }} />)
                        : <p className='no-articles'>No Articles yet</p>}
                </div>
            )}

        </>

    )
}

