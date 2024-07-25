import Project from "./Project";

const projects = [
  {title :, liveLink :, src :, repoLink :, description :},
]

export function ProjectList() {
  return (
    <>
      <section id="projects">

        <h2 class="section-title projects">My Projects</h2>

        <div class="work-links">

        {projects.map((project, i) => (
          <Project key={i}  projObject={project}/>
        ))}

        </div>
      </section>
    </>
  );
}