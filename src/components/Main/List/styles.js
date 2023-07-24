import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    avatarIncome: {
        color: '#fff',
        backgroundColor: blue[600],
    },
    avatarExpense: {
        color: theme.palette.getContrastText("#ff0000"),
        // backgroundColor: red[500],
        backgroundColor: "#ff0000",
    },
    list: {
        maxHeight: '150px',
        overflow: 'auto',
    },
}));