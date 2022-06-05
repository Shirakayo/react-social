import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Dialog from "./components/Dialogs/Dialog/Dialog";
import Message from "./components/Dialogs/Messages/Message";
import Post from "./components/Profile/MyPosts/Post/Post";

let dialogsElements = [
  { id: 1, name: "Andrey" },
  { id: 2, name: "Sergey" },
  { id: 3, name: "Sasha" },
  { id: 4, name: "Valera" },
  { id: 5, name: "Viktor" },
  { id: 6, name: "Evgeniy" },
  { id: 7, name: "Katusha" },
];

let messagesElement = [
  { id: 1, message: "Hello" },
  { id: 2, message: "Hi" },
  { id: 3, message: "How are you?" },
];

let postData = [
  { id: 1, message: "It's work!", likesCount: 11 },
  { id: 2, message: "It's work again!", likesCount: 14 },
  { id: 3, message: "It's work again 111!", likesCount: 19 },
  { id: 4, message: "It's work again 2222!", likesCount: 13 },
];

let dialogs = dialogsElements.map((dialog) => (
  <Dialog name={dialog.name} id={dialog.id} />
));

let messages = messagesElement.map((message) => (
  <Message message={message.message} id={message.id} />
));

let postsElements = postData.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} id={p.id} />
));


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={postsElements } />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
