// import { useState } from "react";

// const Comment = ({ comment, addReply }) => {
//   const [replyText, setReplyText] = useState("");
//   const [showReplyInput, setShowReplyInput] = useState(false);

//   const handleReply = () => {
//     if (replyText.trim()) {
//       addReply(comment.id, replyText);
//       setReplyText("");
//       setShowReplyInput(false);
//     }
//   };

//   return (
//     <div style={{ marginLeft: "20px", marginTop: "10px" }}>
//       <div>{comment.text}</div>
//       <button onClick={() => setShowReplyInput(!showReplyInput)} style={{marginTop:"5px",textDecoration:"underline",color:"blue",background:"none",border:"none"}}>Reply</button>

//       {showReplyInput && (
//         <div>
//           <input
//             value={replyText}
//             onChange={(e) => setReplyText(e.target.value)}
//             placeholder="Reply here..."
//           />
//           <button onClick={handleReply}>Submit</button>
//         </div>
//       )}

//       {comment.replies?.map((reply) => (
//         <Comment key={reply.id} comment={reply} addReply={addReply} />
//       ))}
//     </div>
//   );
// };

// const CommentThread = () => {
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState("");

//   const handleAddComment = () => {
//     if (newComment.trim()) {
//       setComments([
//         ...comments,
//         { id: Date.now(), text: newComment, replies: [] },
//       ]);
//       setNewComment("");
//     }
//   };

//   const addReply = (id, replyText, nodes = comments) => {
//     return nodes.map((comment) => {
//       if (comment.id === id) {
//         return {
//           ...comment,
//           replies: [
//             ...comment.replies,
//             { id: Date.now(), text: replyText, replies: [] },
//           ],
//         };
//       }
//       return {
//         ...comment,
//         replies: addReply(id, replyText, comment.replies),
//       };
//     });
//   };

//   const handleAddReply = (id, replyText) => {
//     const updated = addReply(id, replyText);
//     setComments(updated);
//   };

//   return (
//     <div>
//       <h2>Comment Thread</h2>
//       <div style={{display:"flex", gap:"10px", marginTop:"10px"}}>
//       <input
//         value={newComment}
//         onChange={(e) => setNewComment(e.target.value)}
//         placeholder="Write a comment"
//       />
//       <button onClick={handleAddComment} className="tab-button">Add Comment</button>
// </div>
//       {comments.map((comment) => (
//         <Comment key={comment.id} comment={comment} addReply={handleAddReply} />
//       ))}
//     </div>
//   );
// };

// export default CommentThread;



import { useState } from "react";

const Comment = ({ comment, addReply }) => {
  const [replyText, setReplyText] = useState("");
  const [showReplyInput, setShowReplyInput] = useState(false);

  const handleReply = () => {
    if (replyText.trim()) {
      addReply(comment.id, replyText);
      setReplyText("");
      setShowReplyInput(false);
    }
  };

  return (
    <div className="comment">
      <div className="comment-text">{comment.text}</div>
      <button
        className="reply-button"
        onClick={() => setShowReplyInput(!showReplyInput)}
      >
        Reply
      </button>

      {showReplyInput && (
        <div className="reply-input-group">
          <input
            className="reply-input"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Reply here..."
          />
          <button className="submit-button" onClick={handleReply}>
            Submit
          </button>
        </div>
      )}

      <div className="replies">
        {comment.replies?.map((reply) => (
          <Comment key={reply.id} comment={reply} addReply={addReply} />
        ))}
      </div>
    </div>
  );
};

const CommentThread = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        { id: Date.now(), text: newComment, replies: [] },
      ]);
      setNewComment("");
    }
  };

  const addReply = (id, replyText, nodes = comments) => {
    return nodes.map((comment) => {
      if (comment.id === id) {
        return {
          ...comment,
          replies: [
            ...comment.replies,
            { id: Date.now(), text: replyText, replies: [] },
          ],
        };
      }
      return {
        ...comment,
        replies: addReply(id, replyText, comment.replies),
      };
    });
  };

  const handleAddReply = (id, replyText) => {
    const updated = addReply(id, replyText);
    setComments(updated);
  };

  return (
    <div className="thread-container">
      <h2>Comment Thread</h2>
      <div className="input-section">
        <input
          className="comment-input"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment"
        />
        <button className="submit-button" onClick={handleAddComment}>
          Add Comment
        </button>
      </div>

      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} addReply={handleAddReply} />
      ))}
    </div>
  );
};

export default CommentThread;
