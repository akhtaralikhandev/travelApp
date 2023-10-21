import React from 'react'
import '../../assets/css/forumsa/ForumHostingCompo.css'
import GitHubIcon from '@material-ui/icons/GitHub';

function ForumHostingCompo() {
    return (
               
            <div  className='forum-hosting-compo'>
                <div className='first-forum'>
                    <h2>Managed forum hosting from $100/month</h2>
                        <a href='#'>Start your FREE trial</a>
                </div>
                <div className='second-forum'>
                    <div>
                        <p>Discourse is 100% free, open source forum software. Forever.</p>
                        <GitHubIcon />
                        <a href='#'  style={{marginLeft: '5px'}}>Install from GitHub</a>
                        
                    </div>
                    <div >
                        <p style={{ borderTop: '1px solid #eee'}}>Do you run an open source project?</p>
                        <a href='#'>Apply for free hosting</a>
                    </div>
                </div>
                </div>
       
    )
}

export default ForumHostingCompo
