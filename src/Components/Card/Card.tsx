import * as React from 'react';
import {useNavigate} from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import styles from './Card.module.css';

interface QuizData {
    question: string;
    options: string[];
    correctOption: number;
    points: number;
}

interface Props {
    data: QuizData;
    currentIndex: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
    allQuestion: number;
    currPoints: number;
    setCurrPoints: React.Dispatch<React.SetStateAction<number>>;
}

export default function QuestionCard({
    data,
    currentIndex,
    setCurrentIndex,
    allQuestion,
    currPoints,
    setCurrPoints,
}: Props) {
    const navigate = useNavigate();
    const [selectValue, setSelectValue] = React.useState<null | number>(null);

    const hasAnswered = selectValue !== null;
    const {correctOption, points} = data;
    const isLastQuestion = allQuestion === currentIndex + 1;

    const handleCheck = (index: number) => {
        setSelectValue(index);
        if (correctOption === index) setCurrPoints((prev) => prev + points);
    };
    const handleQuit = () => {
        navigate('/');
        setCurrPoints(0);
    };
    const handleNext = () => {
        setCurrentIndex((prev) => prev + 1);
        setSelectValue(null);
    };

    const handleFinish = () => {
        navigate('/result');
    };

    return (
        <>
            <Box sx={{minWidth: 275}}>
                <Card variant='outlined'>
                    <CardContent>
                        <div className={styles.header}>
                            <Typography
                                align='center'
                                variant='h5'
                                component='h4'
                            >
                                Question {currentIndex + 1}/{allQuestion}
                            </Typography>
                            <Typography
                                align='center'
                                variant='h5'
                                component='h4'
                            >
                                Points {currPoints}
                            </Typography>
                        </div>
                        <Typography color='text.secondary'>
                            Topic: React
                        </Typography>
                        <Typography sx={{mb: 1.5}} color='text.secondary'>
                            {data.question}
                        </Typography>
                        <div className={styles.options}>
                            {data.options.map((option, index) => (
                                <button
                                    key={option}
                                    onClick={() => handleCheck(index)}
                                    disabled={hasAnswered}
                                    className={`${
                                        hasAnswered
                                            ? index === correctOption
                                                ? styles.correct
                                                : styles.wrong
                                            : ''
                                    }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        <div className={styles.buttonGroup}>
                            <Button onClick={handleQuit} variant='contained'>
                                Quit
                            </Button>
                            {isLastQuestion ? (
                                <Button
                                    disabled={!hasAnswered}
                                    onClick={handleFinish}
                                    variant='contained'
                                    color='info'
                                >
                                    Finish
                                </Button>
                            ) : (
                                <Button
                                    disabled={!hasAnswered}
                                    onClick={handleNext}
                                    variant='outlined'
                                >
                                    Next
                                </Button>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
}
