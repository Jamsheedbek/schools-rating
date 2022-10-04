import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectLabels({
  options = [],
  about = "About select",
  selectValue,
  label = "Label",
}) {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    selectValue = value;
  };

  React.useEffect(() => {
    setValue(options[0].value);
  }, []);

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={value}
          label={label}
          onChange={handleChange}
          defaultValue={options[0].value}
        >
          {options &&
            options.map((option, i) => (
              <MenuItem key={i} value={option.value}>
                {option.name}
              </MenuItem>
            ))}
        </Select>
        <FormHelperText>{about}</FormHelperText>
      </FormControl>
    </div>
  );
}
