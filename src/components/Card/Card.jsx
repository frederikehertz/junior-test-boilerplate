import { LikeButton } from '../LikeButton';
import { DeleteButton } from '../DeleteButton';

import classes from './Card.module.css';

const dateFormat = (date) => {
    const dateSTD = new Date(date);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timezone: 'UTC',
    };

    return dateSTD.toLocaleString('ru', options).slice(0, -1).concat('ода');
}

export const Card = ({cardData, handleDelete}) => {
    const handleDeleteWrapper = () => handleDelete(cardData.id);

    const imageSection = <img className={classes.cardImage} src={cardData.url} alt='' />

    const textSection = <div className={classes.cardTextBox}>
        <a className={classes.date}>
            {dateFormat(cardData.date)}
        </a>
        <div>
            <LikeButton />
            <DeleteButton handleDelete={handleDeleteWrapper}/>
        </div>
    </div>

    return (
        <div className={classes.card}>
            {imageSection}
            {textSection}
        </div>
    );
};  