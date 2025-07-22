import { useState } from "react";
import Timer from "./components/countdownTimer/Timer";
import Counter from "./components/counter/Counter";
import CommentThread from "./components/nestedComment/NestedComments";
import TodoApp from "./components/todo/TodoApp";
import "./index.css";
import ToastComponent from "./components/toast/ToastComponent";

const tabs = [
  { name: "Todo", component: <TodoApp /> },
  { name: "Counter", component: <Counter /> },
  { name: "Timer", component: <Timer /> },
  { name: "Nested Comments", component: <CommentThread /> },
  { name: "Toast", component: <ToastComponent /> },
  { name: "OTP Input", component: <div>To be Created</div> },
  { name: "Autocomplete", component: <div>To be Created</div> },
  { name: "Carasoul", component: <div>To be Created</div> },
  { name: "Modal", component: <div>To be Created</div> },
  { name: "Tab", component: <div>To be Created</div> },
  { name: "Accordion", component: <div>To be Created</div> },
  { name: "Progess bar", component: <div>To be Created</div> },
  { name: "File explorer", component: <div>To be Created</div> },
];

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="app-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="tab-content">{tabs[activeTab].component}</div>
    </div>
  );
}
