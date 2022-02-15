import React, { Component } from 'react'
import TeachingProject from './teachingProject.js'
import images from './../config/images'
import styles from './../config/styles'
import links from './../config/links'
import Radium from 'radium';

class Teaching extends React.Component {
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
    var proj = [{title: 'Field Classroom: Guiding',
                 img:  images.skurka,
                 text : ['Research and backpacking use similar skills in different spheres. As an educator, I strive to teach students and early career researchers how to be life-long learners and explorers. Necessary skills include learning how to find the best path forward, work with uncertainty and discomfort, absorb and leverage setbacks, balance risk with safety, and traverse internal emotional landscapes. For a few weeks each summer, I continue to hone teaching these skills by serving as a professional backpacking guide who specializes in teaching clients how to travel off-trail in remote wilderness terrain.  The trips that I lead are learning-focused and appropriate for a wide range of client abilities, with the end goal of equipping clients to plan and execute their own future off-trail trips.'
                 ],
                 link: [{'link': links.teaching.skurka, 'is_vid': false, 'key': 0}]
                    },
                {title: 'Field Classroom: Wilderness Astronomy',
                 img:  images.wildAstro,
                 text : ['This is a class for non-majors that my former office-mate <a href="https://parkeloyd.com/">Dr. Parke Loyd</a> and I developed for non-major ASU students with the goal of instilling in them a deep physical intuition for phenomena occurring in the natural world.  We combine classes with a capstone 7-day backpacking trip that uses the wilderness as a natural laboratory for exploring the physical concepts that we introduce in class.  Beginning with the particle model of gas, we use play-acting, group problem solving, journaling, and demonstrations to methodically take students to building mental models of heat transfer, evaporation and condensation, and convection. Students also practice foundational concepts in astronomy such as using the right ascension and declination coordinate system to locate astronomical objects, tell time, and navigate. We also teach students basic backpacking skills such as compass navigation and map reading, gear and campsite selection, and moisture and warmth management.  Finally, we practice key intra- and interpersonal skills that support long-term professional success, such as articulating personal boundaries, navigating conflict, and asking for help. The inaugural class took place during Spring 2019, and we returned from our Spring 2020 trip to the new world of Covid-19 lockdowns.',
                 '<i> Class description: </i> Spend eight days hiking in the otherworldly Sycamore Canyon Wilderness of Arizona.  Using the terrain, the spectacular night sky and your outdoor gear as tools, learn more about concepts such as thermodynamics, basic atmospheric physics, celestial mechanics and skills for exploring and surviving the wilderness.  During this three-credit course, students will have four preparatory meetings with their instructors and classmates prior to the hiking experience over Spring Break.  Students will then return to campus for four follow-up group meetings to reflect on the experience.'
                 ],
                 link: [{'link': links.teaching.wildAstro, 'is_vid': false, 'key': 0}]
                    },

                {title: 'Toolkit Workshops for Early Career Researchers',
                 img:  images.boundaries,
                 text : [ ' I am developing a series of interactive workshops to formally train students to develop essential skills that support research success, in collaboration with career coaches and STEM graduate students, postdocs, research scientists, and professors.  I draw on research from pedagogy, cognitive science, and sociology, as well as my own training in STEM and dance pedagogy, and extensive experience in mentoring graduate students.',
                 'When I travel to give seminars and colloquia, I am happy to also teach a Toolkit workshop at the request of the hosting department.  Workshops are appropriate for undergraduates, graduate students, postdocs, and interested faculty.'
                 ],
                 link: [{'link': links.teaching.toolkit, 'is_vid': false, 'key': 1}]
                    },


                {title: 'Flipped Classroom*: Basic Astronomy and the Galaxy',
                 img:  images.flipped,
                 text : ['In this introduction to astronomy class for undergraduates at Caltech, students worked in groups of 3-4 to solve problems on the board during class time (3x 1hr classes + 2x 2hr problem solving hours).  We organized these problems into weekly modules (e.g. blackbodies, hydrostatic equilibrium, radiative diffusion, etc.), with a focus on helping the students develop a physical intuition for the physics occurring in that module.  To do this, we wrote problems that emphasized order-of-magnitude thinking relative to computational ability, and we circulated throughout the problem-solving groups to ask students to explain in words the physics that was ocurring in each problem.  Finally, we required students to write-up 1-2 problems of their own choosing for each module, allowing them to take ownership over their own learning.  The format of these write-ups combined math and expository writing in the form of blog posts (links available on class website).  To support the in-class problem solving sessions, I recorded short (~15 minute) video lectures that the students had to watch prior to class that summarized the most salient required reading points, and we reviewed the material for 15 minutes at the beginning of the class and answered any questions.  Image credit: UT Austin Faculty Innovation Center.',
                 'Professor: John Johnson  |  Head TA: Melodie Kao, Co-TA: Trevor David',
                 '*see the UT Austin Faculty Innovation Center: https://facultyinnovate.utexas.edu/flipped-classroom',
                    ],
                 link: [{'link': links.teaching.ay20, 'is_vid': false, 'key': 2}]
                    },

                {title: 'Traditional Classroom: Relativistic Astrophysics',
                 img:  images.neutronStar,
                 text : ['This advanced undergraduate class for astronomy majors at Caltech followed a traditional classroom format with three 1hr lectures each week by the professor and one 2hr office hour session each week hosted by myself.  My responsibilities included solving problem sets, posting problem set solutions, grading, and supporting students through problem solving in my weekly office hours.  Image credit: STScI, artist\'s impression of a neutron star (release ID: STScI-2018-43).',
                 'Professor: E. Sterl Phinney  |  TA: Melodie Kao'],
                 link: [{'link': links.teaching.ay104, 'is_vid': false, 'key': 3}]
                    },

                {title: 'Pedagogy Seminar: Principles of University Learning and Teaching in STEM',
                 img:  images.e110,
                 text : ['I was a student in this STEM pedagogy seminar offered by the Center for Teaching, Learning, and Outreach at Caltech.  The course description is reproduced from the seminar website below:',
                 '<i> Class description: </i> Research on university-level teaching and learning in Science, Technology, Engineering, and Mathematics (STEM) disciplines has progressed rapidly in recent years; a well-established body of evidence-based principles now exists to inform instructors and students at the undergraduate and graduate levels. Increasingly, future PIs and faculty are called upon to demonstrate knowledge of and ability to apply established pedagogical and assessment practices, as well as to analyze the efficacy of new approaches. In this course, weekly interactive meetings will provide focused overviews and guided application of key pedagogical research, such as prior knowledge and misconceptions, novice-expert differences, and cognitive development as applied to university teaching. We will also explore emerging university teaching and learning practices and their theoretical basis (e.g., the flipped classroom, online learning). Readings will inform in-class work and students will apply principles to a project of their choice.'
                        ],
                 link: [{'link': links.teaching.e110, 'is_vid': false, 'key': 4}]
                    },

                {title: 'Caltech Tango Initiative: Argentine Tango Immersion',
                 img:  images.tango,
                 text : ['I organized and taught groups of 8-60 students for the quarter-long student-run social tango immersion program at Caltech. For students, tango events bear many similarities to scientific conferences: events can have between 100-600 very intimidating participants, and opportunities to dance hinge primarily on technical mastery and developing social connections. To complement the technical instruction provided by professional tango teachers, I developed exercises for cultivating body language awareness, comfort with eye contact, and fluency in starting, sustaining, and ending conversations with strangers.  I additionally supported students in developing greater emotional fluency by dissecting the technical and emotional nuances in tango music.  Finally, I instructed students on essential research skills such as active listening, collaborative exploration, community building, and setting boundaries to foster creativity.'
                        ],
                 link: [{'link': links.teaching.tango, 'is_vid': false, 'key': 5}]
                    },
                   ]

