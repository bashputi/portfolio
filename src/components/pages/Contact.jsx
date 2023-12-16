
import { styles } from '../../../src/styles';
import { EarthCanvas, StarsCanvas } from '../canvas';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import Swal from 'sweetalert2';


const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value })

    }
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);

      emailjs.send(
        'service_eqd9bnn',
        'template_pne1a3n',
        {
          form_name: form.name,
          to_name: 'Rime',
          from_email: form.email,
          to_email: 'rimeislam672@gmail.com',
          message: form.text,
        },
        'dhlxN7srrlbHV14-N'
      )
      .then(() => {
        setLoading(false);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your massage has been send",
          showConfirmButton: false,
          timer: 1500
        }); 

        setForm({
          name: '',
          email: '',
          text: '',
        })
      }, (error) => {
        setLoading(false)
        console.log(error);
        alert('something went wrong')
      }
      )
    }


    return (

    <div className="relative z-0 min-h-[100vh] bg-primary pb-28 lg:pb-0 pt-28 lg:pt-32 w-full mx-auto">
        <div className="sm:px-16 px-6 text-white max-w-7xl mx-auto flex flex-row items-start gap-5">
            <div className="xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
              <div className='flex-[0.75] bg-black-100 w-[620px] p-5 rounded-2xl'>
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className="text-5xl font-bold">Contact</h3>

                <form ref={formRef} onSubmit={handleSubmit} className='mt-6  flex flex-col gap-8'>
                   <label className='flex flex-col'>
                    <span className='text-white font-medium mb-2'>Your Name</span>
                    <input
                     type="text"
                      name='name'
                       value={form.name} 
                       onChange={handleChange} 
                       placeholder="What's your name?"
                       className='bg-tertiary py-2 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                       />
                   </label>
                   <label className='flex flex-col'>
                    <span className='text-white font-medium mb-2'>Your Email</span>
                    <input
                     type="email"
                      name='email'
                       value={form.email} 
                       onChange={handleChange} 
                       placeholder="Write your email..."
                       className='bg-tertiary py-2 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                       />
                   </label>
                   <label className='flex flex-col'>
                    <span className='text-white font-medium mb-2'>Massage</span>
                    <textarea
                      rows="5"
                      name='text'
                       value={form.text} 
                       onChange={handleChange} 
                       placeholder="What's do you want to say?"
                       className='bg-tertiary py-2 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                       />
                   </label>

                   <button type='submit'
                   className='bg-tertiary py-3 px-4 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
                   >
                    {loading ? 'Sending...' : 'Send'}
                   </button>
                </form>
                
              </div>
              <div className='lg:flex-1 lg:h-auto md:h-[550px] h-[350px]'>
                <EarthCanvas />
                
              </div>

            </div>
        </div>
        <StarsCanvas />
     </div>
     
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default Contact;