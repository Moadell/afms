import React from 'react'
import SocialMediaHorizontal from '../SocialMedia.js/SocialMediaHorizontal/SocialMediaHorizontal'
import './footer.css'

function footer() {

    return (
        <>
            <footer className="fadeInUp col-md-12">


                <SocialMediaHorizontal />
            </footer>
            <h5 className="text-center copyright"> © developed by Mohammed Gamal</h5>
        </>
    )
}
export default footer
