import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Search() {
    const [productList, setProductList] = useState([]);
    const [searchTerm, setSearchterm] = useState("");

    const search = () => {
        Axios.get('http://localhost:3030/search').then((response) => {
            if (response.data.message) {
                console.log(response.data.message);
                setProductList(response.data.message);
            } else {
                console.log(response.data);
                setProductList(response.data);
            }
        });
    };

    return (
        <div class="container" style={{ "margin-top": "112px" }} onMouseMove={search}>
            <form style={{width:"400px", margin:"0 auto", marginBottom:"3rem"}}>
                <h1 style={{ marginTop: "3rem" }}>Search</h1>
                <input type="search" className="form-control form-control-dark rounded-pill" placeholder="Search..." 
                onChange={(event) => {
                    setSearchterm(event.target.value);
                }}
                />
            </form>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                {productList.filter((val)=>{
                    if(searchTerm == ""){
                        return val;
                    }else if(val.Pname.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val;
                    }
                }).map((val, key) => {
                    return (
                        <div class="col">
                            <Link to="/result" style={{textDecoration:"none", color:"black"}}>
                            <div class="card">
                                <img src={val.image} class="card-img-top" />
                                <div class="card-body">
                                    <h5 class="card-title">{val.Pname}</h5>
                                    <p class="card-text">{val.price}</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
export default Search;