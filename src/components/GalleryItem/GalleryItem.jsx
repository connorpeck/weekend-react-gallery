import { useState } from 'react';
import axios from 'axios';

function GalleryItem( props ){
    const [ show, setShow ] = useState( true );

    const toggleShow = () => {
        setShow (!show);
    } // end toggleShow

    const likeGalleryItem = () => {
        // console.log(props.galleryItem.id);
        axios.put(('./gallery/like/:id'), 
        {id: props.galleryItem.id}).then((response) => {
            console.log(response.data);
          });
      }
    return (
        <div>
        <div onClick={toggleShow} className="galleryItem">
            {
            show?
            <img  src={props.galleryItem.path}/>
            
            :
            <h2>{props.galleryItem.description}</h2>

            } 



            
            
        </div>
        <button id={props.galleryItem.id} onClick={likeGalleryItem}>like</button>
        <p>likes: {props.galleryItem.likes}</p>
        </div>
    );
}

export default GalleryItem;