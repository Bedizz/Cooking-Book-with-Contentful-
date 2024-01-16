import React from 'react'; 
import '../App.css'; 

const NavBar = () => {
    return (
        <nav className='navbar'>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <div className='dropdown'>
                <a href="/recipes">Our Recipes</a>
                <div className='dropdown-content'>
                    <a href="/recipe1">Recipe 1</a>
                    <a href="/recipe2">Recipe 2</a>
                    <a href="/recipe3">Recipe 3</a>
                    <a href="/recipe4">Recipe 4</a>
                    <a href="/recipe5">Recipe 5</a>
                    <a href="/recipe6">Recipe 6</a>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;

