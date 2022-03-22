import './Testimonials.css'
import React from 'react'
import IMG from '../../assets/me.png'

export default function Testimonials() {
  const testimonials = [
    {
      avatar: IMG,
      name: 'Steve Jobs',
      review: 'Sit ut ipsum labore magna tempor proident duis anim sint minim nostrud laborum amet.',
    },

    {
      avatar: IMG,
      name: 'Steve Jobs',
      review: 'Sit ut ipsum labore magna tempor proident duis anim sint minim nostrud laborum amet.',
    },

    {
      avatar: IMG,
      name: 'Steve Jobs',
      review: 'Sit ut ipsum labore magna tempor proident duis anim sint minim nostrud laborum amet.',
    },
  ]

  return (
    <section id='testimonials'>
    <h5> What to expect from my work </h5>
    <h2> Testimonials </h2>
    <div className='container testimonialContainer'>
    {
      testimonials.map(({avatar, name, review}, index) => {
      return(
        <article key={index} className='testimonial'>
        <div className='avatar'>
          <img src={avatar} alt={name} />
        </div>
          <h5> Pessoa Programadora</h5>
          <small className='peopleReview'> {review} </small>

      </article>
)

      })
     }
     
    </div>
    </section>
  )
}
