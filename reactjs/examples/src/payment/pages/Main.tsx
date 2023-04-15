import { Container, Grid } from "@mui/material";
import PaymentInputForm from "../components/paymentInputForm";
import PaymentAdversityForm from "../components/paymentAdversityForm";

export default function Payment() {
    return (
        <Container maxWidth="lg" sx={{ backgroundColor: 'white', borderRadius: '12px' }}>
            <Grid container spacing={3}>
                <Grid item xs={7}>
                    <PaymentInputForm></PaymentInputForm>
                </Grid>
                <Grid item xs={5}>
                    <PaymentAdversityForm></PaymentAdversityForm>
                </Grid>
            </Grid>
        </Container>
    );
}