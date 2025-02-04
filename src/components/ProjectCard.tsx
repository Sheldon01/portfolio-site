const ProjectCard = ({ title }: { title: string }) => {
    return (
      <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>
    );
  };
  
  export default ProjectCard;
  