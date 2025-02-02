import { Component } from "react";
import {Link} from "react-router-dom"
import Message from "../message";
import './index.css'

class ChatPage extends Component{
  state = {input:"",messages:[]}
  
  componentDidMount (){
    this.firstCallBot()
}

  firstCallBot = async () =>{
    const url = "https://aichatbotbackend-71m9.onrender.com/chat"
    const options = 
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: "Introduce yourself as PyBot and tell the child you'll teach Python in a fun way. Wait for them to type 'Yes' before starting. First, teach a concept, then give exercises. Show expected output before asking them to enter code. Reward correct answers and guide them when needed. Keep the focus on learning Python. at first just give 1 line introduction and if the child responds you in the chat then move on step by step untill that stay with that one line response" }),
    }
    const response = await fetch(url,options);
    if (response.ok)
      {
      const data = await response.json()
      this.setState(prevState => (
        { 
          messages: [{sender:"ai", text:data.result}],
          input:""
        }
      )
    )
      }
  }
  onClickEnter = async () => {
    const {input} = this.state
    const url = "https://aichatbotbackend-71m9.onrender.com/chat"
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input }),
  }
    const response = await fetch(url,options);
    if (response.ok){
      const data = await response.json()
      this.setState(prevState => (
        { 
          messages: [...prevState.messages,{sender:"user",text:input},{sender:"ai", text:data.result}],
          input:""
        }
      )
      )
    }
  }
  onChangeInput = event => {
    this.setState({input: event.target.value})
  }
  render(){
    const {messages, input} = this.state
    return(
      <div className="chat-whole-page-container">
        <div className="chat-page-container">
          <div className="chat-bot-design">
            <img alt="chatbot" className="bot-picture" src="https://res.cloudinary.com/dt9nmt0n0/image/upload/v1738495395/pngtree-sticker-for-a-pink-robotic-alien-creature-clipart-vector-png-image_7026705_garnrx.png"/>
            <Link to="/">
              <button className="back-button">
                back
              </button>
            </Link>
          </div>
          <div className="chat-area"> 
            <div className="chat-display-area">
              {messages.map(each => <Message sender={each.sender} text = {each.text}/>)}
            </div>
            <div className="chat-input-area">
              <textarea value={input} onChange={this.onChangeInput} placeholder="Enter text to chat with PyBot" className="input-area">
              </textarea>
              <button onClick={this.onClickEnter} className="send-button"><i className="fa-solid fa-paper-plane send-icon"></i></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ChatPage