import {useNavigate} from 'react-router-dom';

import ButtonCategory from '../../Components/Button/Button';
import styles from './Home.module.css';

interface Props {
    topics: string[];
    setSelectTopic: React.Dispatch<React.SetStateAction<string>>;
}

const HomePage = ({topics, setSelectTopic}: Props) => {
    const navigate = useNavigate();
    const handleCategory = (topic: string) => {
        setSelectTopic(topic);
        navigate('/quiz');
    };

    return (
        <section className={styles.home}>
            <h2>Are you ready to Challenge yourself?</h2>
            <h3>Select your Favorite Topic</h3>

            {topics.map((topic, i) => (
                <ButtonCategory onClick={() => handleCategory(topic)} key={i}>
                    {topic}
                </ButtonCategory>
            ))}
        </section>
    );
};

export default HomePage;
