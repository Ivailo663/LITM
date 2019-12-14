import React from 'react'
import s from '../../style/SectionAbout.module.scss'

export default function About() {
    return (
        <div className={`${s.aboutContainer}`}>
            <div className={`${s.secondLogoContainer}`}>
                <img className={`${s.secondLogo}`} src={require("../../style/gallery/LITM-white.png")} />
            </div>
            <p className={`${s.info}`}>{`Lonely In The Mist is metalcore / pop rock / hard rock band formed in Sofia, Bulgaria in 2018 by Alex & Ivaylo`}</p>
            <div>
                <div>
                    <div className={`${s.memberOneContainer} d-flex flex-row justify-content-center`}>
                        <p>Ivaylo</p>
                        <div className={`${s.devider}`}></div>
                        <p>Lead Vocals, Rhythm Guitar</p>
                    </div>
                    <div className={`${s.memberTwoContainer} d-flex flex-row justify-content-center `}>
                        <p>Alex</p>
                        <div className={`${s.devider}`}></div>
                        <p>Back Vocals, Lead Guitar</p>
                    </div>
                </div>
            </div>
            <div className={`${s.socialMediaContainer}`}>
                    <i className="fab fa-spotify"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-soundcloud"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook-f"></i>
                </div>
        </div>
    )
}
