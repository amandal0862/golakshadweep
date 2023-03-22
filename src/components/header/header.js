import React from 'react'
import './header.css'

export default function Header() {
    return (
        <div className="container">
            <img src="https://s3-alpha-sig.figma.com/img/80a0/725d/c6fde8d86e0166b58d5ef942d8d55b63?Expires=1680480000&Signature=BkEV8rUoL8dhhO0~TTNwqYClzsNU4XguHHoOrfr96uU86TwqN3inYsdbIzkaNnRReIk7xhbGsdwZmhPau3Z8pHi078cMCIX1zcpkgGELtQky~OBZ~j63BLKJY2mJH~CCSabet73dh9K3EvDL-BhXN-vmkqoSSY3gNfsL2DREqCQj4pvNRVb-nF3sK4nIZJTwg9jSEs-67si3Sp25Wgstlyrqi7fMmr6e54RZf3eHn4PWG5qe4BOUcJqhtFvWW543sr144hW0o7U5QYP4fvUNNfvlbmI7eA3pFDMrmffgqSwPLLvaL1Zgku3IxuppnneS3HQ8m6Q8l5zazSYO9jT34w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Logo...." />
            <div className="mid">
                <p>Find Reservations</p>
                <p>Packages</p>
                <p>About Lakshadweep</p>
                <p>About Us</p>
                <p>Gol</p>
                <p>Support</p>
            </div>
            <div className="btns">
                <div className="btn btn1">LogIn</div>
                <div className="btn btn2">Sign Up</div>
            </div>
        </div>
    )
}
