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
    title: 'Adobe Photoshop',
    github: 'github.com',
    demo:'github.com'
},
{
    id: 2,
    image: Port2, 
    title: 'Another One',
    github: 'github.com',
    demo:'github.com'
},
{
    id: 3,
    image: Port3,
    title: 'Third Image',
    github: 'github.com',
    demo:'github.com'
},
{
    id: 4,
    image: Port4, 
    title: 'Image Four',
    github: 'github.com',
    demo:'github.com'
},
{
    id: 5,
    image: Port5, 
    title: 'Image5',
    github: 'github.com',
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
                data.map(({id,image,title,github,demo})=>{
                    return (
                        <article key={id} className='portfolio__item'>
                <div >
                    <img src={image} className="portfolio__item-image"/>
                </div>
                <h3>{title}</h3>
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