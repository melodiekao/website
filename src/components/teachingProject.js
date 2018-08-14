import React, { Component } from 'react';
import styles from './../config/styles';
import Radium from 'radium';

// class ProjectOld extends Component {
//   render() {

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




class TeachingProject extends Component {
  render() {

    var paragraphs = this.props.text.map(function(text){
                        return <p style={styles.teaching.text} dangerouslySetInnerHTML={{__html: text}}></p>;
                      })

    return (

        <div style={styles.teaching.boundary}>

            <div style={styles.teaching.imageBoundary}>
                <a href={this.props.link}  target="_blank" style={styles.teaching.link}>
                    <img src={this.props.img} style={styles.teaching.image} />
                </a>
            </div>
            <div style={styles.teaching.title}>
                    {this.props.title}
            </div>
            <div style={styles.teaching.textBoundary}>
                <div style={styles.teaching.paragraphBoundary}>
                    {paragraphs}
                </div>
            </div>
            <div style={styles.teaching.separator}> </div>
        </div>
    );
  }
}






export default Radium(TeachingProject);



