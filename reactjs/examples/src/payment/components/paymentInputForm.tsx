import { Box, TextField, Typography, Grid, Checkbox, FormControlLabel, Divider, Button, CircularProgress, Dialog, DialogTitle, DialogContent } from "@mui/material";
import { useForm, FormProvider } from 'react-hook-form';
import * as Yup from 'yup';
import { Payment } from "../types";
import { yupResolver } from '@hookform/resolvers/yup';
import { InputField } from "./InputField";
import React from "react";

const validationSchema = Yup.object().shape({
    email: Yup.string().max(250, "Maximum of 250 characters allowed").email("Please enter a valid email").required("Please enter your email"),
    credit: Yup.number().typeError("Credit card number must be number").required("Please enter your credit card number").max(9999999999999999, "Please enter all 16 number").min(1000000000000000, "Please enter all 16 number"),
    expireDay: Yup.string().required("Please enter your credit card expire day").max(5, "Invalid"),
    cvv: Yup.number().typeError("Card Verification Value must be number").required("Please enter Card Verification Value").min(100, "3 number only").max(999, "3 number only")
});
export default function PaymentInputForm() {
    // const { onSubmit } = props;
    const [open, setOpen] = React.useState(false);
    const methods = useForm<Payment>({
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const {
        handleSubmit,
        formState: { isSubmitting }
    } = methods;

    return (
        <>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <Box sx={{ borderRadius: '90%', ml: 5 }}>
                        <Box sx={{ fontWeight: 'bold', mb: 4, mt: 3, textAlign: 'left', fontSize: "26px" }}>Payment Details</Box>
                        <Typography textAlign={"left"} variant="subtitle2" gutterBottom>
                            Email address
                        </Typography>
                        <InputField name="email" />
                        <Typography textAlign={"left"} variant="subtitle2" gutterBottom>
                            Credit Card Number
                        </Typography>
                        <InputField name="credit" placeholder="x x x x      x x x x      x x x x       x x x x" />
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <Typography textAlign={"left"} variant="subtitle2" gutterBottom>
                                    Expire Day
                                </Typography>
                                <InputField name="expireDay" placeholder="mm/yy" />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography textAlign={"left"} variant="subtitle2" gutterBottom>
                                    CVV
                                </Typography>
                                <InputField name="cvv" placeholder="x x x" />
                            </Grid>
                        </Grid>
                        <Box sx={{ textAlign: 'left' }}>
                            <FormControlLabel control={<Checkbox sx={{ textAlign: "left" }} />} label="I have a promote" />
                        </Box>
                        <Grid container>
                            <Grid item xs={6}>
                                <Box sx={{ mb: 1, mt: 1, textAlign: 'left' }}>Subtotal</Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{ fontWeight: 'bold', mt: 1, textAlign: 'right' }}>$96</Box>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={6}>
                                <Box sx={{ mb: 1, mt: 1, textAlign: 'left' }}>Platform Fee</Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{ fontWeight: 'bold', mt: 1, textAlign: 'right' }}>$4</Box>
                            </Grid>
                        </Grid>
                        <Divider sx={{ mt: 2, mb: 2 }} />
                        <Grid container>
                            <Grid item xs={6}>
                                <Box sx={{ mb: 1, mt: 1, textAlign: 'left' }}>Total amount</Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{ fontWeight: 'bold', mt: 1, textAlign: 'right' }}>$4</Box>
                            </Grid>
                        </Grid>
                        <Button variant='contained' size='large' fullWidth sx={{ mb: 2 }} type="submit">Make Payment&nbsp;

                            {isSubmitting && <CircularProgress color="inherit" size={20} />}</Button>
                    </Box>
                </form>
            </FormProvider>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Your payment is success full"}
                </DialogTitle>
                <DialogContent></DialogContent>
            </Dialog>
        </>
    )
}

