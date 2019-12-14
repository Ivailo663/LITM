import React from 'react'
import s from '../../style/SectionMusic.module.scss'

export default function SectionMusic() {
    return (
        <div className={`${s.musicContainer}`}>
            <h2 className={`${s.music}`}>MUSIC</h2>
            <div className={`${s.player} container`}>
                <div className={`${s.songOne} row d-flex align-items-center`}>
                    <div className={`${s.titleContainer} col-8 d-flex align-items-center`}>
                        <i class="fas fa-play"></i>
                        <h3 className={`${s.songOneTitle}`}>Bother to live</h3>
                    </div>
                    <div className={`${s.shareContainer} col-4 d-flex justify-content-end align-items-center`}>
                        <span>5:45</span>
                        <button className={`${s.share}`}>SHARE</button>
                    </div>
                </div>
            </div>
            <div className={`${s.player} container`}>
                <div className={`${s.songOne} row d-flex align-items-center`}>
                    <div className={`${s.titleContainer} col-8 d-flex align-items-center`}>
                        <i class="fas fa-play"></i>
                        <h3 className={`${s.songOneTitle}`}>I am</h3>
                    </div>
                    <div className={`${s.shareContainer} col-4 d-flex justify-content-end align-items-center`}>
                        <span>5:45</span>
                        <button className={`${s.share}`}>SHARE</button>
                    </div>
                </div>
            </div>
            <div className={`${s.player} container`}>
                <div className={`${s.songOne} row d-flex align-items-center`}>
                    <div className={`${s.titleContainer} col-8 d-flex align-items-center`}>
                        <i class="fas fa-play"></i>
                        <h3 className={`${s.songOneTitle}`}>This cage</h3>
                    </div>
                    <div className={`${s.shareContainer} col-4 d-flex justify-content-end align-items-center`}>
                        <span>5:45</span>
                        <button className={`${s.share}`}>SHARE</button>
                    </div>
                </div>
            </div>
            <div className={`${s.player} container`}>
                <div className={`${s.songOne} row d-flex align-items-center`}>
                    <div className={`${s.titleContainer} col-8 d-flex align-items-center`}>
                        <i class="fas fa-play"></i>
                        <h3 className={`${s.songOneTitle}`}>Buried under you</h3>
                    </div>
                    <div className={`${s.shareContainer} col-4 d-flex justify-content-end align-items-center`}>
                        <span>5:45</span>
                        <button className={`${s.share}`}>SHARE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
