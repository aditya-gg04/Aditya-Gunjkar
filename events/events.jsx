import React from "react";
import './events.css'


const Events = () => {
    const buttonStyle1 = {
        '--color': '#3da077',
        '--border': '2px',
        '--slant': '.5em',
      };
      const buttonStyle2 = {
        '--color': '#b0afb0',
        '--border': '2px',
        '--slant': '.5em',
      };
      const buttonStyle3 = {
        '--color': '#afa220',
        '--border': '2px',
        '--slant': '.5em',
      };
      const buttonStyle4 = {
        '--color': '#5f6fad',
        '--border': '2px',
        '--slant': '.5em',
      };
      

    
    return (
        <>
            <div className="container">
                <div className="container-title">
                    Events
                </div>


                <div className="gradient-cards">
                    <div className="card">
                        <div className="container-card bg-green-box">
                            <div className="imga"><img src="./assets/enspire-logo.png" alt="" /></div>

                            <div className="card-title">AD arena</div>
                            <div className="card-description">
                                Join us for an exclusive event where innovation meets value! Discover a world of possibilities as we unveil our latest and greatest products designed to elevate your lifestyle. From cutting-edge technology to timeless classics, our collection has something for everyone.
                            </div>
                            <div className="btndiv">
                            <button className='opbtn' style={buttonStyle1}>
                                Read more
                            </button>
                            </div>
                        </div>
                    </div>




                    <div className="card">
                        <div className="container-card bg-white-box">
                            <div className="imga1"><img src="./assets/enspire-logo.png" alt="" /></div>
                            <div className="card-title">Venturer</div>
                            <div className="card-description">
                                The Entrepreneurial Showdown is an exciting game where participants recieve a base investment and must strategically acquire undisclosed companies using provided product, sales and dissolution data.
                            </div>
                            <div className="btndiv">
                            <button className='opbtn' style={buttonStyle2}>
                                Read more
                            </button>
                            </div>
                        </div>
                    </div>



                    <div className="card">
                        <div className="container-card bg-yellow-box">
                            <div className="imga2"><img src="./assets/enspire-logo.png" alt="" /></div>
                            <div className="card-title">Crypto</div>
                            <div className="card-description">
                                Talent wins games , but teamwork and intelligence win championships.If you are wondering if this seems simple enough , here's a twist. You don't know your teammates are until the end. So , beware of who you help and who you don't.
                            </div>
                            <div className="btndiv">
                            <button className='opbtn' style={buttonStyle3}>
                                Read more
                            </button>
                            </div>
                        </div>
                    </div>





                    <div className="card">
                        <div className="container-card bg-blue-box">
                            <div className="imga3"><img src="./assets/enspire-logo.png" alt="" /></div>
                            <div className="card-title">Gaming Nights</div>
                            <div className="card-description">
                                Join us for heart-poundind action and strategic showdowns as we host gaming nights featuring two of the hottest titles - Valorsnt and Battlegrounds Mobile India (BGMI).
                            </div>
                            <div className="btndiv">
                            <button className='opbtn' style={buttonStyle4}>
                                Read more
                            </button>
                            </div>
                        </div>
                    </div>





                    <div className="card">
                        <div className="container-card bg-green-box">
                            <div className="imga"><img src="./assets/enspire-logo.png" alt="" /></div>
                            <div className="card-title">IPL auction </div>
                            <div className="card-description">
                                Always thought that you cold create the best IPL team if only you had the money? Here is a chance to put yourself in the shoes of a bidder and build the team you always wanted to lift the conveted IPL trophy . This fun-filled event is a must for cricket Lovers.
                            </div>
                            <div className="btndiv">
                            <button className='opbtn' style={buttonStyle1}>
                                Read more
                            </button>
                            </div>
                        </div>
                    </div>







                    <div className="card">
                        <div className="container-card bg-white-box">
                            <div className="imga1"><img src="./assets/enspire-logo.png" alt="" /></div>
                            <div className="card-title">Monopoly</div>
                            <div className="card-description">
                                It's a game that tests business acumen, negotiation skills , and strategic decision-making , offering a thrilling journey through the ups and downs of the market.
                            </div>
                            <div className="btndiv">
                            <button className='opbtn' style={buttonStyle2}>
                                Read more
                            </button>
                            </div>
                        </div>
                    </div>







                    <div className="card">
                        <div className="container-card bg-yellow-box">
                            <div className="imga2"><img src="./assets/enspire-logo.png" alt="" /></div>
                            <div className="card-title">Mystery Rooms</div>
                            <div className="card-description">
                                Immerse yourself in the ultimate adventure where suspense, teamwork, and quick thinking collide. Our Mystery Rooms offer a thrilling and interactive escape experience like no other.  Mystery Rooms provide an unforgettable blend of excitement and intellect.
                            </div>
                            <div className="btndiv">
                            <button className='opbtn' style={buttonStyle3}>
                                Read more
                            </button>
                            </div>
                        </div>
                    </div>



                    <div className="card">
                        <div className="container-card bg-blue-box">
                            <div className="imga3"><img src="./assets/enspire-logo.png" alt="" /></div>
                            <div className="card-title">FindX-Not for the Clueless</div>
                            <div className="card-description">
                                Brainstorm with your mates and let your imagination run wild as Ecell presents `FIND X` - an unconventional tresure hunt which would test your knowledge and wit.
                            </div>
                            <div className="btndiv">
                            <button className='opbtn' style={buttonStyle4}>
                                Read more
                            </button>
                            </div>
                        </div>
                    </div>


                    <div className="card">
                        <div className="container-card bg-green-box">
                            <div className="imga"><img src="./assets/enspire-logo.png" alt="" /></div>
                            <div className="card-title">Avenge The Fallen</div>
                            <div className="card-description">
                                This game gives you a chance to be int the shoes of the company's board and take decisions that might have prevented the failure. The team which suggests the most effective solutions will win.
                            </div>
                            <div className="btndiv">
                            <button className='opbtn' style={buttonStyle1}>
                                Read more
                            </button>
                            </div>
                        </div>
                    </div>





                    <div className="card">
                        <div className="container-card bg-white-box">
                            <div className="imga1"><img src="./assets/enspire-logo.png" alt="" /></div>
                            <div className="card-title">Million Dollar Idea</div>
                            <div className="card-description">
                                Ever wanted to be on the stage of Shark Tank? Here's your chance to realize your dream. Get those business ideas out that you always thought would be successful.
                            </div>
                            <div className="btndiv">
                            <button className='opbtn' style={buttonStyle2}>
                                Read more
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Events;