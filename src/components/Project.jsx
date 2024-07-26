export default function Project({projObject}) {
  return (
    <>
      <article className="project" id="proj">

        <h3 className="projects-subtitle">{projObject.title}</h3>

        <a href={projObject.liveLink} target="_blank"><img className="screenshot" alt="Application Screenshot" src={projObject.src} width='375px'/></a>

        <br/>

        <a className="repo-link" href={projObject.repoLink} target="_blank">▸ Access Repository ◂</a>

        <p className="description">{projObject.description}</p>

      </article>
    </>
  )
}