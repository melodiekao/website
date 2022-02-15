import React, { Component } from 'react'
import TeachingProject from './teachingProject.js'
import images from './../config/images'
import styles from './../config/styles'
import links from './../config/links'
import Radium from 'radium';

class Toolkit extends React.Component {
  componentDidMount(){
    var div, n,
        v = document.getElementsByClassName("youtubePlayerTeaching");
    for (n = 0; n < v.length; n++) {
        div = document.createElement("div");
        div.setAttribute("data-id", v[n].dataset.id);
        div.innerHTML = labnolThumb(v[n].dataset.id);
        div.onclick = labnolIframe;
        v[n].appendChild(div);
        // v[n].style.webkitTransform = 'scale(1)';
    }
    // );

    function labnolThumb(id) {
      var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
          play = '<div class="play"></div>';
      return play + thumb.replace("ID", id);
    }

    function labnolIframe() {
      var iframe = document.createElement("iframe");
      var embed = "https://www.youtube.com/embed/ID?autoplay=1";
      iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "1");
      this.parentNode.replaceChild(iframe, this);
    }
      }
      
  render() {

    // WARNING: THE <a> tags have hardcoded pdfs. IF you change them in the links dictionary, they will not change here. You must update them manually below.
    var proj = [{title: 'Boundaries I: Setting Personal Boundaries to Support Excellence in Science',
                 img:  images.boundaries,
                 text : [ 'This workshop is the bedrock of the Toolkit workshops and guides participants through an in-depth inventory of their own values and priorities. Participants also assess how well they are cultivating their priorities and develop flexible problem solving skills by exploring different instantiations of boundaries building. Clearly defining personal values gives participants a personalized set of guidelines to govern their daily choices.',
                 'Length: 1.0 - 1.5 hr',
                 '<i> Abstract: </i> Scientific research demands us to be resilient, creative, effective communicators, and skilled at establishing boundaries with our colleagues and with ourselves.  The most important of these skills is boundary setting, which is the art of clearly articulating what is acceptable in interpersonal interactions, learning when to say yes and when to say no, and distinguishing between personal versus organizational values. Mastering boundaries helps scientists create professional environments that foster resiliency, creativity, and effective communication.  In this practical 2-hour workshop, you will learn why boundaries are so important, practice recognizing when you need to set them, and practice setting them.  You will develop your own personalized toolkit using techniques that draw from both peer-reviewed psychology and pedagogy research as well as tried-and-true methods.',
                 '<a href=/static/media/script_tolerations.afabe9d4.pdf target="_blank">Activity Script: Tolerations</a> - <a href=/static/media/script_expectationsBrainstorm.793cd5c6.pdf target="_blank">Activity Script: Expectations Brainstorm</a>'
                ],
                 link: [{'link': links.toolkit.boundaries1_workbook, 'is_vid': false, 'key': 1}]
                    },

                {title: 'Boundaries II: Navigating Interpersonal Boundaries to Set Your Team up for Success',
                 img:  images.boundariesII,
                 text : [ 'In this add-on workshop to Boundaries I, participants practice applying the skills developed in Boundaries I: Setting Personal Boundaries to the art of maintaining healthy interpersonal and working relationships.  Participants work in pairs or teams to define team values and environment.  They then assess how well the team as a whole is doing to cultivate their desired environment. Participants are guided through opportunities to collaborate with teammates to manage or proactively prevent conflicts.  From this experience, they learn how to set their teams up for success.',
                 'Length: 1.5 hr (longer for larger teams)'
                ],
                 link: [{'link': links.toolkit.boundaries2_workbook, 'is_vid': false, 'key': 1}]
                    },


                   ]

    var projects = proj.map(function(obj){
                        return <TeachingProject img={obj.img} title={obj.title} text={obj.text} link={obj.link}/>
                        })

    return(
      <div className="Research">  
        <h1 style={styles.research.header}>
          toolkit for early career researchers  
        </h1>

        <div style={styles.research.summaryBox}>
        <p style={styles.research.summaryParagraph}>
        A key strategy for my research program is equipping students and postdocs with skills such as boundary-setting and self-compassion that are essential for long-term success. For instance, skillful interpersonal boundaries maintain healthy working relationships. Strong internal boundaries mitigate self-sabotage (e.g. procrastination and negative self-talk). Supporting self-compassion in this way cultivates resilience in the face of setbacks. Right now, the focus in STEM education on technical skills assumes that students already have or will develop essential non-technical skills on their own, yet this is not necessarily case. As a result, mentors can accidentally confound "intrinsic research ability" with maturity in the non-technical skills that underpin strong research skills. One of my missions is to integrate the training of such skills into STEM education, so that people emerge from formal STEM education with the full set of skills necessary to thrive.
        </p>
          <p style={styles.research.summaryParagraph}>
          I am developing a series of interactive workshops to formally train students to develop essential skills that support research success, 
          in collaboration with career coaches and STEM graduate students, postdocs, research scientists, and professors.  I draw on 
          research from pedagogy, cognitive science, and sociology, my own training in STEM and dance pedagogy, extensive experience in mentoring graduate students, and techniques for fostering creativity that I learned as an architecture student.  
          </p>
          <p style={styles.research.summaryParagraph}>
          I provide workbooks for several of my workshops below.  I update these materials regularly after each workshop iteration.  
          In addition to teaching 1.5 - 4 hour workshops, I consult with faculty on strategies for incorporating these materials into formal astronomy courses, and I pull
          smaller sections to use individually with students as the need arises.  
          I invite anyone who is interested to adapt them to your own classrooms, mentoring groups, research mentoring, etc.  
          In the scripts that I provide, I point out where material can be expanded or contracted, and I will continue to add and refine material.
          </p>
          <p style={styles.research.summaryParagraph}>
          When I travel to give seminars and colloquia, I am happy to also teach a Toolkit workshop at the request of the hosting department.  Workshops are appropriate 
          for undergraduates, graduate students, postdocs, and interested faculty.  Institutions that have hosted me as an invited workshop facilitator include the National Astronomy Consortium programs at 
          the National Radio Astronomy Observatory headquarters in Virgina and New Mexico, the Space Telescope Science Institute, and Princeton University.  I have 
          additionally taught these workshops at the City University of New York summer program, and St. Mary's College of Maryland. I also taught
          a half-day workshop at Haverford College in 2020 as a Distinguished Visitor.
          </p>
        </div>
 
        {projects}

      </div>


      )

  }
}

export default Toolkit





