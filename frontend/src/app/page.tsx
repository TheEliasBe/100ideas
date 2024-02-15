import type { NextPage } from 'next';
import Button from '../components/Button';
import InputForm from "@/components/Form.client";

const Home: NextPage = () => {
    return (
        <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">100 Ideas</h1>

                        <p className="mt-1.5 text-sm text-gray-500">Generate 100 ideas in 3 Minutes </p>
                    </div>

                    <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                        <Button label="Blog"/>
                        <Button label="About"/>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-8 w-full px-4">
                    <div className="max-w-4xl w-full bg-white p-6 rounded-md">
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-4xl font-bold text-center mb-8 mt-8">Generate Business Ideas by
                                combining a skill you possess with an area of your expertise.</h1>
                            <p className="text-center mb-8">
                                Unlock the potential of artificial intelligence to revolutionize your entrepreneurial
                                journey with our unique approach. By merging a skill you already excel in with an area
                                of your expertise, AI can help you generate 100 innovative business ideas tailored to
                                your unique strengths and knowledge base.
                            </p>
                        </div>
                        <InputForm/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
