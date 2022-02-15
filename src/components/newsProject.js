import React, { Component } from 'react';
import styles from './../config/styles';
import Radium from 'radium';

// class ProjectOld extends Component {
//   render() {f

//     var paragraphs = this.props.text.map(function(text){
//                         return <p style={styles.project.text}>{text}</p>;
//                       })

//     return (

//     	<div style={styles.project.boundary}>
//             <div style={styles.project.imageBoundary}>
//                 <a href={this.props.link}  target="_blank">
//                     <img src={this.props.img} style={styles.project.image} />
//                 </a>
//             </div>
//             <div style={styles.project.textBoundary}>
//                 <div style={styles.project.title}>
//                     {this.props.title}
//                 </div>
//                 <div style={styles.project.paragraphBoundary}>
//                     {paragraphs}
//                 </div>
//             </div>
//         </div>
        

          
	      
//     );
//   }
// }




class NewsProject extends Component {
  render() {

    var paragraphs = this.props.text.map(function(text){
                        return <p key={text.key} style={styles.news.text} dangerouslySetInnerHTML={{__html: text.text}}></p>;
                      })

    var links_or_vids = this.props.link.map((link) =>{
                        if (link.is_vid){
                            
                            return (<div className="youtubePlayer" data-id={link.link} key={link.key}>
                                    </div>)
                        }
                        else {
                            return (<div style={styles.news.imageBoundary} key={link.key}>
                                        <a href={link.link}  target="_blank" style={styles.news.link}>
                                            <img src={this.props.img} style={styles.news.image} alt=""/>
                                        </a>
                                    </div>)
                        }
                        })
    

    return (

        <div style={styles.news.boundary}>

            <div style={styles.news.imageAndDesc}>
                {links_or_vids}
                <div style={styles.news.textBoundary}>
                    <div style={styles.news.paragraphBoundary}>
                        {paragraphs}
                    </div>
                </div>
            </div>

           
            <div style={styles.news.separator}> </div>
        </div>
    );
  }
}






export default Radium(NewsProject);



