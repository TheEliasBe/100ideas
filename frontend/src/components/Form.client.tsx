"use client";
import React, {useState, useRef} from 'react';
import ResultText from './ResultText';

const InputForm = () => {
    const skillsInputRef = useRef<HTMLInputElement>(null);
    const expertiseInputRef = useRef<HTMLInputElement>(null);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [idea, setIdea] = useState('');
    const [description, setDescription] = useState('');
    const [skill, setSkill] = useState('');
    const [expertise, setExpertise] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true); // Start loading animation
        const skills = skillsInputRef.current?.value;
        const expertise = expertiseInputRef.current?.value;

        console.log(skills);
        console.log(expertise);

        // Here, replace 'YOUR_API_ENDPOINT' with your actual FastAPI endpoint URL
        const response = await fetch(' https://yc27rm0tia.execute-api.eu-west-1.amazonaws.com/dev/generate-business-idea/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({skills, expertise}),
        });

        if (response.ok) {
            const result = await response.json();
            setIdea(result.business_idea_name);
            setDescription(result.business_idea_description);
            setSkill(result.skill)
            setExpertise(result.expertise)
            setSubmitted(true);
        } else {
            console.error('Server error:', response.statusText);
            // Handle server errors or invalid responses here
        }

        setLoading(false); // End loading animation
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>

                    <div className="mb-4">
                        <label htmlFor="textbox1" className="block text-sm font-medium text-gray-700">List your skills
                            (comma
                            separated)</label>
                        <input
                            type="text"
                            id="textbox1"
                            name="textbox1"
                            ref={skillsInputRef}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Online Marketing, Machine Learning, etc."
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="textbox2" className="block text-sm font-medium text-gray-700">List your expert
                            areas
                            (comma separated)</label>
                        <input
                            type="text"
                            id="textbox2"
                            name="textbox2"
                            ref={expertiseInputRef}
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
            {loading && <div
                className="flex justify-center mt-4">
                <span className="loading loading-spinner loading-xs"></span>
            </div>}
            {submitted && !loading &&
                <ResultText skill={skill} expertise={expertise} idea={idea} description={description}/>}
        </div>
    );
};

export default InputForm;
