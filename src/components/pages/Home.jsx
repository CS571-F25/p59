import '@/css/Home.css';
import { Image } from 'react-bootstrap';


export default function Home (props) {
    //top router
    return <div>
            <h1>
                <Image className="logo" src="/p59/images/title-high-contrast.PNG" alt="Alana's Art Library"/>
            </h1>
            <h2><Image className="main-desc" src="/p59/images/main-desc.PNG" alt="Click above to see the work of a lifelong doodler (as well as diligent painter)." /></h2>
    </div>
}

//at least 3 pages, 5 components