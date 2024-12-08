import React from 'react';

const Home = () => {
  return (
    <div className='home-div'>

      <section id="page1" className='page1'>
        <div className='page1-content'>
          
          <h1 className='page1-content-h1'>Visualize, analyze & drive actions from</h1>
          
          <h2 className='page1-content-h2'>Data Intelligence</h2>

          <div className='page1-buttons'>
            <button><a href="/contact">Schedule Demo</a></button>
            <button><a href="/contact">Book Meeting</a></button>
          </div>

        </div>
        <div className='p1imgdiv'>
          <img src='/page1pic.png' alt='page1pic.png' className='page1-image'/>
        </div>
      </section>

      <section id="page2" className='page1'>
        <div>
          <img src='/21.png' alt='21.png'  className='page21-image'/>
        </div>
        <div>
          <img src='/22.png' alt='21.png'  className='page22-image'/>
        </div>
      </section>

      <section id="page3" className='page1'>
        <div>
          <img src='/3.png' alt='3.png' className='page3-image'/>
        </div>
      </section>

      <section id="page4" className='page1'>
        <div>
          <img src='/4.png' alt='3.png'  className='page4-image'/>
        </div>
      </section>

      <section id="page5" className='page1'>
        <div>
          <img src='/5.png' alt='3.png' className='page5-image'/>
        </div>
      </section>

    </div>
    
  );
};

export default Home;
