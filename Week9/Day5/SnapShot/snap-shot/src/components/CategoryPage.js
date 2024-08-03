import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ImageCard from './ImageCard';
import Pagination from './Pagination';

const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;
const PER_PAGE = 30;

function CategoryPage() {
    const {category} = useParams();
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(()=> {
        const fetchImages = async () => {
            try {
                const response = await axios.get('https://cors-anywhere.herokuapp.com/https://api.pexels.com/v1/search', {
                    headers: {  Authorization: `Bearer ${API_KEY}` },
                    params: {
                        query:category,
                        per_page: PER_PAGE,
                        page: page,
                    },
                });
                setImages(response.data.photos);
            } catch (error){
                console.error('Error fetching images:', error);
            }
            
        }; 
        
        fetchImages();
    }, [category, page]);

    return (
       <div>
        <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
        <div className="image-gallery">
           {images.map((image)=>(
           <ImageCard key={image.id} image={image} />

         ))}

        </div>
        <Pagination currentPage={page} onPageChange={setPage} />
       </div>
    );
}

export default CategoryPage;