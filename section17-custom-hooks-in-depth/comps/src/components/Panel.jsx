/* eslint-disable react/prop-types */
import classNames from "classnames";

const Panel = ({ children, className, ...options }) => {
  const finalClassNames = classNames(
    "w-48 border rounded p-3 shadow bg-white",
    className
  );
  return (
    <div {...options} className={finalClassNames}>
      {children}
    </div>
  );
};

export default Panel;
