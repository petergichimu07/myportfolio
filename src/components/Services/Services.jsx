import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='services'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Unique Designs that break the monotonous designs but maintain consistency.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Easy Navigation to allow users to easily maneuver.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Proper arrangement of items to allow sequential flow of information.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Fault torelance to prevent users from errors.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Enable users to interact with familiar operations</p>
            </li>
          </ul>
        </article>
        <article className='services'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Intuitive and engaging content for your website and blog</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>SEO-Optimization to enable high ranking on search reasons.</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Well-researched information to keep your users engaged</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>100% Unique and original content free of plagiarism</p>
            </li>
            {/* <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </li> */}
          </ul>
        </article>
        <article className='services'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
            <p>Highly Optimized Web Content</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Latest web development technology</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Well-built functionalities for end-users</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Easy-to use features that keep users engaged</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
            <p>Interactive Websites that deliver their purpose</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services