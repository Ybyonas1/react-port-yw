import React from 'react';

function Footer() {
    return (
        <div className="container-fluid mt-5 fixed-bottom">
            <div className="row text-white bg-black">
                <div className="card-body text-center py-1">
                    <blockquote className="blockquote mb-0">
                        <p className="text-black text-center text-white mb-0">Created with ❤️ and React.Js! - <span className="h6 pt-0">© {new Date().getFullYear()} Yonas Woldemichael</span></p>

                    </blockquote>
                </div>

            </div>
        </div>
    )
}


export default Footer;