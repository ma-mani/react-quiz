import {useNavigate} from 'react-router-dom';

import {Button} from '@mui/material';

import styles from './Result.module.css';

type Question = {
    question: string;
    options: string[];
    correctOption: number;
    points: number;
};

type QuizData = {
    [key: string]: Question[];
};

interface Props {
    currPoints: number;
    quizData: QuizData;
    selectTopic: string;
    setCurrPoints: React.Dispatch<React.SetStateAction<number>>;
}

const ResultPage = ({
    currPoints,
    quizData,
    selectTopic,
    setCurrPoints,
}: Props) => {
    const allQuestionPoints = quizData[selectTopic].length * 10;
    const averagePoints = (currPoints / allQuestionPoints) * 100;
    const navigate = useNavigate();
    const handleRestart = () => {
        navigate('/');
        setCurrPoints(0);
    };
    let emoji;
    if (averagePoints === 100) emoji = '🥇';
    if (averagePoints >= 80 && averagePoints < 100) emoji = '🎉';
    if (averagePoints >= 50 && averagePoints < 80) emoji = '🙃';
    if (averagePoints >= 0 && averagePoints < 50) emoji = '🤨';
    if (averagePoints === 0) emoji = '🤦‍♂️';
    return (
        <section className={styles.result}>
            <span>
                You scored {currPoints}/{allQuestionPoints} points, which
                corresponds to {Math.ceil(averagePoints)}%
            </span>
            <span>Here is your Emoji</span>
            <span>{emoji}</span>
            <Button onClick={handleRestart} variant='contained' color='info'>
                Restart
            </Button>
        </section>
    );
};

export default ResultPage;
