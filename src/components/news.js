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

    var proj = [{title: 'First Magnetic Field Measurements of an Extrasolar Planetary Mass Object',
                 img:  images.simp0136_pressRelease,
                 text : [{text: 'NRAO press release: VLA Detects Possible Extrasolar Planetary-Mass Magnetic Powerhouse.  This was also picked up by <a href="https://www.cnn.com/2018/08/07/world/rogue-planet-beyond-solar-system-trnd/index.html">CNN</a>, <a href="https://www.nbcnews.com/mach/science/huge-rogue-planet-has-magnetic-field-scientists-can-t-explain-ncna898026">NBC</a>, <a href="https://www.reddit.com/r/space/comments/94dfoe/">Reddit</a>, and others.', key:0}
                          ],
                 link: [{'link': links.news.nrao, 'is_vid': false, 'key': 0}],
                 key:0
                    },


                {title: 'Announcement of Hubble Fellows',
                 img:  images.hubbleFellow,
                 text : [{text: 'I was selected as a 2018 NASA Hubble Fellow.', key:1}],
                 link: [{'link': links.news.hubbleFellowship, 'is_vid': false, 'key': 1}],
                 key:1
                    },


                {title: 'Backpacker Magazine',
                 img:  images.backpacker,
                 text : [{text: 'Infographic + article in collaboration with Backpacker Magazine: How to Navigate by the Stars. I am an avid long-distance solo backpacker, so I picked up a few tricks that I shared with Backpacker Magazine.', key:2}],
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