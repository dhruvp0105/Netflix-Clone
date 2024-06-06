import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-icons">
          <img src={facebook_icon} alt='facebook-img'/>
          <img src={instagram_icon} alt='instagram-img'/>
          <img src={twitter_icon} alt='twitter-img'/>
          <img src={youtube_icon} alt='youtube-img'/>
        </div>
        <ul>
          <li>Audio Description</li>
          <li>Help Center</li>
          <li>Gift Cards</li>
          <li>Media Centre</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Cookie Preferences</li>
          <li>Corporate Informations</li>
          <li>Contact Us</li>
        </ul>
        <div className="copyright-text">&copy; 1997-2024 Netflix, Inc.</div>
    </div>
  )
}

export default Footer