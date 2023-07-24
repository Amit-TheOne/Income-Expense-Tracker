import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import useStyles from "./styles";

const CustomizedSnackbar = ({ open, setOpen, action }) => {
    const classes = useStyles();

    const handleClose = (event, reason) => {
        if (reason === "clickaway") return;

        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <MuiAlert
                    severity={action === "add" ? "success" : "error"}
                    elevation={6}
                    variant="filled"
                    onClose={handleClose}
                >
                    {action === "add" ? "Transaction created successfully." : "Transaction deleted successfully."}
                </MuiAlert>
            </Snackbar>
        </div>
    );
};

export default CustomizedSnackbar;
