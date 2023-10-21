import React from 'react'
import '../../assets/css/forumsa/ForumUse.css'
import img from '../../assets/images/forum-use-content-img.jpg'

function ForumUse() {
    return (
        <div className='who-use'>
            <h3>Who’s using it</h3>
            <div className='use-body'>
                <nav className='company-logos'>
                    <ul>
                        <li>LOGO 1</li>
                        <li>LOGO 2</li>
                        <li>LOGO 3</li>
                        <li>LOGO 4</li>
                        <li>LOGO 5</li>
                        <li>LOGO 6</li>

                    </ul>


                </nav>
                <div className='content'>
                    <div className='content-text'>
                        <p className='p1'>
                        Car Talk uses Discourse as a forum for their thousands of loyal listeners and readers. 
                        We dare you to come up with a question about cars that can not be answered on their forum of experts and
                        avid hobbyists.
                        </p>
                        <p className='p2'>
                                <q>
                                Discourse is flat out amazing. It’s powerful, reliable, and flexible. We transitioned from another provider 
                                a year ago and never looked back. We’ve only just started to tap into its versatility. And— oh, the best part? They're great folks who are smart and listen to our needs. (Thank you, Jeff and Neil!)    
                                </q>
                        </p>
                    </div>

                    <div className='content-img'>
                        <img src={img} />
                    </div>
                </div>



            </div>
            
        </div>
    )
}

export default ForumUse

