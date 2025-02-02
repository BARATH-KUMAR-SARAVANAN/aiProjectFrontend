import { Component } from "react";
import {Link} from "react-router-dom"
import './index.css'

class Home extends Component{
  render(){
    return(
      <div className="home-page-container">
        <div className="home-card-container">
        <h1 className="home-heading">
          Welcome to Python class
        </h1>
        <img alt="chatbot" className="bot-picture-home" src="https://res.cloudinary.com/dt9nmt0n0/image/upload/v1738495395/pngtree-sticker-for-a-pink-robotic-alien-creature-clipart-vector-png-image_7026705_garnrx.png"/>
        <p className="para">This is PyBot your jolly teacher!!</p>
        <p className="para">Hope you are happy to learn python from me</p>
        <Link to="/chat-page">
          <button className="started-button">Get Started</button>
        </Link>
        </div>
      </div>
    )
  }
}


export default Home