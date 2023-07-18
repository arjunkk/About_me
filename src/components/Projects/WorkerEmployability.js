import './WorkerEmployability.css';
import WorkerEmployabilityDownload from './WorkerEmployabilityDownload';
const WorkerEmployability = ()=>{
    return(
        <div className="WorkerEmployability">
            <h4>Description of Project:</h4>
            <h5>The project deals with the problem "searching for work" of daily wage workers and unorganized workers.
                It's the platform where workers can search for work and the Employers can hire workers.</h5>
            <h5>Project includes the platform for worker to enhance their skills by enrolling themselves in courses offered by intitutes and industries.</h5> 

            <h4>Technologies used:</h4><h5>HTML, CSS, JavaScript, NodeJs, Express Framework</h5>
            <footer><WorkerEmployabilityDownload/></footer>
        </div>
    )
}

export default WorkerEmployability;