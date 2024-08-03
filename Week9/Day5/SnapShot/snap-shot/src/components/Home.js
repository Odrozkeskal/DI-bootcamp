import React from "react";
import {Link} from 'react-router-dom';

const categories = ['Mountains', 'Beaches', 'Birds', 'Food'];

function Home() {
    return (
        <div>
            <h1>Snap Shot</h1>
            <nav>
                {categories.map((category)=> {
                    <link key = {category} to={`/category/${category.toLowerCase()}`}>
                        <button>{category}</button>
                    </link>
                })}
            </nav>
            <Link to="search">
            <button>Search</button>
            </Link>
        </div>


    );
}
export default Home;