import Image from 'next/image'
import { Inter } from '@next/font/google'
import Projects from './projects'
import Experience from './experience'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const tech=["node" , "js" ,"html" , "CSS" , "Redux" ,"Next.js" , "MongoDB"]
export default function Home({profileData,projectsData}) {
  // console.log(profileData)
  return (
    <>
      
      <div style={{display:"flex", gap:"1rem"}}>
        <div style={{width:"30%" }}>
            <div style={{boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",textAlign:"center",marginBottom:"1rem",padding:"1rem"}}>
                <Image src={profileData.avatar_url} width={100} height={100} style={{borderRadius:"50%"}} alt=""></Image>
                <h3>{profileData.name}</h3>
                <h6>{profileData.login}</h6>
                <h3>{profileData.bio}</h3>
                <div style={{display:"flex",justifyContent:"center",gap:"1rem",}}>
                  <button>resume</button>
                  <button>follow</button>
                </div>
                
            
            </div>

          <div style={{boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",display:"flex" ,flexWrap:"wrap",gap:"1rem" ,padding:"1rem"}}>
            
            {tech.map(((t,i)=>(
              <h4 style={{backgroundColor:"gray",color:"white",padding:"0.5rem 1rem",margin:"0",borderRadius:"0.4rem"}} key={t.i}>{t}</h4>
            )))}
            

          </div>

            <div style={{boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",marginTop:"1rem" ,padding:"1rem"}}>
              Education:

              <Experience/>

            </div>
        
        </div>
        <div style={{width:"70%"}}>
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
        </div>
      </div>
    </>
  )
}
export async function getStaticProps(){

  let res = await fetch(`https://api.github.com/users/akashfulari18`)
  let data = await res.json()

  let res1 = await fetch(
    `https://api.github.com/search/repositories?q=user:akashfulari18+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  let data1 = await res1.json();

  return{
    props:{
      profileData : data,
      projectsData: data1
    }
  }
}


