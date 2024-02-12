import style from "./HeaderStyles.module.css";
import { Link } from "react-router-dom";

export default function HeaderSlider () {
  return (
    <div className={style.header}>
       <img src="http://bigramyweb.inovaeg.com/static/media/banner.5d002eef3c2ca31636eb.webp?fbclid=IwAR1sLV8LwL3au7Z-CXTWc4n6OKXtulLqmXhXp0tXxyyDSRtML3fw-Sbdazw" alt="WorldWise logo" />
       <p>TRAINING COURSES, BOOKS</p>
       <h1>MAKE YOUR HEALTHY BODY STRONG IS OUR RESPONSIBILITY</h1>
       <Link to="/app" className="cta">About Us</Link>
    </div>
  )
}
