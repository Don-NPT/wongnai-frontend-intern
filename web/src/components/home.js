import React, { useState } from 'react';
import Axios from 'axios';
import '../css/header-style.css'

function Header() {
    const [tripList, getTripList] = useState([]);
    const [query, setQuery] = useState("");

    const search = () => {
        Axios.get(`http://localhost:3030/api/trips?keyword=${query}`).then((res) => {
            if(res.status === 200) {
            getTripList(res.data);
            console.log(res.data);
            }
        })
            .catch((error) => {
                console.log(error);
            });
    };



    return (

        <div>
            <h1>เที่ยวไหนดี</h1>
            <form>
                <input
                    className='searchbox'
                    type="search"
                    placeholder="หาที่เที่ยวแล้วไปกัน..."
                    onChange={(event) => { setQuery(event.target.value); }}
                    onKeyPress={search}
                    value={query}
                ></input>
            </form>

            <div>
                
                {tripList.map((trip, index) => {
                    return (
                        <div className='trip-list'>
                            <img className='big-img' src={tripList[index].photos[0]} />
                            <h2 className='trip-title'><a href={tripList[index].url}>{tripList[index].title}</a></h2>
                            <p className='trip-description'>{tripList[index].description.substring(0, 180)} ... <a href={tripList[index].url}>อ่านต่อ</a></p>

                            <p className='trip-tags'>หมวด
                                <ul>
                                {
                                    tripList.map((tag, id) => {
                                        return (
                                            <li>
                                                <a className='trip-tags-list' onMouseDown={() => setQuery(tripList[index].tags[id])} onClick={search}>{tripList[index].tags[id]}</a>
                                            </li>
                                    )})
                                }
                                </ul>
                            </p>

                            <img className='small-img' src={tripList[index].photos[1]} />
                            <img className='small-img' src={tripList[index].photos[2]} />
                            <img className='small-img' src={tripList[index].photos[3]} />
                        </div>
                    )
                })}

            </div>

        </div>
    );
}

export default Header;