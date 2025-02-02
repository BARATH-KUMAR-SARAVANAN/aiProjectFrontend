import './index.css'
import ReactMarkdown from "react-markdown";
const Message = props => {
  const {sender,text} = props
  const classNameText = sender === "ai" ? "message-container":"message-user-container"
  return(
  <div className={classNameText}>
    <ReactMarkdown>{text}</ReactMarkdown>
  </div>
)
}
export default Message