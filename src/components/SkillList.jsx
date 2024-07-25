import { Skill} from './Skill';

const skills = [
  {label: 'HTML', width: 90},
  {label: 'CSS', width: 80},
  {label: 'JavaScript', width: 70},
  {label: 'Node.js', width: 60},
  {label: 'Express.js', width: 50},
  {label: 'React', width: 40},
  {label: 'MongoDB', width: 30},
  {label: 'MySQL', width: 20},
  {label: 'Python', width: 10},
  {label: 'Java', width: 5},
];

export function SkillList() {
  return (
    <>
    <div id="skills-container">

      <div className="spectrum">
          <div className="label lower">Room For Improvement ...</div>
          <div className="label upper">Got It Down!!!</div>
      </div>

      <div id="skills-list">

        {skills.map((skill, i) => (
          <Skill key={i} label={skill.label} width={skill.width} />
        ))}

      </div>
    </div>
    </>
  )
}

