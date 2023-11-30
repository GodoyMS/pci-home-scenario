import PropTypes from "prop-types";
import "./Button.css";
const Button = (props: any): JSX.Element => {
  const { label, disabled, handleClick } = props;

  return (
    <button
      className={"button-container "}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
