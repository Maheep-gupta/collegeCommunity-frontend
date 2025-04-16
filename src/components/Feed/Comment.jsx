import React, { useState } from 'react';

function Comment({
  comment,
  handleReplyToggle,
  handleReplyChange,
  handleReplySubmit,
  replyInputVisible,
  replies,
}) {
  const [replyVisible, setReplyVisible] = useState(false);
  const [nestedReplyVisible, setNestedReplyVisible] = useState({}); // Track visibility of nested reply input

  const handleNestedReplyToggle = (replyId) => {
    setNestedReplyVisible((prev) => ({
      ...prev,
      [replyId]: !prev[replyId],
    }));
  };

  return (
    <div className="border-t pt-2 space-y-2">
      <div className="bg-gray-200 w-[300px] rounded-lg p-2">
        <div className="flex items-start gap-2">
          <img
            src={comment.userAvatar}
            alt={comment.username}
            className="h-8 w-8 rounded-full"
          />
          <div className="flex-1">
            <p className="font-semibold text-sm">{comment.username}</p>
            <p className="text-sm">{comment.text}</p>
          </div>
        </div>

        {/* Reply Button */}
        <div className="">
          <div className='flex gap-x-3 items-center'>
            <button
              className="text-blue-500 text-xs mt-1"
              onClick={() => handleReplyToggle(comment.id)}
            >
              Reply
            </button>
            <button
              className="text-blue-500 text-xs mt-1"
              onClick={() => setReplyVisible(!replyVisible)}
            >
              {replyVisible ? 'Hide' : 'Show'} Replies
            </button>
          </div>
          {/* Reply Input */}
          {replyInputVisible[comment.id] && (
            <div className="mt-2 flex gap-x-2 items-center">
              <input
                type="text"
                placeholder="Write a reply..."
                className="border rounded px-2 py-1 text-sm w-full"
                value={replies[comment.id] || ''}
                onChange={(e) => handleReplyChange(comment.id, e.target.value)}
              />
              <button
                className="text-xs text-white bg-blue-500 px-2 py-1 mt-1 rounded"
                onClick={() => handleReplySubmit(comment.id)}
              >
                Reply
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Render Replies */}
      {replyVisible && comment.replies.length > 0 && (
        <div className="ml-10 mt-2 space-y-2">
          {comment.replies.map((reply, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <img
                src={reply.userAvatar}
                alt={reply.username}
                className="h-8 w-8 rounded-full"
              />
              <div className="flex-1">
                <p className="font-semibold text-sm">{reply.username}</p>
                <p className="text-sm">{reply.text}</p>

                {/* Reply Button for Each Reply */}
                <button
                  className="text-blue-500 text-xs mt-1"
                  onClick={() => handleNestedReplyToggle(reply.id)}
                >
                  Reply
                </button>

                {/* Nested Reply Input */}
                {nestedReplyVisible[reply.id] && (
                  <div className="mt-2 ml-10">
                    <input
                      type="text"
                      placeholder="Write a reply..."
                      className="border rounded px-2 py-1 text-sm w-full"
                      value={replies[reply.id] || ''}
                      onChange={(e) => handleReplyChange(reply.id, e.target.value)}
                    />
                    <button
                      className="text-xs text-white bg-blue-500 px-2 py-1 mt-1 rounded"
                      onClick={() => handleReplySubmit(reply.id)}
                    >
                      Reply
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Comment;
