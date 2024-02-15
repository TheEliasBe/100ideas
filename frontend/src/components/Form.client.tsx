"use client";
import React, { useState } from 'react';
import ResultText from './ResultText';

const InputForm = () => {
    const [skill, setSkill] = useState('');
    const [expertise, setExpertise] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Assuming you process the inputs to generate the 'idea'
        const idea = "a revolutionary platform"; // Placeholder for the idea generation logic
        setSubmitted(true); // Update the submitted state to true
        // Optionally, set the skill and expertise states based on input values
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="textbox1" className="block text-sm font-medium text-gray-700">List your skills (comma separated)</label>
                    <input
                        type="text"
                        id="textbox1"
                        name="textbox1"
                        onChange={(e) => setSkill(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Online Marketing, Machine Learning, etc."
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="textbox2" className="block text-sm font-medium text-gray-700">List your expert areas (comma separated)</label>
                    <input
                        type="text"
                        id="textbox2"
                        name="textbox2"
                        onChange={(e) => setExpertise(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Running, Travel, etc."
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
                >
                    Submit
                </button>
            </form>
            {submitted && <ResultText skill={skill} expertise={expertise} idea="GreenSense: AI-Driven Plant Health Monitoring"/>}
        </div>
    );
};

export default InputForm;
