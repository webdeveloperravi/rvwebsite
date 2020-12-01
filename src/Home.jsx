import Common from "./Common";
import img_man from "./images/man.png";
const Home = () => {
    return (
        <>
            <Common
                name="welcome to Home page."
                img_src={img_man}
                btn_content="get started"
            />
        </>
    );
}

export default Home;