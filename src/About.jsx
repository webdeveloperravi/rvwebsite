import Common from './Common';
import cover from "./images/cover.jpg";
const About = () => {


    return (
        <>
            <Common
                name="welcome to About page."
                img_src={cover}
                btn_content="know more"
            />
        </>
    );
}
export default About;