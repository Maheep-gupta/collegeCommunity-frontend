import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FaRegCommentDots, FaShare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Comment from './Comment'

function FeedPost({ post }) {
  const [showHeart, setShowHeart] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [replyInputVisible, setReplyInputVisible] = useState({})
  const [replies, setReplies] = useState({})

  const lastTap = useRef(0)

  const handleDoubleTap = () => {
    const now = Date.now()
    if (now - lastTap.current < 300) {
      setShowHeart(true)
      setTimeout(() => setShowHeart(false), 700)
    }
    lastTap.current = now
  }

  const handleReplyToggle = (commentId) => {
    setReplyInputVisible(prev => ({
      ...prev,
      [commentId]: !prev[commentId]
    }))
  }

  const handleReplyChange = (commentId, value) => {
    setReplies(prev => ({
      ...prev,
      [commentId]: value
    }))
  }

  const handleReplySubmit = (commentId) => {
    const newReply = replies[commentId]
    if (newReply?.trim()) {
      // Update the post's comments with the new reply
      const updatedComments = post.comments.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [...comment.replies, { username: post.username, text: newReply }]
          }
        }
        return comment
      })
      // Update the post with the new comments array
      post.comments = updatedComments
      setReplies(prev => ({ ...prev, [commentId]: '' }))
      setReplyInputVisible(prev => ({ ...prev, [commentId]: false }))
    }
  }

  return (
    <div className="mx-auto">
      <div key={post.id} className="bg-white border border-gray-200 rounded-xl shadow-sm mb-6 overflow-hidden">

        {/* Header */}
        <Link to={`/profile/${post.userId}`} className="flex items-center px-4 py-3">
          <img src={post.userAvatar} alt={post.username} className="h-10 w-10 rounded-full mr-3" />
          <div>
            <p className="font-semibold text-sm">{post.username}</p>
            <p className="text-xs text-gray-500">@{post.userId}</p>
          </div>
        </Link>

        {/* Image */}
        <div onClick={handleDoubleTap} className="relative w-full max-h-[450px] overflow-hidden">
          <img src={post.image} alt="Post" className="w-full object-cover max-h-[450px]" />
          <AnimatePresence>
            {showHeart && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.8 }}
                exit={{ opacity: 0, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <AiFillHeart className="text-red-600 text-7xl" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Post content */}
        <div className="p-4 space-y-2">
          <div className='flex justify-between'>
            <p className="text-sm">{post.content}</p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className='flex items-center gap-1'>
                <AiOutlineHeart className="text-lg" />
                {post.likes} likes </span> · <span>💬 {post.comments.length} comments</span>
              
            </div>
          </div>
          <p className="text-xs text-gray-400">{post.timestamp}</p>
        </div>

        {/* Like / Comment / Share */}
        <div className="flex justify-around border-t border-gray-200 px-4 py-2 text-gray-600 text-sm font-semibold">
          <button className="flex items-center gap-1 hover:text-red-600">
            <AiFillHeart className="text-lg" /> <span>Like</span>
          </button>
          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center gap-1 hover:text-blue-500"
          >
            <FaRegCommentDots className="text-base" /> <span>Comment</span>
          </button>
          <button className="flex items-center gap-1 hover:text-blue-500">
            <FaShare className="text-base" /> <span>Share</span>
          </button>
        </div>

        {/* Comments */}
        {showComments && (
          <div className="px-4 py-2 text-sm space-y-4">
            {post.comments.map(comment => (
              <Comment
                key={comment.id}
                comment={comment}
                handleReplyToggle={handleReplyToggle}
                handleReplyChange={handleReplyChange}
                handleReplySubmit={handleReplySubmit}
                replyInputVisible={replyInputVisible}
                replies={replies}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default FeedPost
