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
        
        // setImages( [ {
        //     id: 1, path: 'testtesttest', 
        //     description: 'testetst8923horakfhsdn.jkas.', 
        //     likes: 44 
        // }])
    }
    return (
        <div>
            <h2>Body</h2>
            <p>Props: { JSON.stringify( props ) }</p>
            < GalleryList imageArray={ images }/>
        </div>
    );
}

export default Body;