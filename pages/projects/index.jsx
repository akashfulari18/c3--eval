import Link from "next/link";
import React, { Profiler } from "react";

const Projects = ({ projectsData }) => {
  console.log(projectsData?.items);
  return (
    <div>
      
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          margin:"auto",
          width:"100%",
          justifyContent:"center",
          alignItems:"center"

        }}
      >
        {projectsData && projectsData?.items?.map((project) => (
          <Link href={`${project.html_url}`} key={project.id} target="_blank" style={{textDecoration:"none"}}>
            <div
              key={project.id}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                padding:"1rem",
                width: "400px",
                margin: "auto",
              }}
            >
              <div>
                <h2>{project.name}</h2>
                 <h4>{project.full_name}</h4>
              </div>
              <div style={{display:"flex",justifyContent:"space-between"}}>
                <div style={{display:"flex", gap:"1rem"}}>
                    <h3>star:{project.stargazers_count}</h3>
                    <h3>star:{project.forks_count}</h3>
                </div>
                <div>
                    <h3>{project.language}</h3>
                </div>

              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  let res = await fetch(
    `https://api.github.com/search/repositories?q=user:akashfulari18+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  let data = await res.json();

  return {
    props: {
      projectsData: data,
    },
  };
}

export default Projects;
