import './Portfolio.css'
import React from 'react'
import IMG1 from '../../assets/startup-593341_1920.jpg'

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h5> Some of My Work </h5>
      <h2> Portifolio </h2>

      <div className='container portfolioContainer'>
        <article className='portifolioItem' >
          <div className='portfolioItemImg'>
            <img src={IMG1} alt="portifolioImage one" /> 
            </div> 
            <h3>One</h3>
            <div className='portfolioItemCTA'>
            <a href='https://github.com' className="btn" target='_blank' rel='noreferrer' >GitHub</a>
            <a href='https://github.com' className="btn btn-primary" target='_blank' rel='noreferrer' >Live Demo</a>
            </div>  
        </article>

        <article className='portifolioItem' >
          <div className='portfolioItemImg'>
            <img src={IMG1} alt="portifolioImage one" /> 
            </div> 
            <h3>One</h3>
            <div className='portfolioItemCTA'>
            <a href='https://github.com' className="btn" target='_blank' rel='noreferrer' >GitHub</a>
            <a href='https://github.com' className="btn btn-primary" target='_blank' rel='noreferrer' >Live Demo</a>
            </div>  
        </article>

        <article className='portifolioItem' >
          <div className='portfolioItemImg'>
            <img src={IMG1} alt="portifolioImage one" /> 
            </div> 
            <h3>One</h3>
            <div className='portfolioItemCTA'>
            <a href='https://github.com' className="btn" target='_blank' rel='noreferrer' >GitHub</a>
            <a href='https://github.com' className="btn btn-primary" target='_blank' rel='noreferrer' >Live Demo</a>
            </div>  
        </article>

        <article className='portifolioItem' >
          <div className='portfolioItemImg'>
            <img src={IMG1} alt="portifolioImage one" /> 
            </div> 
            <h3>One</h3>
            <div className='portfolioItemCTA'>
            <a href='https://github.com' className="btn" target='_blank' rel='noreferrer' >GitHub</a>
            <a href='https://github.com' className="btn btn-primary" target='_blank' rel='noreferrer' >Live Demo</a>
            </div>  
        </article>

        <article className='portifolioItem' >
          <div className='portfolioItemImg'>
            <img src={IMG1} alt="portifolioImage one" /> 
            </div> 
            <h3>One</h3>
            <div className='portfolioItemCTA'>
            <a href='https://github.com' className="btn" target='_blank' rel='noreferrer' >GitHub</a>
            <a href='https://github.com' className="btn btn-primary" target='_blank' rel='noreferrer' >Live Demo</a>
            </div>  
        </article>

        <article className='portifolioItem' >
          <div className='portfolioItemImg'>
            <img src={IMG1} alt="portifolioImage one" /> 
            </div> 
            <h3>One</h3>
            <div className='portfolioItemCTA'>
            <a href='https://github.com' className="btn" target='_blank' rel='noreferrer' >GitHub</a>
            <a href='https://github.com' className="btn btn-primary" target='_blank' rel='noreferrer' >Live Demo</a>
            </div>  
        </article>
      </div>

    </section>
  )
}
