import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import styles from './Rating.module.scss'

export default function RatingSize() {
    return (
        <div className={`${styles.rating}`}>
            <Stack spacing={1}>
                <Rating name="size-large" defaultValue={2} size="large" />
            </Stack>
        </div>
    );
}