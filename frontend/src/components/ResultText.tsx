interface DynamicTextProps {
    skill: string;
    expertise: string;
    idea: string;
    description: string;
}

const ResultText: React.FC<DynamicTextProps> = ({skill, expertise, idea, description}) => {
    return (
        <div className="text-center p-4">
            <p className="text-lg">
                With your skill in <span className="font-bold">{skill} </span>
                and your expertise in <span className="font-bold">{expertise}</span>,
                a business idea is <br/>
                <p
                    className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 mt-4">
                    {idea}
                </p>
                <p className="mt-4">{description}</p>
            </p>
        </div>
    );
};

export default ResultText;