import "./Button.scss";
import Icon from "./Icon";

const Button = ({
  text = "Default",
  variant = "default",
  disableShadow = false,
  disabled = false,
  startIcon,
  endIcon,
  size = "sm",
  color = "default",
  hover = "",
}) => {
  let Shadows = disableShadow ? "disableShadow" : "";

  let Disabled = disabled ? "disabled" : "";

  let Color = (color) => {
    if (color === "primary") return "ColorPrimary";
    if (color === "secondary") return "ColorSecondary";
    if (color === "danger") return "ColorDanger";
    else return "ColorDefault";
  };

  return (
    <button
      className={
        "Button " +
        variant +
        " " +
        Shadows +
        " " +
        Disabled +
        " " +
        size +
        " " +
        Color(color) +
        " " +
        hover
      }
    >
      {startIcon && <Icon className="Icon" iconName={startIcon}></Icon>}
      {text}
      {endIcon && <Icon className="Icon" iconName={endIcon}></Icon>}
    </button>
  );
};

export default Button;
