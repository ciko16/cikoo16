<div
  key={index}
  className="flex flex-col items-center p-4 bg-gray-100 rounded-xl shadow hover:shadow-md transition relative"
  onMouseEnter={() => setHoveredSkill(index)}
  onMouseLeave={() => setHoveredSkill(null)}
>
  {/* ICON */}
  <div className="w-12 h-12 mb-2 flex justify-center items-center">
    <img
      src={hoveredSkill === index ? skill.hoverIcon : skill.icon}
      alt={skill.name}
      className="object-contain max-w-full max-h-full"
    />
  </div>

  {/* TEXT */}
  <span className="text-sm font-medium text-center text-gray-800">
    {skill.name}
  </span>
</div>
