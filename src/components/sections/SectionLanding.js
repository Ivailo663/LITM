import React from 'react'
import s from '../../style/SectionLanding.module.scss'

export default function SectionLanding() {
    return (
        <div>
            <div className={`${s.litmContainer} justify-content-center d-flex`}>
                {/* <h2 className={`${s.litm}`}>LONELYINTHEMIST</h2> */}
            </div>
            <div className={`${s.landingBtnContainer}`}>
                <button className={`btn ${s.Subscribe}`}>SUBSCRIBE</button>
                <button className={`btn ${s.newEP}`}>NEW EP</button>
                <div className={`${s.socialMediaContainer}`}>
                    <i className="fab fa-spotify"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-soundcloud"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook-f"></i>
                </div>
            </div>
        </div>
    )
}
