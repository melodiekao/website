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
                 text : ['Since the first discovery of flaring radio emission from brown dwarfs in 2001, the magnetic activity of these close cousins to giant planets puzzled the astronomy community. In a significant step forward, I led one of a trio of papers establishing that aurorae occur on brown dwarfs and quintupled the number of known ≲1600 K aurorae-emitting brown dwarfs (see also: Hallinan et al. 2015; Pineda et al. 2017). Brown dwarf radio aurorae manifest at frequencies that are directly proportional to magnetic field strengths, so this work paved the way to testing planetary dynamo models with cold brown dwarfs.' ],
                 link: links.research.kao2016,
                 key: 0
                    },


                {title: 'Pushing Dynamo Models: Higher Frequencies',
                 img:  images.FIG_allAgeEvol_revisedb,
                 text : [ 'To provide stronger constraints on dynamo models, we extended observations of the detected L/T dwarfs from my pilot survey to 8-18 GHz. We also measured rotation periods between ~1.47-2.28 hr for three objects, supporting (i) the emerging possibility that rapid rotation may be important for producing strong dipole fields in convective dynamos and/or (ii) rapid rotation is a key ingredient for driving the current systems powering auroral radio emission. Finally, we show that brown dwarfs seriously challenge a seminal planetary magnetic dynamo model predicting that thermal energy convected in the deep interior sets magnetic energy.'],
                 link: links.research.kao2018,
                 key: 1
                    },


                {title: 'First Magnetic Field Measurements of an Extrasolar Planetary Mass Object',
                 img:  images.planetaryMass,
                 text : ['As part of our work in 2016 and 2018, we announced the first -- and so far, the only -- detection of aurorae on an extrasolar planetary-mass object, SIMP0136. This is the first confirmation that kiloGauss magnetic fields more than 200 times stronger than Jupiter’s can be generated at planetary masses. Our result is in part thanks to the efforts of Jonathan Gagne and his collaborators in identifying SIMP0136 as a young brown dwarf with a mass near the ~12-13 M<sub>J</sub> deuterium burning limit. The mass at which compact gaseous objects cease to burn deuterium in their interiors is one way to distinguish between gas giant planets and brown dwarfs, so SIMP0136 potentially provides us with an road to probing exoplanet dynamo parameters.'],
                 link: links.research.kao2018,
                 key: 2
                    },


                {title: 'Y Dwarf magnetic fields',
                 img:  images.ydwarf_radioLuminosity,
                 text : ['At ~250-450 K, Y dwarfs are the coldest known brown dwarfs. As the closest brown dwarf analogs to gas giant planets, they can provide stringent tests of dynamo models.  For instance, any radio aurorae detection above 2 GHz on a Y dwarf would unequivocally rule out the leading dynamo model at planetary temperatures.',
                        'In light of recent discoveries of infrared variability on Y dwarfs, I conducted a pilot study of the three known infrared variable Y dwarfs. This was the first such attempt for Y dwarfs.  I did not detect any radio emission, indicating that clouds may occur more frequently than aurorae on Y dwarfs, as is the case for L and T dwarfs. This suggests that a larger sample is needed and motivates my ongoing VLA program in which I am monitoring all observable Y dwarfs.'
                        ],
                 link: links.research.ydwarfs,
                 key: 3
                    },

                {title: 'Astro 2020 Decadal Survey Whitepaper',
                 img:  images.decadal,
                 text : ['A suite of discoveries in the last two decades demonstrate that we are now at a point where incorporating magnetic behavior is key for advancing our ability to characterize substellar systems.',
                        'I co-led this white paper with Dr. J. Sebastian Pineda (CU Boulder) to highlight what we think will be a key area of growth in the next decade of astronomy and to advocate for the resources that will be necessary for furthering the exciting field of substellar magnetism.'
                        ],
                 link: links.research.decadal,
                 key: 4
                    },

                {title: 'Occurrence Rate of Ultracool Dwarf Quiescent Radio Emission',
                 img:  images.occurrence,
                 text : ['Recently, I showed that the non-auroral “quiescent” component of brown dwarf magnetospheric radio emission is a complementary probe to direct magnetic field measurements. Similar to quiescent radio emission from the solar system planets, the brown dwarf counterpart persists for months to years, pointing relativistic electrons trapped in their magnetospheres.',
                         'To leverage the information encoded in the quiescent component of brown dwarf radio emission, I developed a framework for calculating its occurrence rate and validated it with hundreds of thousands of simulations for various luminosity distribution priors. This framework can also be applied for any quasi-steady source of emission or absorption. Using this statistical framework, I show that (1) the quiescent radio occurrence rate of L dwarfs may be suppressed compared to M and T/Y dwarfs and (2) there may be a significant population of weakly-magnetized brown dwarfs (Kao & Shkolnik submitted).',
                        ],
                 link: links.research.occurrence,
                 key: 5
                    },

                {title: 'Binarity Enhances the Occurrence Rate of Ultracool Dwarf Quiescent Radio Emission',
                 img:  images.occurrenceBinary,
                 text : ['I also modified my statistical framework from above for multi-object systems and show that the radio occurrence rate of objects in binary systems is enhanced compared to their single counterparts (Kao & Pineda submitted). Since tidal spin-up can enhance the rotation rates of binaries, one possible explanation is that rotation may strongly influence brown dwarf magnetospheric physics.',
                         '',
                        ],
                 link: links.research.occurrenceBinary,
                 key: 6
                    },

                {title: 'Characterizing exo-aurorae spectroscopic signatures',
                 img:  images.richeyyowell2020,
                 text : ['My initial work demonstrated that Hα emission and/or photometric infrared variability trace brown dwarf aurorae (Kao et al. 2016; Pineda, Hallinan & Kao 2017). Recently, I mentored ASU graduate student <a href="https://www.tylerricheyyowell.com/">Ms. Tyler Richey-Yowell</a>  in showing that Hα emission rather than 0.5–4 μm photometric variability is a strong tracer of brown dwarf aurorae (Richey-Yowell et al. 2020).',
                        ],
                 link: links.research.richeyyowell,
                 key: 7
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
          Planetary magnetic fields govern the evolution of their atmospheres from space weather and may influence their angular momentum. They are also the only direct probes into planetary interior dynamics, since deep interior fluid flows drive magnetic fields.
          I study the magnetic behaviors of brown dwarfs to learn how magnetism impacts exoplanets at a systems-wide level. To do this, I work at the interface between planetary and stellar science to assess the engines that generate substellar magnetic fields, the conditions of their magnetospheres, and the atmospheric impact of their magnetism. 
          </p>

          <p style={styles.research.summaryParagraph}>
  Brown dwarfs are the gateway to exoplanet magnetism. As failed stars that are not massive enough to burn hydrogen, these substellar objects share similar magnetic dynamos to gas giant exoplanets. Like solar system planets, brown dwarfs can sustain magnetically-driven aurorae that probe their magnetic fields. I work at the interface between planetary and stellar science to assess planetary-like magnetism with brown dwarfs and lay the groundwork for interpreting future radio surveys of exoplanets
          </p>
        </div>
 
        {projects}

      </div>


      )

  }
}

export default Research