import { memo } from "react";

const Card = ({ header = "", children = [] }) => {
  const Children = () =>
    children.map((element, index) => (
      <div className="column" key={index}>
        {element}
      </div>
    ));

  return (
    <div
      className="card"
      style={{ minWidth: "300px", maxHeight: "fit-content" }}
    >
      <header className="card-header">
        <p className="card-header-title">{header}</p>
      </header>
      <div className="card-content">
        <div className="columns is-desktop">
          <Children />
        </div>
      </div>
      <div className="content"></div>
    </div>
  );
};

export default memo(Card);
