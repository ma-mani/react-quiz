import {useState} from 'react';

import QuestionCard from '../../Components/Card/Card';

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
    quizData: QuizData;
    currPoints: number;
    setCurrPoints: React.Dispatch<React.SetStateAction<number>>;
    selectTopic: string;
}

const QuizPage = ({
    quizData,
    currPoints,
    setCurrPoints,
    selectTopic,
}: Props) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const allQuestion = quizData[selectTopic]?.length;
    const currTopic = quizData[selectTopic];

    return (
        <>
            {}
            <QuestionCard
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                data={currTopic[currentIndex]}
                allQuestion={allQuestion}
                currPoints={currPoints}
                setCurrPoints={setCurrPoints}
            />
        </>
    );
};

export default QuizPage;
