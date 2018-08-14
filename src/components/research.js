import React, { Component } from 'react'
import Project from './project.js'
import images from './../config/images'
import styles from './../config/styles'
import links from './../config/links'
import Radium from 'radium';

class Research extends React.Component {
  render() {

    var proj = [{title: 'Solving the Detection Bottleneck',
                 img:  images.mkao_c09_20150828,
                 text : ['Our only means of measuring magnetic fields on brown dwarfs is with electron cyclotron maser (ECM) emission.  ECM emission is the pulsing component of brown dwarf radio emission, and previously it was interpreted as magnetic reconnection events in stellar flares. However, ECM detections for <1700 K dwarfs eluded astronomers for over a decade, yielding just one detection out of ~70 objects.'
                        ,'We solved this detection bottleneck by showing that radio pulses are in fact signatures of aurorae. By observing only objects that emit aurorae at other wavelengths, such as time-varying infrared emission, we detected the first planetary mass object at radio frequencies, measured magnetic fields on four new 830-1700 K brown dwarfs, and conducted the first tests of dynamos operating in <1700 K objects.'
                          ],
                 link: links.research.kao2016,
                 key: 0
                    },


                {title: 'Pushing Dynamo Models: Higher Frequencies',
                 img:  images.FIG_allAgeEvol_revisedb,
                 text : ['To provide stronger constraints on dynamo models, we extended observations of the detected L/T dwarfs from my pilot survey to 8-18 GHz. We detected auroral pulses at frequencies corresponding to >3.2-4.1 kG localized magnetic fields on four of our target.  We additionally detected a pulse at 15-16.5 GHz for 2MASS 10475385+2124234 (T6.5, 890 K), corresponding to a localized >5.6 kG field strength.  For the same object, we tentatively detected a 16.5-18 GHz pulse, corresponding to a localized >6.2 kG field strength. We measured rotation periods between ~1.47-2.28 hr for three objects, supporting (i) an emerging consensus that rapid rotation may be important for producing strong dipole fields in convective dynamos and/or (ii) rapid rotation is a key ingredient for driving the current systems powering auroral radio emission.  Finally, we find that age, mass, and temperature together cannot account for the strong magnetic fields produced by our targets.'],
                 link: links.research.kao2018,
                 key: 1
                    },


                {title: 'First Magnetic Field Measurements of an Extrasolar Planetary Mass Object',
                 img:  images.planetaryMass,
                 text : ['SIMP0136 is particularly interesting because in 2017, Jonathan Gagne and his collaborators identified it as a member of the 200 Myr Carina-Near moving group.  Its young age constrains its mass to only 12.7 +/- 1.0 Jupiter masses (M<sub>J</sub>), which is near the ~12-13 M<sub>J</sub> deuterium burning limit, or the mass above which compact gaseous objects are expected to burn deuterium.  The deuterium burning limit is one way to distinguish between gas giant planets and brown dwarfs, and if SIMP0136 is indeed 12.7 M<sub>J</sub>, then it potentially provides us with an inroad into probing exoplanet dynamo parameters.'],
                 link: links.research.kao2018,
                 key: 2
                    },


                {title: 'Y Dwarf magnetic fields',
                 img:  images.ydwarf_radioLuminosity,
                 text : ['At ~250-450 K,  Y dwarfs are the coldest brown dwarfs and can provide stringent tests of dynamo models.  For instance, any radio aurorae detection above 2 GHz on a Y dwarf would unequivocally rule out the leading dynamo model at planetary temperatures.',
                        ,'In light of recent discoveries of infrared variability on Y dwarfs, I conducted a pilot study of the three known infrared variable Y dwarfs. This was the first such attempt for Y dwarfs.  I did not detect any radio emission, indicating that clouds may occur more frequently than aurorae on Y dwarfs, as is the case for L and T dwarfs. This suggests that a larger sample is needed and motivates my ongoing VLA program in which I am monitoring all observable Y dwarfs.'
                        ],
                 link: links.research.kao2018,
                 key: 3
                    },
                   ]

    var projects = proj.map(function(obj){
                        return <Project key={obj.key} img={obj.img} title={obj.title} text={obj.text} link={obj.link}/>
                        })

    return(
      <div className="Research">  
        <h1 style={styles.research.header}>
          research
        </h1>

        <div style={styles.research.summaryBox}>
          <p style={styles.research.summaryParagraph}>
          My research harnesses a new paradigm shift in our understanding of brown 
          dwarf magnetic activity to study substellar magnetism. Specifically, by interpreting brown dwarf radio emission as 
          signatures of aurorae rather than magnetic reconnection events, I have developed methods 
          to efficiently find radio brown dwarfs, probe their magnetic fields, and test models of how their fields are generated and sustained.
          </p>

          <p style={styles.research.summaryParagraph}>
          Brown dwarfs are failed stars (not massive enough to burn hydrogen) and share 
          characteristics with both low-mass stars and gas giant planets.  This makes brown dwarfs 
          great laboratories for studying physics in planets and low-mass stars. Magnetic fields 
          shape much of the evolution of planets and stars: they influence the evaporation of planetary atmospheres,
          they "puff up" planets and stars, they can generate optical and infrared 
          emission that masquerade as clouds in the atmospheres of other worlds, and they affect 
          planet formation and habitability. Finally, magnetic fields probe the deep interior dynamo 
          regions of planets, where fluid flows generate these fields.
          </p>

          <p style={styles.research.summaryParagraph}>
          Understanding how magnetic fields are generated in planets is important for predicting
          the shape, strength, and time stability of planetary magnetic fields and is a key piece of 
          the puzzle for evaluating the habitability of planets around other stars.   I am 
          particularly interested in how magnetic fields are generated in brown dwarfs, because the 
          mechanisms occurring in brown dwarfs also occur in low mass stars (the most numerous types 
          of stars in our universe) , gas giants (Jupiter-like), and even terrestrial planets 
          (Earth-like). 
          </p>
        </div>
 
        {projects}

      </div>


      )

  }
}

export default Research