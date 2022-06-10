import React from 'react';
import homeBg from '../../images/homeBg.jpg'
const Home = () => {
    return (
        <div className="hero min-h-screen" style={{ background: `url(${homeBg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div class=" flex flex-col md:flex-row-reverse max-w-screen-lg  text-neutral-content mx-3">
                <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl mx-auto" alt='' />
                <div className='m-auto text-center md:text-left'>
                    <h1 class="text-2xl font-medium mb-4">Myself Ifftekhar</h1>
                    <h1 class="text-4xl font-bold"><span className='text-cyan-400'>MERN</span> Stack Web Developer</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div class="btn-group">
                        <button class="btn hover:btn-primary mr-5">Resume</button>
                        <button class="btn btn-active">Hire Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;