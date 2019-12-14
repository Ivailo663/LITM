import React from 'react';
import logo from './logo.svg';
import './App.scss';
import SectionLanding from './components/sections/SectionLanding'
import SectionGigs from './components/sections/SectionGigs'
import SectionAbout from './components/sections/SectionAbout'
import SectionMusic from './components/sections/SectionMusic'
import SectionSubscribe from './components/sections/SectionSubscribe'

function App() {
    return (
        <div className="App">
            <section className={`landing`}>
                <h2 className={`litm`}>LONELYINTHEMIST</h2>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center flex-column" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link " href="#">Band<span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" href="#">Music</a>
                            <a className="nav-item nav-link" href="#"><img className={`nav-logo`} src={require("./style/gallery/LITM-white.png")} /></a>
                            <a className="nav-item nav-link" href="#">Store</a>
                            <a className="nav-item nav-link" href="#">Gigs</a>
                        </div>
                    </div>
                </nav>
                <SectionLanding />
            </section>
            <section>
                <SectionGigs />
            </section>
            <section>
                <SectionMusic />
            </section>
            <section>
                <SectionSubscribe />
            </section>
            <section>
                <SectionAbout />
            </section>
        </div>
    );
}

export default App;
