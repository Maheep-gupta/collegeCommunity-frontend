import React, { useState } from 'react';

const QnASection = () => {
    const [comments, setComments] = useState([
        {
            name: 'John Doe',
            content: 'Can someone explain why static is used in main method?',
            time: '2 hours ago',
            replies: [],
        },
        {
            name: 'Alice Smith',
            content: 'Is this video enough for interview preparation?',
            time: '5 hours ago',
            replies: [],
        },
    ]);

    const [newComment, setNewComment] = useState('');
    const [replyingToIndex, setReplyingToIndex] = useState(null);
    const [replyText, setReplyText] = useState('');

    const handleAddComment = () => {
        if (!newComment.trim()) return;

        const newEntry = {
            name: 'You',
            content: newComment,
            time: 'Just now',
            replies: [],
        };

        setComments([newEntry, ...comments]);
        setNewComment('');
    };


    return (
        <div className="max-w-3xl mx-auto pt-6">
            {/* Add new comment */}
            <div className="flex gap-3 mb-6">
                <img
                    src="https://ui-avatars.com/api/?name=You&background=random"
                    alt="User"
                    className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                    <textarea
                        rows="2"
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
                        placeholder="Ask a question or leave a comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                    <div className="flex justify-end mt-2">
                        {/* Add comment */}
                        <button
                            className="bg-bgBlue text-white px-4 py-2 rounded transition"
                        >
                            Comment
                        </button>
                    </div>
                </div>
            </div>

            {/* Comments list */}
            <div className="space-y-6">
                {comments.map((comment, idx) => (
                    <div key={idx} className="flex gap-3">
                        <img
                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(comment.name)}&background=random`}
                            alt={comment.name}
                            className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-1">
                            <div className="text-sm font-semibold">{comment.name}</div>
                            <div className="text-sm text-gray-600 mb-1">{comment.time}</div>
                            <p className="text-gray-800">{comment.content}</p>

                            {/* Reply Button */}
                            <button
                                onClick={() =>
                                    setReplyingToIndex(replyingToIndex === idx ? null : idx)
                                }
                                className="text-sm text-blue-600 hover:underline mt-1"
                            >
                                Reply
                            </button>

                            {/* Reply Input Box */}
                            {replyingToIndex === idx && (
                                <div className="mt-2 ml-4">
                                    <textarea
                                        rows="2"
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                                        placeholder="Write your reply..."
                                        value={replyText}
                                        onChange={(e) => setReplyText(e.target.value)}
                                    />
                                    <div className="flex justify-end mt-2">
                                        <button
                                            onClick={() => handleAddReply(idx)}
                                            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                                        >
                                            Reply
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Replies Section */}
                            {comment.replies.length > 0 && (
                                <div className="mt-3 ml-6 space-y-3 border-l-2 border-gray-200 pl-4">
                                    {comment.replies.map((reply, rIdx) => (
                                        <div key={rIdx}>
                                            <div className="text-sm font-semibold">{reply.name}</div>
                                            <div className="text-sm text-gray-500">{reply.time}</div>
                                            <p className="text-gray-700">{reply.content}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QnASection;
