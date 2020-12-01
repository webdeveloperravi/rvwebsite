
import book_side from "./images/side.jpg";
import book_back from "./images/back.jpg";

const Common = (props) => {

    return (
        <>
            <section id='header' className=''>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className='col-md-6 order-2 order-md-1'>
                                    <div style={{ paddingTop: "100px" }}>
                                        <h1>increase your Knowledges with <br /><strong className='text-uppercase text-primary'>Ravi kumar</strong></h1>
                                        <h3>{props.name}</h3>
                                        <a href='#' className='btn btn-md text-uppercase get_started_btn my-3'>{props.btn_content}</a>
                                    </div>

                                </div>
                                <div className='col-md-6 order-1 order-md-2'>
                                    <div className='pt-4 d-flex justify-content-center align-items-center'>
                                        <div id='book_container'>
                                            <div id='book'>
                                                <img alt='main_img' src={props.img_src} className='img-fluid book_cover' />
                                                <img alt='main_img' src={book_side} className='img-fluid book_side' />
                                                <img alt='main_img' src={book_back} className='img-fluid book_back' />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
export default Common;
