// src/components/FormField.tsx
import { TextField, FormControl, InputLabel, Select, MenuItem, FormLabel, RadioGroup, FormControlLabel, Radio, FormHelperText } from '@mui/material';

export function FormField({ field, register, errors }: any) {
  const { name, fieldType, required, listOfValues1 = [], minLength, maxLength } = field;

  const error = errors[name]?.message;

  switch (fieldType) {
    case 'TEXT':
      return (
        <TextField
          fullWidth
          label={name}
          margin="normal"
          {...register(name, {
            required: required ? `${name} is required` : false,
            minLength: minLength ? { value: minLength, message: `Min ${minLength} characters` } : undefined,
            maxLength: maxLength ? { value: maxLength, message: `Max ${maxLength} characters` } : undefined
          })}
          error={!!error}
          helperText={error}
        />
      );
    case 'LIST':
      return (
        <FormControl fullWidth margin="normal" error={!!error}>
          <InputLabel>{name}</InputLabel>
          <Select
            defaultValue=""
            {...register(name, { required: required ? `${name} is required` : false })}
          >
            {listOfValues1.map((val: string, idx: number) => (
              <MenuItem key={idx} value={val}>{val}</MenuItem>
            ))}
          </Select>
          <FormHelperText>{error}</FormHelperText>
        </FormControl>
      );
    case 'RADIO':
      return (
        <FormControl component="fieldset" margin="normal" error={!!error}>
          <FormLabel component="legend">{name}</FormLabel>
          <RadioGroup row {...register(name, { required: required ? `${name} is required` : false })}>
            {listOfValues1.map((val: string, idx: number) => (
              <FormControlLabel key={idx} value={val} control={<Radio />} label={val} />
            ))}
          </RadioGroup>
          <FormHelperText>{error}</FormHelperText>
        </FormControl>
      );
    default:
      return null;
  }
}
