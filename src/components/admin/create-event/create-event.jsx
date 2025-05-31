import { useState } from "react";
import { FaImage, FaTicketAlt, FaGlobe, FaCheck, FaLock, FaRegSave } from 'react-icons/fa';// For formatting dates
import { IoIosArrowForward } from "react-icons/io";
import Basicinformation from "./BasicInformation";

export default function CreateEventPage() {
    const [activeStep, setActiveStep] = useState(0);
    const [date, setDate] = useState(null);
    const [eventType, setEventType] = useState("in-person");
    const [ticketType, setTicketType] = useState("free");
    const [eventTitle, setEventTitle] = useState("");
    const [eventCategory, setEventCategory] = useState("");
    const [eventTags, setEventTags] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [eventLocation, setEventLocation] = useState("");
    const [eventImage, setEventImage] = useState(null);
    const [ticketPrice, setTicketPrice] = useState("");
    const [maxAttendees, setMaxAttendees] = useState("");
    const [eventVisibility, setEventVisibility] = useState("public");
    const [eventOrganizer, setEventOrganizer] = useState("");

    const steps = [
        { id: 0, name: "Basic Info" },
        { id: 1, name: "Details" },
        { id: 2, name: "Tickets" },
        { id: 3, name: "Settings" },
    ];

    const handleNext = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep(activeStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
        }
    };

    return (
        <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] font-pop">
            {/* Header */}
            <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-black/70 border-b border-gray-100 dark:border-gray-800">
                <div className="container flex items-center justify-between h-16 px-4 md:px-6">
                    <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 text-xl">
                        EventHub
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="border p-2 hover:bg-gray-200 rounded-md duration-100 text-sm">Save Draft</button>
                        <button className="bg-gradient-to-r text-sm from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-md p-2">
                            Preview
                        </button>
                    </div>
                </div>
            </header>

            <main className="container px-4 md:px-6 py-8 md:py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Page Title */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold mb-2">Create New Event</h1>
                        <p className="text-muted-foreground">Fill in the details to create and publish your event</p>
                    </div>

                    {/* Progress Steps */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between">
                            {steps.map((step, index) => (
                                <div key={step.id} className="flex flex-col items-center">
                                    <div
                                        className={` h-10 w-10 flex items-center justify-center ${activeStep >= index
                                            ? "bg-gradient-to-r text-center from-violet-600 rounded-full to-indigo-600 text-white"
                                            : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500"}`
                                        }
                                    >
                                        {activeStep > index ? <FaCheck className="text-center h-5 w-5" /> : index + 1}
                                    </div>
                                    <span
                                        className={` "text-sm md:block",
                      ${activeStep >= index ? "text-foreground font-medium" : "text-muted-foreground"}`}
                                    >
                                        {step.name}
                                    </span>
                                    {index < steps.length - 1 && (
                                        <div className="hidden md:block w-24 h-[1px] bg-gray-200 dark:bg-gray-700 mx-2"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form Content */}
                    <div className="border-0 rounded-lg bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-md">
                        <div className="p-6">
                            {/* Step 1: Basic Info */}
                            {activeStep === 0 && (
                                <Basicinformation/>
                            )}
                            {/* Step 2: Event Details */}
                            {activeStep === 1 && (
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-xl font-bold mb-4">Event Details</h2>
                                        <p className="text-sm text-muted-foreground mb-6">
                                            Add more details about your event to attract attendees
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        {/* Event Description */}
                                        <div>
                                            <div htmlFor="event-description" className="text-base">
                                                Event Description <span className="text-red-500">*</span>
                                            </div>
                                            <textarea
                                                id="event-description"
                                                className="mt-1.5 p-2 border rounded w-full"
                                                rows="5"
                                                placeholder="Describe your event, its purpose, and what attendees can expect"
                                                value={eventDescription}
                                                onChange={(e) => setEventDescription(e.target.value)}
                                            />
                                        </div>

                                        {/* Event Image */}
                                        <div>
                                            <div className="text-base">Event Image</div>
                                            <div className="mt-1.5">
                                                <label htmlFor="event-image" className="cursor-pointer">
                                                    <div className="flex items-center space-x-2">
                                                        <FaImage className="h-5 w-5 text-violet-500" />
                                                        <span>Upload Image</span>
                                                    </div>
                                                    <input
                                                        type="file"
                                                        id="event-image"
                                                        accept="image/*"
                                                        onChange={(e) => setEventImage(e.target.files[0])}
                                                        className="hidden"
                                                    />
                                                </label>
                                            </div>
                                        </div>

                                        {/* Event Location */}
                                        {eventType === "in-person" && (
                                            <div>
                                                <div htmlFor="event-location" className="text-base">
                                                    Event Location <span className="text-red-500">*</span>
                                                </div>
                                                <input
                                                    type="text"
                                                    id="event-location"
                                                    className="mt-1.5 p-2 border rounded w-full"
                                                    placeholder="Where will the event be held?"
                                                    value={eventLocation}
                                                    onChange={(e) => setEventLocation(e.target.value)}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                            {/* Step 3: Tickets */}
                            {activeStep === 2 && (
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-xl font-bold mb-4">Tickets</h2>
                                        <p className="text-sm text-muted-foreground mb-6">
                                            Set up tickets for your event
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        {/* Ticket Type */}
                                        <div>
                                            <div className="text-base">Ticket Type</div>
                                            <div className="flex items-center space-x-4 mt-1.5">
                                                <div className="flex items-center space-x-2">
                                                    <input
                                                        type="radio"
                                                        value="free"
                                                        id="free"
                                                        checked={ticketType === "free"}
                                                        onChange={() => setTicketType("free")}
                                                    />
                                                    <label htmlFor="free" className="flex items-center gap-1.5">
                                                        <FaTicketAlt className="h-4 w-4 text-violet-500" />
                                                        Free
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <input
                                                        type="radio"
                                                        value="paid"
                                                        id="paid"
                                                        checked={ticketType === "paid"}
                                                        onChange={() => setTicketType("paid")}
                                                    />
                                                    <label htmlFor="paid" className="flex items-center gap-1.5">
                                                        <FaTicketAlt className="h-4 w-4 text-violet-500" />
                                                        Paid
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Paid Ticket Details (only if ticketType is paid) */}
                                        {ticketType === "paid" && (
                                            <div>
                                                <div htmlFor="ticket-price" className="text-base">
                                                    Ticket Price <span className="text-red-500">*</span>
                                                </div>
                                                <input
                                                    type="number"
                                                    id="ticket-price"
                                                    className="mt-1.5 p-2 border rounded w-full"
                                                    placeholder="Enter ticket price"
                                                    value={ticketPrice}
                                                    onChange={(e) => setTicketPrice(e.target.value)}
                                                />
                                            </div>
                                        )}

                                        {/* Free Ticket Details */}
                                        {ticketType === "free" && (
                                            <div>
                                                <div htmlFor="max-attendees" className="text-base">
                                                    Max Attendees <span className="text-red-500">*</span>
                                                </div>
                                                <input
                                                    type="number"
                                                    id="max-attendees"
                                                    className="mt-1.5 p-2 border rounded w-full"
                                                    placeholder="Enter maximum number of attendees"
                                                    value={maxAttendees}
                                                    onChange={(e) => setMaxAttendees(e.target.value)}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Step 4: Settings */}
                            {activeStep === 3 && (
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-xl font-bold mb-4">Event Settings</h2>
                                        <p className="text-sm text-muted-foreground mb-6">
                                            Set your event's privacy and other settings
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        {/* Event Visibility */}
                                        <div>
                                            <div className="text-base">Event Visibility</div>
                                            <div className="flex items-center space-x-4 mt-1.5">
                                                <div className="flex items-center space-x-2">
                                                    <input
                                                        type="radio"
                                                        value="public"
                                                        id="public"
                                                        checked={eventVisibility === "public"}
                                                        onChange={() => setEventVisibility("public")}
                                                    />
                                                    <label htmlFor="public" className="flex items-center gap-1.5">
                                                        <FaGlobe className="h-4 w-4 text-violet-500" />
                                                        Public
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <input
                                                        type="radio"
                                                        value="private"
                                                        id="private"
                                                        checked={eventVisibility === "private"}
                                                        onChange={() => setEventVisibility("private")}
                                                    />
                                                    <label htmlFor="private" className="flex items-center gap-1.5">
                                                        <FaLock className="h-4 w-4 text-violet-500" />
                                                        Private
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Event Organizer Info */}
                                        <div>
                                            <div htmlFor="event-organizer" className="text-base">
                                                Organizer Info <span className="text-red-500">*</span>
                                            </div>
                                            <input
                                                type="text"
                                                id="event-organizer"
                                                className="mt-1.5 p-2 border rounded w-full"
                                                placeholder="Enter organizer's name"
                                                value={eventOrganizer}
                                                onChange={(e) => setEventOrganizer(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}


                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-6">
                        <button
                            onClick={handleBack}
                            disabled={activeStep === 0}
                            className="p-2 border rounded-md hover:bg-gray-200 duration-100"
                        >
                            Back
                        </button>
                        <div className="flex items-center gap-4">
                            <button className="border p-2 hover:bg-gray-200 flex items-center gap-1 rounded-lg duration-100 text-sm">
                            <FaRegSave />
                                Save Draft
                            </button>
                            <button
                                onClick={handleNext}
                                className="bg-gradient-to-r flex items-center gap-1  p-2 text-sm rounded-lg from-violet-600 to-indigo-600 text-white"
                            >
                                {activeStep === steps.length - 1 ? "Submit" : "Next"}
                                <IoIosArrowForward className="" />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
