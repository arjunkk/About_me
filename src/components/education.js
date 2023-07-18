import './Education.css';

const Education = () => {
    
    const educationsytle = {
        margin:'100px',
    }

    const hscmystyle = {
        margin:'80px',
    }
    const sscmystyle = {
        margin:'130px',
    }
    const engmystyle = {
        marginleft:'30px',
    }

    return (
        <div>
            <div style={educationsytle}>
                <div style={engmystyle}>
                    <h3>B.Tech Computer Science and Engineering with Specialization in Internet of Things.</h3>
                    <h4>Vellore Institute of Technology, Vellore, Tamilnadu. CGPA: 8.23 </h4>
                </div>
                <div style={hscmystyle}>
                    <h3>Higher Secondary Certification (12<sup>th</sup>)</h3>
                    <h4>Yashwantrao Mohite College, Pune, Maharashtra. Percentage: 88.92 </h4>
                </div>
                <div style={sscmystyle}>
                    <h3>Secondary School Certification (10<sup>th</sup>)</h3>
                    <h4>Baliraja Vidhyalaya Kerwadi, Parbhani, Maharashtra. Percentage:89.00 </h4>
                </div>
            </div>
        </div>
    )
}

export default Education;