import {React, useState} from "react";




const Home=() =>{
  return (
    <>



{ /*carousel*/}


<div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    
  </div>
  <div className="carousel-inner">
    <div class="carousel-item active" data-bs-interval="100">
      <img src="university pic.webp" className="d-block w-100" alt="..." style={{height:"550px"}}/>
      
    </div>
    
    <div className="carousel-item">
      <img src="nu8.webp" className="d-block w-100" alt="..." style={{height:"550px"}}/>
      <div className="carousel-caption d-none d-md-block">
      <div className="grid text-center">
  <h1 style={{color:"whitesmoke"}}>World Class Education Methodologies</h1>
  <h1 style={{color:"whitesmoke"}}>Real World Practical Experience</h1>
  <h1 style={{color:"whitesmoke"}}> 100% Placement Assistance</h1>
</div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>

<br/>


 {/* using grid and cards*/ }
 <div className="row row-cols-12">
 <div className="container text-center">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div className="col">
      <div className="card" >
  <div className="card-body"  style={{backgroundColor:"mistyrose"}}>
    <h5 className="card-title">Trending Courses</h5>
    <p>Provides the most in-demand courses in Engineering</p>
  </div>
</div></div>
    <div className="col"><div class="col">
      <div className="card" >
  <div className="card-body" style={{backgroundColor:"paleturquoise"}}>
    <h5 className="card-title">Experienced Faculty</h5>
    <p>Delivers diverse knowledge from industry experts and academicians</p>
  </div>
</div></div></div>
    <div className="col"><div class="col">
      <div className="card" >
  <div className="card-body" style={{backgroundColor:"mistyrose"}}>
    <h5 className="card-title">Smart Class Rooms</h5>
    <p>Facilitates students with engaging and immersive learning experience</p>
  </div>
</div></div></div>
    <div className="col"><div className="col">
      <div className="card" >
  <div className="card-body" style={{backgroundColor:"paleturquoise"}}>
    <h5 className="card-title">Hi-Tech Laboratories</h5>
    <p>Equips students with experiential learning environment</p>
  </div>
</div></div></div>
  </div></div>
</div>
<br/>
{/*campus drive*/}
<h2>Some Of Our Top Recruiters</h2>
<div>
<marquee behavior="scroll" direction="left" scrollamount="7">
      <img src="drive1.webp"/>
      <img src="drive3.webp"/>
      <img src="drive2.webp"/>
      <img src="drive7.webp"/>
      <img src="drive5.webp"/>
      <img src="drive6.webp"/></marquee>
    </div>

{/**/}
<div class="row row-cols-12">
<h2>MORE FROM THE NEXUS COMMUNITY</h2>

<div class="container text-center">
  <div class="row">
    <div class="col">
    <div class="card" >
  <img src="research.webp" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3>Research News</h3>
    <p class="card-text">With a new microscopy technique, researchers have imaged human brain tissue in unprecedented detail, revealing cells and structures that were not previously visible. They found some of the cells in “low-grade” brain tumors may be more aggressive than expected.</p>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" >
  <img src="res2.webp" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3>Research News</h3>
    <p class="card-text">A new benchtop test shows how advanced “metamaterials” withstand supersonic impacts. “We want to identify impact-resistant structures that can be made into coatings or panels for spacecraft, vehicles, helmets, and anything that needs to be lightweight,” Carlos Portela says.</p>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" >
  <img src="media.webp" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3>In The Media</h3>
    <p class="card-text">The Engine Accelerator, a spinoff from The Engine, is a new unit designed to help early startups “get off the ground with a deeper level of support, including office and lab space,” the Boston Globe reported.</p>
  </div>
</div>
    </div>
  </div>
</div>
<br/>
<div class="container text-center">
  <div class="row">
    <div class="col">
    <div class="card" >
  <img src="camp2.webp" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3>Around Campus</h3>
    <p class="card-text">In 21A.513 (Drawing Human Experience), students look within themselves for artistic inspiration. “This class breathes back into you the creative and artistic expression that is too often lost as we grow up and mature,” senior Charles Williams says.</p>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" >
  <img src="cam.webp" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3>Around Campus</h3>
    <p class="card-text">New nanofabrication equipment will make MIT.nano one of the world’s most advanced research facilities in microelectronics and related technologies, unlocking experimentation and allowing promising inventions to become impactful new products.</p>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" >
  <img src="commu.webp" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3>Community Spotlight</h3>
    <p class="card-text">Using both geology and genetics, EAPS PhD student Fatima Husain investigates the co-evolution of life and Earth. “The farther back into Earth’s history we go, the fewer complete records we have,” she says. “I hope to employ the biggest tool set I can.”</p>
  </div>
</div>
    </div>
  </div></div>
</div><br/><br/>
{/* */}
<h2>Our Esteemed Alumni</h2>

<div class="container text-center">
  <div class="row row-cols-12">
    <div class="col">
      <img src="img1.webp" style={{height:"250px"}}/>
      <h5>Satya Nadella</h5>
    <p>Presidend & CEO Microsoft</p>
    <p>(Nexux,Batch of 1988)</p>
    </div>
    <div class="col">
    <img src="img2.webp" style={{height:"250px"}}/>
    <h5>Mythili Belle Kamath</h5>
    <p>Director,Flight Systems COE,Aerospace,Honeywell</p>
    <p>(Nexux,Batch of 2002)</p>
    </div>
    <div class="col">
    <img src="img3.webp" style={{height:"250px"}}/>
    <h5>Banmail Agrawala</h5>
    <p>Chairman,TATA Advanced Systems Limited</p>
    <p>(Nexux,Batch of 1984)</p>
    </div>
    <div class="col">
    <img src="img4.webp" style={{height:"250px"}}/>
    <h5>Jyotsna Budideti</h5>
    <p>CEO & Co-Founder SpaceSense.ai</p>
    <p>(Nexux,Batch of 2014)</p>
    </div>
  </div>
</div><br/><br/>

{/* */}


<h2>Accredited By The Best</h2><br/>
<div class="row">
    <div class="col-12 ">
      <img src="aw1.webp" style={{height:"150px", width:"200px"}}/>
    </div>
    <div class="col-12">
      <img src="aw2.webp" style={{height:"250px", width:"300px"}}/>
    </div>
    <div class="col-12 ">
      <img src="aw3.webp" style={{height:"150px", width:"200px"}}/>
    </div>
  </div>


<br/><br/>





</>
    );
};
export default Home;