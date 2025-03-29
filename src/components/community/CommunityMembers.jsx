import React from 'react'
import CommunityMemberCard from './CommunityMemberCard'
import avatar from '../../assets/avatarforFriends.avif'
function CommunityMembers() {
  return (
    <div className='flex flex-wrap gap-2 mt-5 justify-around'>
      <CommunityMemberCard MemberName="Midoriya Deku" avatar={avatar}/>
      <CommunityMemberCard MemberName="Midoriya Deku" avatar={avatar}/>
      <CommunityMemberCard MemberName="Midoriya Deku" avatar={avatar}/>
      <CommunityMemberCard MemberName="Midoriya Deku" avatar={avatar}/>
      <CommunityMemberCard MemberName="Midoriya Deku" avatar={avatar}/>
      <CommunityMemberCard MemberName="Midoriya Deku" avatar={avatar}/>
      <CommunityMemberCard MemberName="Midoriya Deku" avatar={avatar}/>
      <CommunityMemberCard MemberName="Midoriya Deku" avatar={avatar}/>
      <CommunityMemberCard MemberName="Midoriya Deku" avatar={avatar}/>
      <CommunityMemberCard MemberName="Midoriya Deku" avatar={avatar}/>
      <CommunityMemberCard MemberName="Midoriya Deku" avatar={avatar}/>
    </div>
  )
}

export default CommunityMembers