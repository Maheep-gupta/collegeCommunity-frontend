
const events = [
    { eventName: 'Football Match', location: "main ground", eventImageUrl: "" },
    { eventName: 'Farewell party', location: "", eventImageUrl: "" },
    { eventName: 'Chess Competition', location: "seminar hall", eventImageUrl: "" },
    { eventName: 'Diwali celebration', location: "", eventImageUrl: "" },
    { eventName: 'Coding Competition', location: "computer lab", eventImageUrl: "" },
];

const data = events.map(event => ({
    eventName: event.eventName,
    eventImageUrl: `https://ui-avatars.com/api/?name=${encodeURIComponent(event.eventName)}&bold=true&background=random&uppercase=true`,
    url: '/'+event.eventName 
}));

export default data;