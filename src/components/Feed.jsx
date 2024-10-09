import React from 'react'
import StorySection from './StorySection'
import WhatOnYourMind from './WhatOnYourMind'
import Posts from './Posts'
function Feed() {
    return (
        <>
            <main className=' p-5'>
                <StorySection />
                <WhatOnYourMind />
                <Posts />
            </main>
        </>
    )
}

export default Feed