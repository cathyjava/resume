import React, { Component } from 'react';
import Particles from 'react-particles-js';

export default class Header extends Component {
  
	render() {
    let resumeData = this.props.resumeData;
    
	return (
      
		<React.Fragment>
		  <header id="home">

 		  <nav id="nav-wrap">
            
			<ul id="nav" className="nav">
				
				<li className="current"><a className="smoothscroll" href="#home">Home</a></li>
				
				<li><a className="smoothscroll" href="#about">About</a></li>
				
				<li><a className="smoothscroll" href="#portfolio">Work</a></li>

				<li><a className="smoothscroll" href="#resume">Resume</a></li>
					
				<li><a className="smoothscroll" href="#testimonials">Certifications</a></li>
					
				<li><a className="smoothscroll" href="#contact">Contact</a></li>
				
			</ul>
         
	    </nav>

		<div className="row banner">
            
		<div className="banner-text">
<div id="particles-js" className="particles"><Particles className="particles-canvas" width={'100%'} height={787} style={{width: '100%', height: '100%'}} /></div>
			
		   <h1 className="responsive-headline">I am {resumeData.name}.</h1>

		   <h3>
			   <span>{resumeData.role} {resumeData.roleDescription}</span>
		   </h3>

               <hr/>
  
		
		{/* <ul className="social">
 
		    {
resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                                  return(
 <li key={item.name}> 
                    	<a href={`${item.url}`} target="_blank">
			<i className={item.className}></i></a>
</li>
                            			)
})}
               
		</ul>
  */} 
          
		</div>
         
		</div>

         
	<p className="scrolldown">
            
	<a className="smoothscroll" href="#about">
	<i className="icon-down-circle"></i></a>
         
	</p>

      
	</header>
      
</React.Fragment>
    );
  }
}
