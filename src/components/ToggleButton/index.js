import { ToggleButtonStyle } from "./styles";

const ToggleButton = ({ selected, onClick, label }) => {
  return (
    <ToggleButtonStyle selected={selected} onClick={onClick}>
      {label}
    </ToggleButtonStyle>
  );
};

export default ToggleButton;
