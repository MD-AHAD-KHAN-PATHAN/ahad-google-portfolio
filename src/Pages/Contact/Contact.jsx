import { MdMarkEmailRead, MdCall, MdOutlineFacebook } from 'react-icons/md';
import { AiFillInstagram, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

const Contact = () => {
    return (
        <div className='mt-10 mx-4 md:mx-0'>
            <div className="grid md:grid-cols-2 grid-cols-1">
                <div className="">
                    <h1 className="text-4xl font-bold">Contact Information</h1>
                    <p className="font-bold text-sm my-6 flex items-center gap-2"><span className=''><MdMarkEmailRead></MdMarkEmailRead></span>md.ahadkhanpathan.tct@gmail.com</p>
                    <p className='flex gap-2 items-center'><span className=''><MdCall></MdCall></span>+880 1865 374757</p>
                    <div className='flex gap-4 text-3xl  mt-6'>

                        <a href="https://www.linkedin.com/in/md-ahad-khan-pathan"><AiFillLinkedin></AiFillLinkedin></a>
                        <a href="https://www.instagram.com/arulesbreaker"><AiFillInstagram></AiFillInstagram></a>
                        <a href="https://www.facebook.com/mdpk.ahad"><MdOutlineFacebook></MdOutlineFacebook></a>
                        <a href="https://twitter.com/ahad_khab"><AiFillTwitterCircle></AiFillTwitterCircle></a>

                    </div>
                </div>
                <div className='md:mt-0 mt-6'>

                    <form action="https://formsubmit.co/md.ahadkhanpathan.tct@gmail.com" method="POST">
                        <input className="w-full p-4 border-2 hover:shadow-xl  rounded-md" type="name" name="name" required placeholder="Enter Your Full Name" />
                        <br />
                        <input className="w-full p-4 border-2 hover:shadow-xl  rounded-md my-6" type="email" name="email" required placeholder="Enter Your Email" />
                        <br />
                        <textarea className="w-full p-4 border-2 hover:shadow-xl  rounded-md" name="text" id="" cols="20" rows="5" required placeholder="Your Message"></textarea>
                        <div className="flex justify-center mt-8">
                            <input className="border-2 py-2 px-4 rounded-md   font-bold hover:text-white hover:bg-slate-500 cursor-pointer" type="submit" value="Send Message" />
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default Contact;