    var projects = proj.map(function(obj){
                        return <TeachingProject img={obj.img} title={obj.title} text={obj.text} link={obj.link}/>
                        })

    return(
      <div className="Research">  
        <h1 style={styles.research.header}>
          teaching & mentoring
        </h1>

        <div style={styles.research.summaryBox}>
          <p style={styles.research.summaryParagraph}>
            For me, astrophysics is a medium for studying both the human condition and the physical context of human life. Science is challenging because it asks us to confront the current limits of our humanity -- our abilities to learn, think, communicate, collaborate, persist, manage time, observe, and balance our professional and personal needs.  As an educator, I am very interested in understanding how people learn, mature, and overcome challenges, because I believe that understanding how people work is key for effective teaching and learning as well as for producing cutting edge science.  
          </p>
          <p style={styles.research.summaryParagraph}>
             To that end, I have experimented with various teaching formats, participated in training workshops focused on developing skills for inclusive and effective teaching in STEM and the arts, completed an empowerment coaching certification program, and enrolled in various other life skills workshops. I am currently learning how to teach students and early-career researchers the foundational skill of question-asking.  Each new experience gives me a new point of view for understanding how individuals with diverse backgrounds can experience the learning process.  My ongoing goal is to incorporate what I learn into my mentoring and teaching.  Below is a sampling of some of my work.  For a more complete list of my teaching and mentoring portfolio, please see my CV.
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