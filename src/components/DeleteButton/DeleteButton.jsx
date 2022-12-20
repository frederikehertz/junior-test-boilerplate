import Clear from '@mui/icons-material/Clear';

import classes from './DeleteButton.module.css';

export const DeleteButton = ({handleDelete}) => {
    return (
        <button onClick={handleDelete} className={classes.button}>
            <Clear />
        </button>
    );  
};