import '@/css/Home.css';
import { Image } from 'react-bootstrap';
import { imgUrl } from '@/utils/cloudinary';


export default function Home (props) {
    //top router
    return <div>
            <h1>
                <Image className="logo" src={imgUrl("title-high-contrast_xaffre")} alt="Alana's Art Library"/>
            </h1>
            <h2><Image className="main-desc" src={imgUrl("main-desc_kpzoqz")} alt="Click above to see the work of a lifelong doodler (as well as diligent painter)." /></h2>
    </div>
}
