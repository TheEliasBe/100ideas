interface DynamicTextProps {
    skill: string;
    expertise: string;
    idea: string;
}

const ResultText: React.FC<DynamicTextProps> = ({skill, expertise, idea}) => {
    return (
        <div className="text-center p-4">
            <p className="text-lg">
                With your skill in <span className="font-bold">{skill} </span>
                and your expertise in <span className="font-bold">{expertise}</span>,
                a business idea is <br/>
                <span
                    className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 mt-4">
      {idea}
    </span>
                <br/>
                <p className="mt-4">GreenSense offers a revolutionary approach to plant care through an AI-driven
                    monitoring system. Utilizing advanced machine learning algorithms, it provides real-time analysis of
                    plant health, detecting early signs of disease, nutrient deficiencies, and water stress. The system
                    uses sensors to gather data on soil moisture, light levels, temperature, and humidity, alongside
                    image recognition technology to identify issues through leaf patterns. It offers personalized care
                    recommendations for each plant, optimizing watering schedules, fertilization, and disease
                    prevention. Designed for both indoor gardeners and commercial agriculture, GreenSense aims to
                    enhance plant longevity, boost yields, and simplify the complexities of plant care.</p>
            </p>
        </div>
    );
};

export default ResultText;