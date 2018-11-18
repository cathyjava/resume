import React, { Component } from 'react';

export default class Porfolio extends Component {
	
	constructor(){
		super();
		this.state = {
			name: '',
			summary: '',
			category: '',
			url: '',
			imgURL: ''
		}
	}

	switchPreview = (item) => {
		this.setState({url: item.url, imgURL: item.imgurl, name: item.name, summary: item.summary, category: item.category})
	}

	render() {
    let resumeData = this.props.resumeData;
    
	return (
      
		<section id="portfolio">
			<div className="row"> 
				<div className="twelve columns collapsed">
					<h1>Check Out Some of My Work</h1>

					<div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
							{resumeData.portfolio && resumeData.portfolio.map((item, index) => 
							
									<div key={'portoflio' + item + index} className="columns portfolio-item">
												<div className="item-wrap">		
														<div onMouseOver={() => this.switchPreview(item)}>				
																<img alt="" src={`${item.imgurl}`} className="item-img"/>
																		<div className="overlay">		
																				<div className="portfolio-item-meta">		
																				<h5>{item.name}</h5>		
																				<p>{item.description}</p>
																		    <div className="link-icon">
																			  <i className="icon-plus"/>
																		</div>
														</div>
												</div>
											</div>
								</div>
							</div>
							)
						}
          </div>

					<div style={{textAlign: 'center', height: '200px'}}>
								<a href={this.state.url} target="_BLANK" rel="noopener noreferrer">
									<img style={{height: '200px', display: 'inline'}} src={this.state.imgURL} alt="" />
								</a>
								<div style={{display: 'inline-block', maxWidth: '500px', textAlign: 'left', marginLeft: '20px'}}>
													<h4>{this.state.name}</h4>
													<p>{this.state.summary}</p>
													<span className="categories">
													{this.state.name ? <i className="fa fa-tag" /> : null}
													<em style={{paddingLeft: '5px'}} className="info">{this.state.category}</em></span>
													<br />
													<a style={{textDecoration: 'italic'}} href={this.state.url} target="_BLANK" rel="noopener noreferrer">
														{this.state.url}
													</a>
								</div>
					</div>

        </div>
      </div>
  </section>
    );
	}
}