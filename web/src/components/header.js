import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import '../css/header-style.css'

function Header() {
    const [tripList, getTripList] = useState("");
    const [query, setQuery] = useState("");

    useEffect(() => {
        getTripList();
    }, []);

    const search = () => {
        Axios.get(`http://localhost:3030/api/trips?keyword=${query}`).then((res) => {
            if(res.status === 200) {
                getTripList(res);
            }
        })
        .catch((error) => {
            console.log(error);
        });
        
    };


    return (
        <div>
            <h1>เที่ยวไหนดี</h1>
            <form onSubmit={search}>
                <input
                    className='searchbox'
                    type="text"
                    placeholder="หาที่เที่ยวแล้วไปกัน..."
                    onChange={(event) => { setQuery(event.target.value); }}
                ></input>
            </form>

            <div>
                {/* <div>{query}</div> */}
                <div>{tripList}</div>

                <div className='trip-list'>
                    <img className='big-img' src='https://img.wongnai.com/p/1600x0/2019/07/02/3c758646aa6c426ba3c6a81f57b20bd6.jpg' />
                    <h2 className='trip-title'><a href='https://www.wongnai.com/trips/travel-koh-chang'>ทริปดื่มด่ำชานมไข่มุก มหามิตรที่ไทเป</a></h2>
                    <p className='trip-description'>ใครไม่เป ไทเปนะฮ๊าฟฟฟ สนุกสุดเหวี่ยงกับชานมไข่มุก มุกเยอะมากๆ ก็เลยสนุก... แป่ว</p><br />
                    <p className='trip-description'>ลงเครื่องที่ สนามบินเถาหยวน เวลา .... <a href="https://www.wongnai.com/trips/travel-koh-chang">อ่านต่อ</a></p>
                    <p className='trip-tags'>หมวด <span className='trip-tags-list'>ทริปกิน ทริปต่างประเทศ และ ทริปเอเชีย</span></p>
                    <img className='small-img' src='https://img.wongnai.com/p/1600x0/2019/07/02/6a2733ab91164ac8943b77deb14fdbde.jpg' />
                    <img className='small-img' src='https://img.wongnai.com/p/1600x0/2019/07/02/941dbb607f0742bbadd63bbbd993e187.jpg' />
                    <img className='small-img' src='https://img.wongnai.com/p/1600x0/2019/07/02/bd1d256256c14c208d0843a345f75741.jpg' />
                </div>

                {/* {tripList.map((trips, eid) => {
                    return (
                        <h2>{trips.title}</h2>
                    )
                })} */}
            </div>

        </div>
    );
}

export default Header;