import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';




function Body( props ){
    const [ images, setImages ] = useState( [] );

    useEffect ( ()=>{
        getGallery();
    }, [] );

    const getGallery = () =>{
        axios.get('/gallery').then( (response)=>{
            setImages(response.data);
        }).catch( ( err )=>{
            console.log(err);
            alert ('error getting items');
        })
    } // end get Gallery
    return (
        <div>
            {/* <p>Props: { JSON.stringify( props ) }</p> */}
            < GalleryList imageArray={ images } getGallery={getGallery}/>
        </div>
    );
}

export default Body;