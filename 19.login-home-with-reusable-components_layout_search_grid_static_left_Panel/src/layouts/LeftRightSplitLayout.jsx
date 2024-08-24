/* eslint-disable react/prop-types */
import "./LeftRightSplitLayout.css";

const LeftRightSplitLayout = ({ left: Left, right: Right }) => {

  return (
    <div className="layout-container">
      <header className="header">Header</header>
      <div
        className="content"
      >
        <div
          className={`left-pane`}
        >
          <Left/>
        </div>
        <div
          className={`right-pane`}
        >
          <Right />
        </div>
      </div>
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default LeftRightSplitLayout;
