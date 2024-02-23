import * as React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import AppLayout from './Components/AppLayout/AppLayout';
import quizData from './data/quizData';
import HomePage from './Pages/Home/Home';
import QuizPage from './Pages/Quiz/Quiz';
import ResultPage from './Pages/Result/Result';

function App() {
    const topics = Object.keys(quizData);

    const [selectTopic, setSelectTopic] = React.useState('React');

    const [currPoints, setCurrPoints] = React.useState<number>(0);

    const router = createBrowserRouter([
        {
            element: <AppLayout />,
            children: [
                {
                    path: '/',
                    element: (
                        <HomePage
                            setSelectTopic={setSelectTopic}
                            topics={topics}
                        ></HomePage>
                    ),
                },
                {
                    path: '/quiz',
                    element: (
                        <QuizPage
                            selectTopic={selectTopic}
                            currPoints={currPoints}
                            setCurrPoints={setCurrPoints}
                            quizData={quizData}
                        />
                    ),
                },
                {
                    path: '/result',
                    element: (
                        <ResultPage
                            selectTopic={selectTopic}
                            quizData={quizData}
                            currPoints={currPoints}
                            setCurrPoints={setCurrPoints}
                        />
                    ),
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
