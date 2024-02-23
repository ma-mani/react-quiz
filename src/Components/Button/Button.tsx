import Button from '@mui/material/Button';

import styles from './Button.module.css';

interface Props {
    children: React.ReactNode;
    onClick?: () => void;
}

export default function ButtonCategory({children, onClick}: Props) {
    return (
        <Button
            onClick={onClick}
            className={styles.category}
            variant='outlined'
        >
            {children}
        </Button>
    );
}
