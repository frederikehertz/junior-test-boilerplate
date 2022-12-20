import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';

import classes from './LikeButton.module.css';

export const LikeButton = () => {
    const [like, setLike] = useState(false);

    const handleClick = () => setLike(prev => !prev);
    
    const icon = <i>{like ? <FavoriteIcon /> : <FavoriteBorderIcon />}</i>;

    return (
        <button onClick={handleClick} className={classes.button}>
            {icon}
        </button>
    );  
};