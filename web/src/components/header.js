import React from 'react'
import '../css/header-style.css'

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>เที่ยวไหนดี</h1>
                <form action='/sd'>
                    <input 
                        className='searchbox' 
                        type="text" 
                        placeholder="หาที่เที่ยวแล้วไปกัน..."
                        onChange={this.handleChange}
                    ></input>
                </form>
            </div>
        );
    }
}

export default Header;