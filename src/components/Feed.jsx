import React from 'react'
import StorySection from './StorySection'
import WhatOnYourMind from './WhatOnYourMind'
import Posts from './Posts'
function Feed() {
    return (
        <>
            <main className=' xl:p-5 lg:p-2'>
                <StorySection />
                <WhatOnYourMind />
                <Posts />
            </main>
        </>
    )
}

export default Feed