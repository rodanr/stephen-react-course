/* eslint-disable react/prop-types */
import className from "classnames";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...options // this captures other handlers like onMouse... if we become explicit we have to write every each that may be used or not so we allow user to pass whatever handler that is valid and we just use it here
}) => {
  const classes = className(
    options.className, //...options captures className so we need to handle it here
    "flex items-center px-3 py-1.5 border ",
    {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-600 bg-yellow-600 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      // "bg-white": outline,
      "text-blue": outline && primary,
      "text-gray": outline && secondary,
      "text-green": outline && success,
      "text-yellow": outline && warning,
      "text-red": outline && danger,
    }
  );

  return (
    <button {...options} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1)
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
  },
};

export default Button;
