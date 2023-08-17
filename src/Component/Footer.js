import facebook from "../logo/facebook.jpg"
import intagram from "../logo/instagram.jpg"
import twitter from "../logo/twitter.jpg"
import youtube from "../logo/youtube.jpg"
import './Footer.css'
import { useNavigate } from 'react-router-dom'

function Footer() {
    const nav = useNavigate();
  return (
    <div>
       <div className='footerContainner'>
            <div >
                <h2 className='about'>AboutUs</h2>
                <hr className='footerHr' />
                <span className='blo-des'>This  is a simple blog app made by Dabloo kumar Yadav
                    in this blog app the latest information about today's generation.
                </span>
                <div className='displayFt'>
                    <img className='footerLogo' alt='not found' src={facebook} height={50} width={50} />
                    <img className='footerLogo' alt='not found' src={intagram} height={50} width={50} />
                    <img className='footerLogo' alt='not found' src={twitter} height={50} width={50} />
                    <img className='footerLogo' alt='not found' src={youtube} height={50} width={50} />
                </div>
            </div>
            <div>
                <h2 className='about1'>Usefull Links</h2>
                <hr className='footerHr1' />
                <span className='links1' onClick={() => {
                    nav("/")
                }}>Home</span>
                <span className='links1' onClick={() => {
                    nav("/bollywood")
                }}>Bollywood</span>
                <span className='links1' onClick={() => {
                    nav("/technology")
                }}>Technology</span>
                <span className='links1'>Privacy Policy</span>

            </div> <div>
                <h2 className='about1'>Ours  Services</h2>
                <hr className='footerHr1' />
                <span className='links1'>Web Deveploment</span>
                <span className='links1'>App Deveploment</span>
                <span className='links1'>Graphic Design</span>

                <span className='links1'>Web Design</span>
            </div> <div>
                <h2 className='about1'> Contact:- </h2>
                <hr className='footerHr1' />
                <span>Dabloo Kumar Yadav</span>

                <span>Your Querys or Questions</span>

                <input type='text' placeholder='Write here' className='question' />
                <button className='qsend'>Send</button>
            </div>
        </div>
    </div>
  )
}

export default Footer