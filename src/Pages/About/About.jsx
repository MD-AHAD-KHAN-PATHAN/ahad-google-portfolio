import { FaBookOpen } from "react-icons/fa";


const About = () => {
    return (
        <div className="mt-10 lg:mx-0 mx-4">
            <div className="flex items-center gap-4">
                <p className="text-3xl p-2 bg-gray-300 rounded-full text-gray-500"><FaBookOpen /></p>
                <div>
                    <h1 className="text-2xl text-blue-700">Education</h1>
                    <p>Education shapes shadows into the substance of enlightened futures.</p>
                </div>

            </div>
            <div className="my-4 flex gap-10">
                <div>
                    <p>08/2017 <span> - </span> 09/2022</p>
                    <p>Feni, Bangladesh</p>
                </div>
                <div>
                    <h2 className="font-semibold">Feni Govt Computer Institute</h2>
                    <p>Enrolled in Telecommunication Technology</p>
                    <p>Completed Diploma in Engineering with CGPA <span className="font-semibold">3.49</span> on a scale of 4.00.</p>
                </div>
            </div>
            <div className="flex gap-10">
                <div>
                    <p>01/2016 <span> - </span> 06/2017</p>
                    <p>Sonagazi, Feni</p>
                </div>
                <div>
                    <h2 className="font-semibold">Sonagazi Govt Md. Saver Model Pilot High School
                    </h2>
                    <p>Completed Secondary School Certificate with a GPA of <span className="font-semibold">4.73</span> on a scale of 4.00.</p>
                </div>
            </div>
        </div>
    );
};

export default About;