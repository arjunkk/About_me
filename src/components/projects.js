import './Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div>
            <div className="projects">
            <button><Link to='/Projects/NgoColab'>NgoColab</Link></button>
            <button><Link to='/Projects/WorkerEmployability'>WorkerEmployability</Link></button>
            <button><Link to='/Projects/PortfoliUsingReact'>PortfoliUsingReact</Link></button>
            <button><Link to='/Projects/WaterMonitoringSystem'>WaterMonitoringSystem</Link></button>
            </div>
        </div>
    )
}

export default Projects;