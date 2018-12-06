import React, { Component } from 'react';

export default  class Resume extends Component {
  
	render() { let resumeData = this.props.resumeData;
    
	return (
      
		<section id="resume">
			<div className="row education">
				<div className="three columns header-col">
					<h1><span>Education</span></h1>
				</div>

			<div className="nine columns main-col">
				{resumeData.education && resumeData.education.map((item, index) => 
					<div className="row item" key={'education' + item + index}>
							<div className="twelve columns">
								<h3>{item.UniversityName}</h3>
								<p className="info">
									{item.specialization}
								<span>&bull;</span> 
								<em className="timeframe">{item.timeframe}</em></p>
								<p>{item.Achievements}</p>
							</div>
					</div>
				)
				}     
			</div>
		</div>
        


		              
		<div className="row work">
            
		<div className="three columns header-col">
               						<h1><span>Work</span></h1>
            
		</div>

            
		
		<div className="nine columns main-col">
           
   			{resumeData.work && resumeData.work.map((item, index) => {
                  				return(
                    
				<div className="row item" key={'work' + item + index}>
                 
			        <div className="twelve columns">
                             						<h3>{item.CompanyName}</h3>
                          					<p className="info">
		
                          {item.specialization}
<span>&bull;</span> 
					  <em className="timeframe">{item.timeframe}</em></p>
                          		<p>{item.Duties}</p>

					<p>
{item.Achievements}
</p>
                      		</div>

                    
			       </div>

                  
				)
                
			     })
              
			    }

	            </div> 
		  </div>
	

	<div className="row skill">

            
	<div className="three columns header-col">
               						<h1><span>Skills</span></h1>
            
	</div>

            
	
	       <div className="nine columns main-col">

      
	     	<p>{resumeData.skillsDescription}
</p>


   	     	<div className="bars">

   				   
	     	<ul className="skills">
 
			{
resumeData.skills && resumeData.skills.map((item, index) => {
                    			     return(

		    		<li key={'skills' + item + index}>
                      
		       		<span className={`bar-expand ${item.skillname.toLowerCase()}`}></span>
		       		<em>{item.skillname}</em>
                      
		      		 </li>
                    
			)
                  
		      })

                     }


   		</ul>

   			
                </div>
      
	</div>        
	</div> 
      
</section>
   );
  }
}
