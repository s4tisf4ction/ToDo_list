const TabList = ({ isShowCompleted, displayCompleted }) => {
  return (
    <div className="nav nav-tabs">
      <span
        onClick={() => displayCompleted(true)}
        className={isShowCompleted ? "nav-link active" : "nav-link"}
        style={{cursor: "pointer"}}
      >
        Выполнено
      </span>
      <span
        onClick={() => displayCompleted(false)}
        className={isShowCompleted ? "nav-link" : "nav-link active"}
        style={{cursor: "pointer"}}
      >
        В процессе выполнения
      </span>
    </div>
  );
};

export default TabList;
