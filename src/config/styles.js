export default {
	base: { 
		fullName: {
			position:'absolute',
			paddingTop:'20px',
			width: '100%',
			// paddingRight:'15%',
			right: '16%',
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'baseline',
			justifyContent: 'flex-end'
		},
		first: {
				    color:'white',
				    paddingRight: '0%',
				    paddingLeft: '0px',
				    paddingTop: '0',
				    fontSize:'18px',
				    textTransform: 'upperCase',
				    // fontFamily: "Helvetica Neue",
				    fontWeight: "100",
				    /* 16 * 0.0625 = 1px */
  					letterSpacing: '0.175em',
  					zIndex: '1',
				    }, 
		last: {
				    color:'white',
				    paddingRight: '0%',
				    paddingLeft: '5px',
				    paddingTop: '0',
				    fontSize:'18px',
				    textTransform: 'upperCase',
				    // fontFamily: "Helvetica Neue",
				    fontWeight: "100",
				    /* 16 * 0.0625 = 1px */
  					letterSpacing: '0.175em',
  					zIndex: '1',
				    }, 
		remaining: {
				    color:'white',
				    paddingRight: '0%',
				    paddingLeft: '.0em',
				    fontSize:'15px',
				    textTransform: 'upperCase',
				    // fontFamily: "Helvetica Neue",
				    fontWeight: "100",
				    /* 16 * 0.0625 = 1px */
  					letterSpacing: '0.175em',
  					zIndex: '1',
				    },  
	},
	navbar: {
		main: {
			listStyleType: 'none',
			position: 'absolute',
			top: '50px',
			right: '15%',
			margin: '0',
			padding: '0',
			textAlign: 'center',
			display: 'flex',
			alignItems: 'center',
		},
		navLink: {
			
			display: 'block',
			padding: '.5rem 1rem',
			textDecoration: 'none',
   			color: 'white',
		},
		navItem: {
			fontWeight: '300',
		},
		navSpacer: {
			backgroundColor: '#950032',
		    width: '1px',
		    height: '100%',
		}
	},
	sidebar: {
		navItem: {
			fontWeight: '300',
		},
		navLink: {
			color: 'rgb(140, 0, 50)',
			display: 'block',
			padding: '.5rem 1rem',
			paddingLeft: '0',
			marginLeft: '0',
			textDecoration: 'none',
			':hover': {
      			color: '#950032',
   			 }
		},
		navSpacer: {
			backgroundColor: '#950032',
		    width: '1px',
		    height: '100%',
		}
	},
	research: {
		header: {
					    width: '90%',
					    marginRight: 'auto',
					    paddingRight: '0%',
					    paddingLeft: '20%',
					    paddingTop: '15px',
					    paddingBottom: '15px',
					    fontSize: '20px',
					    color: "#808080",
					    /* 16 * 0.0625 = 1px */
  						letterSpacing: '0.1750em',
  						fontWeight: "500"
					    },

		summaryParagraph: {
					    color:'#808080',
					    marginTop: 10,
					    marginBottom: 10,
					    lineHeight: 1.25,
					    fontSize: '14px',
					    },

		summaryBox: {
				    width: '80%',
				    marginRight: 'auto',
				    paddingRight: '0%',
				    paddingLeft: '20%',
				    paddingTop: '0px',
				    paddingBottom: '10px',
				    },
	},
	project: {
		boundary: {
		    width: '90%',
            marginLeft: 'auto',
            paddingRight: '0%',
            paddingLeft: '5%',
            paddingTop: '15px',
            paddingBottom: '15px',
            clear: 'both',

            '@media (max-width: 670px)': {
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                marginRight: '0px',
                width: '100vw'
                }
		},
		imageBoundary: {
			marginRight: '10px', 
	        float: 'left',
	        border: '4px solid rgb(140, 0, 50)', 

	        '@media (max-width: 670px)': {
	            order: '1',
	            border: '0px',

	            marginBottom: '0px',
	            marginRight: '0px',
	            maxWidth: '100%'
	    		}
		},
		image: {

			width: '350px',
			height: '250px',
			marginBottom: '-6px',

			'@media (max-width: 500px)': {
            	width: '87.5%',
            	height: 'auto',
            	// marginBottom: '2px',
                        }

		},
		text: {

			color:'white',
		    backgroundColor:'rgba(255, 0, 0, 0.0)',
		    marginTop: 10,
		    marginBottom: 5,
		    lineHeight: 1.25,
		    fontSize: '12px',
		    maxWidth: '100vw',

		},
		textBoundary:{

			'@media (max-width: 670px)': {
            order: '3',
            maxWidth: '100%',
                        }
		},
		title: {
			width: '90%',
		    marginLeft: '0px',
		    paddingRight: '0%',
		    paddingLeft: '0%',
		    paddingTop: '0px',
		    paddingBottom: '5px',

		    fontSize: '20px',
		    color: "#808080",

		    '@media (max-width: 670px)': {
           		order: '0'
                        }

		},
		paragraphBoundary: {
			backgroundColor: 'rgba(60,60,60, 0.3)',
            marginLeft: 'auto',
            paddingRight: '15%',
            paddingLeft: '30px',
            paddingTop: '5px',
            paddingBottom: '15px',
            minHeight: '250px', //'218px',

            '@media (max-width: 670px)': {
           		display: 'flex',
           		flexDirection: 'column',
           		justifyContent: 'center',
           		minHeight: '0%',
           		maxWidth: '100vw',
           		marginLeft: '10%'
                        }
		},
		separator: {
		   	'@media (max-width: 670px)': {
           		order: '2',
           		width: '550px',
	            // marginRight: 'auto',
	            backgroundColor: '#950032',
			    height: '10px',
			    position: 'relative',
			    left: '-200px'
            },

            '@media (max-width: 500px)': {
           		width: 'calc(90% + 191px)',
            }
            
		}
	},
	teaching: {
		boundary: {
		    width: '90%',
            marginLeft: 'auto',
            paddingRight: '0%',
            paddingLeft: '5%',
            paddingTop: '15px',
            paddingBottom: '15px',
            clear: 'both',

            '@media (max-width: 670px)': {
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                marginRight: '0px',
                width: '100vw'
                }
		},
		imageBoundary: {
			marginRight: '10px', 
	        float: 'left',
	        border: '4px solid rgb(7, 21, 143)', 

	        '@media (max-width: 670px)': {
	            order: '1',
	            border: '0px',

	            marginBottom: '0px',
	            marginRight: '0px',
	            maxWidth: '100%'
	    		}
		},
		image: {

			width: '350px',
			height: '250px',
			marginBottom: '-6px',

			'@media (max-width: 500px)': {
            	width: '87.5%',
            	height: 'auto',
            	// marginBottom: '2px',
                        }

		},
		text: {

			color:'white',
		    backgroundColor:'rgba(255, 0, 0, 0.0)',
		    marginTop: 10,
		    marginBottom: 5,
		    lineHeight: 1.25,
		    fontSize: '12px',
		    maxWidth: '100vw',

		},
		textBoundary:{

			'@media (max-width: 670px)': {
            order: '3',
            maxWidth: '100%',
                        }
		},
		title: {
			width: '90%',
		    marginLeft: '0px',
		    paddingRight: '0%',
		    paddingLeft: '0%',
		    paddingTop: '0px',
		    paddingBottom: '5px',

		    fontSize: '20px',
		    color: "#808080",

		    '@media (max-width: 670px)': {
           		order: '0'
                        }

		},
		paragraphBoundary: {
			backgroundColor: 'rgba(60,60,60, 0.3)',
            marginLeft: 'auto',
            paddingRight: '15%',
            paddingLeft: '30px',
            paddingTop: '5px',
            paddingBottom: '15px',
            minHeight: '250px', //'218px',

            '@media (max-width: 670px)': {
           		display: 'flex',
           		flexDirection: 'column',
           		justifyContent: 'center',
           		minHeight: '0%',
           		maxWidth: '100vw',
           		marginLeft: '10%'
                        }
		},
		separator: {
		   	'@media (max-width: 670px)': {
           		order: '2',
           		width: '550px',
	            // marginRight: 'auto',
	            backgroundColor: 'rgb(7, 21, 143)',
			    height: '10px',
			    position: 'relative',
			    left: '-200px'
            },

            '@media (max-width: 500px)': {
           		width: 'calc(90% + 191px)',
            }
            
		}
	},
	news: {
		boundary: {
		    width: '90%',
            marginLeft: 'auto',
            paddingRight: '0%',
            paddingLeft: '5%',
            paddingTop: '15px',
            paddingBottom: '15px',
            // %display: 'flex',
            // flexDirection: 'row',

            // '@media (max-width: 670px)': {
            //     display: 'flex',
            //     flexDirection: 'column',
            //     flexWrap: 'wrap',
            //     width: '100vw'
            //     }
		},
		imageAndDesc: {
			marginBottom: '10px'
			// marginRight: '10px', 
	  //       // float: 'left',
	  //       border: '4px solid rgba(60,60,60, 0.7)', 

	  //       '@media (max-width: 670px)': {
	  //           order: '1',
	  //           border: '0px',

	  //           marginBottom: '0px'
	  //   		}
		},
		imageBoundary: {
			// marginRight: '10px', 
	  //       // float: 'left',
	  //       border: '4px solid rgba(60,60,60, 0.7)', 

	      //   '@media (max-width: 670px)': {
	      //       order: '1',
	      //       border: '0px',

	      //       marginBottom: '0px',
	      //      	maxWidth: '100%'
	    		// }
		},
		image: {
			width: '500px',
			// height: '250px',
			marginBottom: '-6px',

			'@media (max-width: 670px)': {
            	width: '90%',
            	height: 'auto',
            	// marginBottom: '2px',
                        }

		},
		text: {
			color:'white',
		    backgroundColor:'rgba(255, 0, 0, 0.0)',
		    marginTop: 10,
		    marginBottom: 5,
		    lineHeight: 1.25,
		    fontSize: '12px',
		    // maxWidth: '100vw',
		},
		textBoundary:{
			width: '500px',
			// maxWidth: '100vw',
			'@media (max-width: 670px)': {
            order: '3',
            maxWidth: '90%',
                        }
		},
		title: {
			width: '90%',
		    marginLeft: '0px',
		    paddingRight: '0%',
		    paddingLeft: '0%',
		    paddingTop: '0px',
		    paddingBottom: '5px',

		    fontSize: '20px',
		    color: "#808080",

		    // '@media (max-width: 670px)': {
      //      		order: '0'
      //                   }

		},
		paragraphBoundary: {
			backgroundColor: 'rgba(60,60,60, 0.7)',
            marginLeft: 'auto',
            paddingRight: '15%',
            paddingLeft: '30px',
            paddingTop: '5px',
            paddingBottom: '15px',
            minHeight: '50px', //'218px',

            // '@media (max-width: 670px)': {
           	// 	display: 'flex',
           	// 	flexDirection: 'column',
           	// 	justifyContent: 'center',
           	// 	maxWidth: '100vw',
            //             }
		},
		separator: {
		   	// '@media (max-width: 670px)': {
      //      		order: '2',
      //      		width: '550px',
	     //        // marginRight: 'auto',
	     //        backgroundColor: '#950032',
			   //  height: '10px',
			   //  position: 'relative',
			   //  left: '-200px'
      //       },

            // '@media (max-width: 500px)': {
           	// 	width: 'calc(90% + 191px)',
            // }
            
		}
	},	
	navigation: {
		burger: {

		}
	},
	youtube: {

	},
}
