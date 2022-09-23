import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
// import { useNavigate, useParams } from 'react-router-dom';
import '../styles/products.css';

function Products() {
    let navigate = useNavigate();
    // let { pid } = useParams();
  return (
    <div className='productsDiv'>
        <div className='buttons'>
            <button id='btnSearch' onClick={() => {navigate("search")}}>Search</button>
            <button id='btnList' onClick={() => {navigate("list")}}>List</button>
            <button id='btnAdd' onClick={() => {navigate("add")}}>Add</button>
        </div>
        <Outlet />
        {/* <button onClick={() => {navigate("/about")}}>Go to About Page</button>
        This is the Products Page:{pid} */}
    
    </div>
  )
}

export default Products