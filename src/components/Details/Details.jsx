import React from "react";
import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    Divider,
} from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement} from "chart.js/auto";
import "chart.js/auto";

import useStyles from "./styles";
import useTransactions from "../../useTransactions";

// ChartJS.register(ArcElement);

const Details = ({ title }) => {
    const classes = useStyles();
    const { total, chartData } = useTransactions(title);

    return (
        <Card className={title === "Income" ? classes.income : classes.expense}>
            <CardHeader title={title} />
            <Divider variant="middle" />
            <CardContent>
                <Typography variant="h5">${total}</Typography>
                <Doughnut data={chartData} />
            </CardContent>
        </Card>
    );
};

export default Details;
