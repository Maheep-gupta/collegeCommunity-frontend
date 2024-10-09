const communities = [
    { communityName: 'Ui/Ux Community' },
    { communityName: 'Web Developer' },
    { communityName: 'Dribble Community' },
    { communityName: 'Behance' },
];

const data = communities.map(community => ({
    communityName: community.communityName,
    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(community.communityName)}&bold=true&background=random&uppercase=false`,
    url:'/'
}));

export default data;
