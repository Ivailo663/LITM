import React from 'react'
import s from '../../style/SectionSubscribe.module.scss'

export default function SectionSubscribe() {
    return (
        <div className={`${s.subscribeContainer}`}>
            <h2 className={`${s.subscribe}`}>SUBSCRIBE</h2>
            <div className="container">
                <div className="row">
                    <aside className="col-6">
                        <h2> Subscribe for lates news.</h2>
                        <h4>Provide your email for promo codes, gig dates and special offers</h4>

                    </aside>
                    <form className={`${s.form} d-flex flex-column justify-content-center col-6`}>
                        <input type="text" className={`${s.firstName}`} placeholder="Your first name" />
                        <input type="text" className={`${s.lastName}`} placeholder="Your last name" />
                        <input type="email" className={`${s.email}`} placeholder="Your E-mail addres" />
                        <button className={`${s.submitForm}`}>SUBMIT</button>
                        <p>By subscribing you agree to be notifed for everything about Lonely In The Mist!</p>
                    </form>
                </div>
            </div>
        </div>
    )
}
