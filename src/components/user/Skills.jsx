const Skills = () => (
    <div className="flex flex-wrap gap-2">
      {["React", "Node.js", "Python", "Tailwind", "MongoDB"].map((skill) => (
        <span key={skill} className="px-3 py-1 bg-gray-200 rounded-full text-sm">{skill}</span>
      ))}
    </div>
);
  export default Skills;