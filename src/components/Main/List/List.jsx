import React, { useState, useContext } from "react";
import {
    List as MUIList,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    ListItemSecondaryAction,
    IconButton,
    Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";

import useStyles from "./styles";
import { ExpenseTrackerContext } from "../../../context/context";
import CustomizedSnackbar from "../../Snackbar/Snackbar";

const List = () => {
    const classes = useStyles();

    const { transactions, deleteTransaction } = useContext(
        ExpenseTrackerContext
    );

    const [open, setOpen] = useState(false);

    return (
        <>
            <CustomizedSnackbar open={open} setOpen={setOpen} action="delete" />
            <MUIList dense={false} className={classes.list}>
                {transactions.map((transaction) => (
                    <Slide
                        direction="down"
                        in
                        mountOnEnter
                        unmountOnExit
                        key={transaction.id}
                    >
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar
                                    className={
                                        transaction.type === "Income"
                                            ? classes.avatarIncome
                                            : classes.avatarExpense
                                    }
                                >
                                    <MoneyOff />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={transaction.category}
                                secondary={`$${transaction.amount} - ${transaction.date}`}
                            />
                            <ListItemSecondaryAction>
                                <IconButton
                                    edge="end"
                                    aria-label="delete"
                                    onClick={() => {
                                        deleteTransaction(transaction.id);
                                        setOpen(true);
                                    }}
                                >
                                    <Delete />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Slide>
                ))}
            </MUIList>
        </>
    );
};

export default List;
