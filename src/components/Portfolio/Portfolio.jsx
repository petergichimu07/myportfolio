import React from 'react'
import './Portfolio.css'
import Port1 from '../../assets/Port1.jpg'
import Port2 from '../../assets/Port2.jpg'
import Port3 from '../../assets/Port3.jpg'
import Port4 from '../../assets/Port4.jpg'
import Port5 from '../../assets/Port5.jpg'
const data =[
    {
    id: 1,
    image: Port1,
    title: 'Online Medical Consultation System',
    language: 'reactJS',
    github: 'https://github.com/petergichimu07/patadoc-online-consultation-system',
    demo:'github.com'
},
{
    id: 2,
    image: Port2, 
    title: 'Simple Ecommerce Website',
    language:'HTML, CSS',
    github: 'https://github.com/petergichimu07/E-commerce-website.github.io',
    demo:'github.com'
},
{
    id: 3,
    image: Port3,
    title: 'Online Booking System',
    language:'Java',
    github: 'https://github.com/petergichimu07/java-hotel-booking-project/tree/master/POS',
    demo:'github.com'
},
{
    id: 4,
    image: Port4, 
    title: 'Social Networking Manipulation',
    language: 'R',
    github: 'https://github.com/petergichimu07/R-language-Social-networks',
    demo:'github.com'
},
{
    id: 5,
    image: Port5, 
    title: 'Simple GUI Application',
    language: 'Python',
    github: 'https://github.com/petergichimu07/Python-GUI-apps',
    demo:'github.com'
},
{
    id: 6,
    image: Port5, 
    title: 'Simple Data Manipulation',
    language: 'Python',
    github: 'https://github.com/petergichimu07/Python-GUI-apps',
    demo:'github.com'
}
]
const Portfolio = () => {

  return (
    <section id="portfolio">
        <h5>My recent works</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
            {
                data.map(({id,image,title,github,language,demo})=>{
                    return (
                        <article key={id} className='portfolio__item'>
                <div >
                    <img src={image} className="portfolio__item-image"/>
                </div>
                <h3>{title}</h3>
                <h5>LANGUAGE: {language}</h5>
                <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary'target='_blank'>Live Demo</a>
                </div>
                
            </article>
                    )
                })
            }
            
        </div>
        

    </section>
  )
}

export default Portfolio