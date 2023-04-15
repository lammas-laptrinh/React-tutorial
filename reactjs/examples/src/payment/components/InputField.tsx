import { TextField } from '@mui/material';
import { Controller  } from 'react-hook-form';

interface InputFieldProps {
    name: any;
    type?: string;
    placeholder?: string;
}

export function InputField(props: InputFieldProps) {
    const { name, type,  placeholder } = props;

    return (
        <Controller
            name={name}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <>
                    <TextField
                        sx={{ mb: 2 }}
                        onChange={(value) => onChange(value)}
                        fullWidth
                        type={type}
                        error={!!error}
                        helperText={error?.message}
                        placeholder={placeholder}
                    />
                </>
            )}
        />
    );
}
