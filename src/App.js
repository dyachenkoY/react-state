import "./App.css";
import Message from "./components/Message";

const senderAnton = {
  sender: "Anton",
  textMessage: `"Hello everybody!"`,
};

function App() {
  const { sender, textMessage } = senderAnton;
  return (
    <div>
      <Message sender={sender} textMessage={textMessage} isRead />
    </div>
  );
}

export default App;
