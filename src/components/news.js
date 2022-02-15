import React, { Component } from 'react'
import NewsProject from './newsProject.js'
import images from './../config/images'
import styles from './../config/styles'
import links from './../config/links'
import Radium from 'radium';

class News extends React.Component {
  componentDidMount(){
    var div, n,
        v = document.getElementsByClassName("youtubePlayer");
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



    var proj = [
                {title: 'Feb 2022: Interview with Hex about how I think about data',
                 img:  images.hex1,
                 text : [{text: '2/2022: This was a fun interview with Barry McCardel, the founder of Hex, about how I think about data.' , key:0}
                          ],
                 link: [{'link': links.news.hex1, 'is_vid': false, 'key': 0}],
                 key:0
                    },

                {title: 'March 2021: Awarded the 51 Pegasi b Fellowship',
                 img:  images.skurka_insta,
                 text : [{text: '7/2021: I am the first guide of color for Andrew Skurka Adventures, which specializes in teaching folks how to travel off-trail in some of the most beautiful places in the world!' , key:0}
                          ],
                 link: [{'link': links.news.skurka, 'is_vid': false, 'key': 0}],
                 key:0
                    },

                {title: 'March 2021: Awarded the 51 Pegasi b Fellowship',
                 img:  images.pegb_fellow,
                 text : [{text: '3/2021: I was awarded the 51 Pegasi Fellowship and will be working with Jonathan Fortney at UCSC starting fall 2021!', key:0}
                          ],
                 link: [{'link': links.news.pegb_fellowship, 'is_vid': false, 'key': 0}],
                 key:0
                    },

                 {title: 'December 2019: Wilderness Astronomy ASU Now article',
                 img:  images.wildAstro_article,
                 text : [{text: '12/2019: ASU Now article about the Wilderness Astronomy class that I co-created and co-teach with Parke Loyd at ASU!', key:0}
                          ],
                 link: [{'link': links.news.asuNow_wildAstro, 'is_vid': false, 'key': 0}],
                 key:0
                    },

                {title: 'November 2019: Selected for the NASA PI LaunchPad Program',
                 img:  images.pi_launchpad,
                 text : [{text: '11/2019: Selected from a pool of ~200 applicants for a 2.5-day NASA workshop that accelerates science ideas into NASA mission proposals!  We learned the ins and outs of science objectives, Level 1 and 2 requirements, and science traceability matrices.  We also honed our pitches and networked with representatives from NASA, JPL, Goddard, Ames, APL, Ball Aerospace, Lockheed Martin, Northrup Grumman, and several other aerospace organizations.', key:0}
                          ],
                 link: [{'link': links.news.pi_launchpad, 'is_vid': false, 'key': 0}],
                 key:0
                    },

                {title: 'October 2018: Selected for the Astro2020 Decadal Survey Early Career Focus Session',
                 img:  images.decadal_earlyCareer,
                 text : [{text: '10/2018: Selected to serve as a delegate to the Astro2020 Decadal Survey Early Career Focus Session!', key:0}
                          ],
                 link: [{'link': links.news.decadal_earlyCareer, 'is_vid': false, 'key': 0}],
                 key:0
                    },

                {title: 'September 2018: First Magnetic Field Measurements of an Extrasolar Planetary Mass Object',
                 img:  images.simp0136_pressRelease,
                 text : [{text: '09/2018: NRAO press release: VLA Detects Possible Extrasolar Planetary-Mass Magnetic Powerhouse.  This was also picked up by <a href="https://www.cnn.com/2018/08/07/world/rogue-planet-beyond-solar-system-trnd/index.html">CNN</a>, <a href="https://www.nbcnews.com/mach/science/huge-rogue-planet-has-magnetic-field-scientists-can-t-explain-ncna898026">NBC</a>, <a href="https://www.reddit.com/r/space/comments/94dfoe/">Reddit</a>, and others.', key:0}
                          ],
                 link: [{'link': links.news.nrao, 'is_vid': false, 'key': 0}],
                 key:0
                    },


                {title: 'Announcement of Hubble Fellows',
                 img:  images.hubbleFellow,
                 text : [{text: '04/2018: I was selected as a 2018 NASA Hubble Fellow.', key:1}],
                 link: [{'link': links.news.hubbleFellowship, 'is_vid': false, 'key': 1}],
                 key:1
                    },


                {title: 'Backpacker Magazine',
                 img:  images.backpacker,
                 text : [{text: '02/2017: Infographic + article in collaboration with Backpacker Magazine: How to Navigate by the Stars. I am an avid long-distance solo backpacker, so I picked up a few tricks that I shared with Backpacker Magazine.', key:2}],
                 link: [{'link': links.news.backpacker, 'is_vid': false, 'key': 2}],
                 key:2
                    },   

                {title: 'PhD Comics Video: The Fingerprint of Stars',
                 img:  images.hubbleFellow,
                 text : [{text: 'PhD Comics Video: The Fingerprint of Stars.  Animated explanation of stellar spectra, in collaboration with Jorge Cham (PhD Comics creator), Professor John Johnson, fellow graduate student Ben Montet, and Dr. Jon Swift.', key:3}],
                 link: [{'link': links.news.phDcomics, 'is_vid': true, 'key': 3}],
                 key:3
                    },

                   ]

    var projects = proj.map(function(obj){
                        return <NewsProject key={obj.key} img={obj.img} title={obj.title} text={obj.text} link={obj.link}/>
                        })

    return(
      <div className="Research">  
        <h1 style={styles.research.header}>
          news
        </h1>

        <div style={styles.research.summaryBox}>
          <p style={styles.research.summaryParagraph}>
          Exciting things are happening in my science life and I'm excited to share them with you!
          </p>  
        </div>

      
 
        {projects}

      </div>


      )

  }
}

export default News