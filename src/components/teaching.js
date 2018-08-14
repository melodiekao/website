import React, { Component } from 'react'
import TeachingProject from './teachingProject.js'
import images from './../config/images'
import styles from './../config/styles'
import links from './../config/links'
import Radium from 'radium';

class Teaching extends React.Component {
  render() {

    var proj = [{title: 'Flipped Classroom: Basic Astronomy and the Galaxy',
                 img:  images.mkao_c09_20150828,
                 text : ['In this introduction to astronomy class for undergraduates at Caltech, students worked in groups of 3-4 to solve problems on the board during class time (3x 1hr classes + 2x 2hr problem solving hours).  We organized these problems into weekly modules (e.g. blackbodies, hydrostatic equilibrium, radiative diffusion, etc.), with a focus on helping the students develop a physical intuition for the physics occurring in that module.  To do this, we wrote problems that emphasized order-of-magnitude thinking relative to computational ability, and we circulated throughout the problem-solving groups to ask students to explain in words the physics that was ocurring in each problem.  Finally, we required students to write-up 1-2 problems of their own choosing for each module, allowing them to take ownership over their own learning.  The format of these write-ups combined math and expository writing in the form of blog posts (links available on class website).  To support the in-class problem solving sessions, I recorded short (~15 minute) video lectures that the students had to watch prior to class that summarized the most salient required reading points, and we reviewed the material for 15 minutes at the beginning of the class and answered any questions.',
                 'Professor: John Johnson, Head TA: Melodie Kao, Co TA: Trevor David'
                          ],
                 link: links.teaching.ay20
                    },

                {title: 'Traditional Classroom: Relativistic Astrophysics',
                 img:  images.placeholder,
                 text : ['This advanced undergraduate class for astronomy majors at Caltech followed a traditional classroom format with 3x 1hr lectures each week by the professor and 1x 2hr office hours each week hosted by myself. Problem sets emphasized computation but could also be solved more elegantly if students were able to ...  ',
                 'Professor: E. Sterl Phinney, TA: Melodie Kao'],
                 link: links.teaching.ay104
                    },

                {title: 'Field Classroom: Wilderness Astrophysics',
                 img:  images.FIG_allAgeEvol_revisedb,
                 text : ['This is a class that Dr. Parke Loyd and I are developing for non-major ASU students'],
                 link: links.research.kao2018
                    },

                {title: 'Pedagogy Seminar: Principles of University Learning and Teaching in STEM',
                 img:  images.e110,
                 text : ['I was a student in this STEM pedagogy seminar offered by the Center for Teaching, Learning, and Outreach at Caltech.  The course description is reproduced from the seminar website below:',
                 '<i> Research on university-level teaching and learning in Science, Technology, Engineering, and Mathematics (STEM) disciplines has progressed rapidly in recent years; a well-established body of evidence-based principles now exists to inform instructors and students at the undergraduate and graduate levels. Increasingly, future PIs and faculty are called upon to demonstrate knowledge of and ability to apply established pedagogical and assessment practices, as well as to analyze the efficacy of new approaches.</i>',
                  '<i>In this course, weekly interactive meetings will provide focused overviews and guided application of key pedagogical research, such as prior knowledge and misconceptions, novice-expert differences, and cognitive development as applied to university teaching. We will also explore emerging university teaching and learning practices and their theoretical basis (e.g., the flipped classroom, online learning). Readings will inform in-class work and students will apply principles to a project of their choice.</i>'
                        ],
                 link: links.teaching.e110
                    },

                {title: 'Caltech Tango Initiative: Argentine Tango Immersion',
                 img:  images.ydwarf_radioLuminosity,
                 text : ['What is the purpose of this class?'
                        ],
                 link: links.research.Ydwarfs
                    },

                   ]

    var projects = proj.map(function(obj){
                        return <TeachingProject img={obj.img} title={obj.title} text={obj.text} link={obj.link}/>
                        })

    return(
      <div className="Research">  
        <h1 style={styles.research.header}>
          teaching & outreach
        </h1>

        <div style={styles.research.summaryBox}>
          <p style={styles.research.summaryParagraph}>
          Scientists wear many hats.  We investigate questions and create new knowledge through our research.  We curate scientific knowledge through peer review, citations, and the editorial process.  We transfer transfer scientific knowledge to the public through our teaching and outreach.  Finally, we ensure the continuation of research through our mentoring of the next generation of scientists to help them develop the skills needed to interpret and build upon current scientific knowledge. 
          </p>

          <p style={styles.research.summaryParagraph}>
          As an educator, I am very interested in understanding how people learn, mature, and overcome challenges, because I believe that all people have the innate ability to grasp, take joy in, and contribute to science.  My mission as an educator is to help as many people as I can realize their fullest potential, whether or not they go on to become scientists.  I do this by striving to create the right environment and support for each individual.  To that end, I have experimented with various teaching formats, attended research-based pedagogical seminars, participated in workshops geared toward education in STEM and the arts, and enrolled in empowerment coaching certification programs and various other life skills workshops.  Each new experience gives me a new point of view of how individuals with diverse backgrounds can experience the learning process, and my ongoing goal is to incorporate what I learn into my mentoring and teaching.  Below is a sampling of some of my work.
          </p>

        </div>
 
        {projects}

      </div>


      )

  }
}

// Flipped Classroom: <a href="http://www.astro.caltech.edu/~mkao/ay20/Home.html" target="_blank"> Basic Astronomy and the Galaxy </a>  <br> (Professor John Johnson)'
//                         ,'Traditional Classroom:  <a href="http://www.its.caltech.edu/~esp/ay104/" target="_blank"> Relativistic Astrophysics </a> <br> (Professor E. Sterl Phinney)' 
//                         ,'Field Class: <a href="http://www.astro.caltech.edu/~mkao/ay20/Home.html" target="_blank"> Wilderness Astrophysics </a>  <br> (Professor John Johnson)

export default Teaching