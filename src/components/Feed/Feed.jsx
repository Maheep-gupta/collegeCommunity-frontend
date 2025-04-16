import React from 'react'
import StorySection from '../Story/StorySection'
import WhatOnYourMind from '../WhatOnYourMind'
import Posts from './FeedPost'
import posts  from '../../utils/Posts'
function Feed() {

      
    return (
        <>
            <main className='p-5 pt-0 max-w-3xl mx-auto space-y-4'>
                <StorySection />
                <WhatOnYourMind />
                {
                    posts.map((post) => (
                        <Posts
                            key={post.id}
                            post={post}
                        />
                    ))
                }
            </main>
        </>
    )
}

export default Feed