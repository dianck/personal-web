import React from "react";

type Skill = {
  name: string;
  level: number;
};

const SkillBar: React.FC<Skill> = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between text-sm font-medium text-gray-800 mb-1">
      <span>{name}</span>
      <span>{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-purple-600 h-2 rounded-full"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

export default function MySkills() {
  const skillsLeft: Skill[] = [
    { name: "Web Design", level: 65 },
    { name: "JavaScript", level: 80 },
    { name: "Next Js", level: 60 },
    { name: "PHP", level: 60 },
  ];

  const skillsRight: Skill[] = [
    { name: "HTML/CSS", level: 95 },
    { name: "React JS", level: 70 },
    { name: "Bootstrap", level: 99 },
    { name: "Laravel", level: 90 },
  ];

  return (
    <section className="w-[120%] mx-[calc(-10%)] md:mx-auto md:w-full md:max-w-7xl flex flex-col md:flex-row items-center justify-center p-6 gap-[10px]">
      <div className="w-full bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col items-center">
        {/* Header + Underline Centered */}
        <div className="w-full mb-8 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-bold text-black text-center">
            My Skills
          </h2>
          <div className="h-[5px] w-[75px] bg-indigo-600 mt-2"></div>
        </div>

        {/* Grid Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div>
            {skillsLeft.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
          <div>
            {skillsRight.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
