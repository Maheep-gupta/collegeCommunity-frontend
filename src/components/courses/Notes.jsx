import React, { useState } from 'react';
import { IoIosAdd } from 'react-icons/io';

const Notes = () => {
    const [pdfList, setPdfList] = useState([
        { name: 'Java Basics.pdf', url: '/path/to/java-basics.pdf' },
        { name: 'OOP Concepts.pdf', url: '/path/to/oop-concepts.pdf' },
    ]);


    return (
        <div className="max-w-3xl mx-auto  pt-6 bg-white font-mont ">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">📄 Uploaded Notes</h2>
                <button

                    className="bg-bgBlue flex items-center text-white px-4 py-2 rounded transition"
                >
                    <IoIosAdd size={25} /><span>Add PDF</span>
                </button>
            </div>

            {pdfList.length === 0 ? (
                <p className="text-gray-500">No PDFs uploaded yet.</p>
            ) : (
                <ul className="space-y-3">
                    {pdfList.map((pdf, index) => (
                        <a href={pdf.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            className="flex justify-between border border-gray-200 hover:bg-gray-200 items-center p-3 bg-gray-50 rounded-md hover:shadow transition"
                        >
                            <span className='flex gap-x-3'>
                                <span className="text-sm font-medium">{index + 1}.</span>
                                <span className="text-sm font-medium">{pdf.name}</span>
                            </span>
                            <span className="text-sm font-medium">Uploaded by xyz</span>
                            <span
                                className="text-bgBlue hover:underline text-sm"
                            >
                                View
                            </span>
                        </a>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Notes;
