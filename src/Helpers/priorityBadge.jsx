export const priorityBadge = (priority) => {
  switch (priority) {
    case "Normal":
      return <span className="badge rounded-pill text-bg-success">Normal</span>;
    case "Important":
      return (
        <span className="badge rounded-pill text-bg-primary">Important</span>
      );
    case "Urgent":
      return <span className="badge rounded-pill text-bg-danger">Urgent</span>;
    default:
      break;
  }
};

export const classNamePriority = (priority) => {
  switch (priority) {
    case "Normal":
      return "normalPriority priority-card";
    case "Important":
      return "importantPriority priority-card";
    case "Urgent":
      return "urgentPriority priority-card";
    default:
      break;
  }
};
