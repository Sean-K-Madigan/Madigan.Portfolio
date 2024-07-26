import Project from "./Project";

const projects = [
  {
    title : "Personal Blog", 
    liveLink : "https://sean-k-madigan.github.io/Personal-Blog/", 
    src : "/images/Blog.Madigan-PersonalBlog.png", 
    repoLink : "https://github.com/Sean-K-Madigan/Personal-Blog", 
    description : "Demonstrates the use of local storage and a polished multi-page UI allowing for theme selection."
  },

  {
    title : "In or Out", 
    liveLink : "https://in-or-out-6n4t.onrender.com/", 
    src : "/images/InOrOut.png", 
    repoLink : "https://github.com/Sean-K-Madigan/In-Or-Out", 
    description : "Demonstrates my group's ability to build a full stack application following the MVC structure."
  },

  {
    title : "National Park Explorer", 
    liveLink : "https://sean-k-madigan.github.io/NationalParkExplorer/", 
    src : "/images/NationalParkExplorer.png", 
    repoLink : "https://github.com/Sean-K-Madigan/NationalParkExplorer", 
    description : "Demonstrates a group project I participated in employing API fetches and dynamically populating data into HTML based on user input."
  },

  {
    title : "Weather Dashboard", 
    liveLink : "https://sean-k-madigan.github.io/WeatherBoard.Madigan/", 
    src : "/images/WeatherBoard.png", 
    repoLink : "https://github.com/Sean-K-Madigan/WeatherBoard.Madigan", 
    description : "Demonstrates my ability to use API fetches and dynamically populate data into HTML based on user input."
  },

  {
    title : "Employee Tracker", 
    liveLink : "https://sean-k-madigan.github.io/JavaScript-Payroll-Tracker/", 
    src : "/images/EmployeeTracker.png", 
    repoLink : "https://github.com/Sean-K-Madigan/JavaScript-Payroll-Tracker", 
    description : "Demonstrates my ability to use JavaScript functions to track employees and their pay."
  },

  {
    title : "Madigan Wedding", 
    liveLink : "https://sean-k-madigan.github.io/Madigan-Wedding-Page/", 
    src : "/images/MadiganWeddingPage.png", 
    repoLink : "https://github.com/Sean-K-Madigan/Madigan-Wedding-Page", 
    description : "I built a website for my wedding to provide information to guests."
  },

  // Need 3 more projects ensure this does not mess with layout
]

export default function ProjectList() {
  return (
    <>
      <section id="projects">

        <h2 className="section-title projects">My Projects</h2>

        <div className="work-links">

        {projects.map((project, i) => (
          <Project key={i}  projObject={project}/>
        ))}

        </div>
      </section>
    </>
  );
}