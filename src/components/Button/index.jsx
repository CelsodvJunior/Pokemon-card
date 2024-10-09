import { StyleButton } from "./style";

import PropTypes from "prop-types";

const Button = ({ children }) => {
  return <StyleButton>{children}</StyleButton>;
};

Button.propTypes = {
  children: PropTypes.string,
};
export default Button;
