import React from 'react'

function Services() {
    return (
        <div className="services" id="services">
            <h1 className="heading">
                <span>S</span>
                <span>E</span>
                <span>R</span>
                <span>V</span>
                <span>I</span>
                <span>C</span>
                <span>E</span>
                <span>S</span>
            </h1>

            <div className="box-container">
                <div className="box">
                    <i className="fa fa-hotel"></i>
                    <h4>Affordable Hotels</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                        pariatur praesentium distinctio beatae, explicabo quia!
                    </p>
                </div>

                <div className="box">
                    <i className="fa fa-cutlery"></i>
                    {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-burger-soda" /> */}
                    <h4>Food and Drinks</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                        pariatur praesentium distinctio beatae, explicabo quia!
                    </p>
                </div>

                <div className="box">
                    <i className="fa fa-bullhorn"></i>
                    <h4>Safety Guide</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                        pariatur praesentium distinctio beatae, explicabo quia!
                    </p>
                </div>

                <div className="box">
                    <i className="fa fa-globe"></i>
                    <h4>Around the World</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                        pariatur praesentium distinctio beatae, explicabo quia!
                    </p>
                </div>

                <div className="box">
                    <i className="fa fa-plane"></i>
                    <h4>Fastest Travel</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                        pariatur praesentium distinctio beatae, explicabo quia!
                    </p>
                </div>

                <div className="box">
                    <i className="fa fa-star"></i>
                    <h4>Adventures</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                        pariatur praesentium distinctio beatae, explicabo quia!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services
