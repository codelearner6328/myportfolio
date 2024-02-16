import React from 'react'
import {recentProjects} from '../DevData';
export default function Projects() {
    return (
        <section id="projects">
        <div className="projects container">
          <div className="projects-header">
            <h1 className="section-title">Recent <span>Projects</span></h1>
          </div>
          <div className="all-projects">
            {
              recentProjects.map((item,index)=>{
                return(
                  <div className="project-item">
                  <div className="project-info">
                    <h1>Project {index+1}</h1>
                    <h2>{item.subTitle}</h2>
                    <p>{item.description}</p>
                  </div>
                  <div className="project-image">
                    <img src={item.img} />
                  </div>
                </div>
                )
              })
            }
          </div>
        </div>
      </section>
    )
}
