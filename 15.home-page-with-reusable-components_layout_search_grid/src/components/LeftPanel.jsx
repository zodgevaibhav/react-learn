import { Link } from 'react-router-dom';
import './LeftPanel.css';

// eslint-disable-next-line react/prop-types
export const LeftPanel = ({ items }) => {
    if (!Array.isArray(items)) {
        <>
            <h1>Error</h1>
        </>
    }

    return (
        <div className="sidebar">
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <Link to={item.route}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
