import bannerImage from '../assets/jan.png'
import './banner.css'

export default function Banner() {
    return(
        <div className="banner">
            <div style={{backgroundImage: `url(${bannerImage})` }}></div>
        </div>
    );
}