import SchoolIcon from '@mui/icons-material/School';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import Project1 from '../Assets/project1.jpg'
import Project2 from '../Assets/project2.png'
import Project3 from '../Assets/project3.png'
import Project4 from '../Assets/project4.png'
import Project5 from '../Assets/project5.png'
import Project6 from '../Assets/project6.jpg'



export const aboutData = {

    desc:  <p style={{ fontSize: 'large' }}>" I am a full-stack developer with 1 years of experience in developing websites using MERN Technologies (i.e MongoDB, Express JS, React JS, Node JS). I have a strong grip on the development of complex UI and manageable code structures. My goal is to help my clients in developing their websites using React according to their requirements."</p> ,
    desc2:  <p style={{ fontSize: 'large' }}>" I use React.js for frontend with manageable css framework( Material UI, BootStrap, Tailwind css, Ant Design) for state managment used( Recoil, Redux-toolkit ). I use Node.js + Express.js for backend with SQL (MySQL, Oracle, PostgreSQL) and No-SQL( MongoDB + Cassandra)."</p>

}

export const educationData = [

    {
        icon: SchoolIcon,
        session: "2015-2019",
        name: 'BS Software Engineering',
        desc: "lore asdfja sdfa sdfa sgja sgiag54k tiqeor tqoe asrnga  uasv as fv."
    },
]


export const DetailData = [
    {
        name: 'Experience',
        desc: "1 year's +",
    },
    {
        name: 'Projects',
        desc: "10 +",
    },
    {
        name: 'Degree',
        desc: "BS Software Engineering",
    }
]


export const ServiceData = [
    {
        x:-100,
        mt: "0px",
        icon: LaptopMacIcon,
        title: <p style={{ fontSize: 'large' }}>'Website Development'</p>,
        desc:  <p style={{ fontSize: 'large' }}>"I develope complete website for you with latest front-end and back-end technologies. Store your data in best manageable database. Where uploading, editing and getting data will very fast and easy" . </p>
    },
    {
        x:100,
        mt: "100px",
        icon: ColorLensIcon,
        title: <p style={{ fontSize: 'large' }}>'Website Designing'</p>,
        desc: <p style={{ fontSize: 'large' }}>'Get best visual layout and user interface of a website, including its appearance, navigation, responsive design, eye checking colors, animations and overall user experience.'</p>
    },
    {
        x:-100,
        mt: "0px",
        icon: MobileFriendlyIcon,
        title: <p style={{ fontSize: 'large' }}>'Web App Development'</p>,
        desc: <p style={{ fontSize: 'large' }}>'Get web-based applications with a dynamic and interactive experience that is similar to native applications. This will save your time and you get more fast responce.'</p>
    },
    {
        x:100,
        mt: "100px",
        icon: ViewQuiltIcon,
        title:<p style={{ fontSize: 'large' }}> 'UI/UX Designing'</p>,
        desc: <p style={{ fontSize: 'large' }}>'Get creative UI/UX design for visually appealing, easy-to-use, and enjoyable user experience for website as well as mobile that meets the needs and expectations of the target audience.'</p>
    },

]

export const projectData = [
    { img: `${Project1}`,y:-100 },
    { img: `${Project2}`,y:-100 },
    { img: `${Project3}`,y:-100 },
    { img: `${Project4}`,y:100 },
    { img: `${Project5}`,y:100 },
    { img: `${Project6}`,y:100 },

]

export const ExperienceDate = [
    {
        d:0.4,
        x:100,
        title: "Supervisor's Tech-hub",
        duration: '( 6 Months )',
        desc: 'Supervisor have a good team of developer. I done more than 8 projects in that time.'
    },
    {
        d:0.7,
        x:-100,
        title: "Alright Tech-hub",
        duration: '( 7 Months )',
        desc: 'Alright give me opportunity to work with them. That was my one of best coding experience because i learn lot of thing from there.'
    },
    {
        d:1,
        x:100,
        title: "MZ Code Lab",
        duration: '( 1 Year )',
        desc: 'This is the company from where i started my coding journey. I learn from seniors in from that company.'
    },
    {
        d:1.4,
        x:-100,
        title: "MTech-Hub",
        duration: '( 6 month Internship )',
        desc: 'I started my coding from this company. Developer are working ther very help they was always tell me very thing without any hesitation.'
    },
]