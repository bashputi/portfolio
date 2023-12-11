import { motion } from 'framer-motion';
import { styles } from '../../../src/styles';
import { EarthCanvas } from '../canvas';
import { slideIn } from '../../utils/motion';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';


const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {}
    const handleSubmit = (e) => {}

    return (
        <div className="relative bg-primary w-full h-screen mx-auto">
        <div className="sm:px-16 px-6 text-white absolute inset-0 top-[70px] md:top-[90px] lg:top-[110px] max-w-7xl mx-auto flex flex-row items-start gap-5">
            <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
                
            </div>


             </div>
     </div>
    );
};

export default Contact;