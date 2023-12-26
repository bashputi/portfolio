
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div data-aos="fade-right" data-aos-duration="2000" className={`${styles.paddingX} absolute inset-0 top-[70px] md:top-[90px] lg:top-[110px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                
            <div>
                
                <h1 className={`${styles.heroHeadText} text-white`}>
                    Hi, Im <span className='text-[#915]'>Rime</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>I am Crafting fluid <br />experiences with MERN development.</p>
            </div>
        
            </div>
          
            <ComputersCanvas />
        
            
          
        </section>
    );
};

export default Hero;

