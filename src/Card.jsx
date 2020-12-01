
const Card = (props) => {
    return (
        <>
            <div id='series_card'>
                <div>
                    <img src={props.img_src} alt='Series card' className='img-fluid ' />
                    <div className='content_bx'>
                        <h2>{props.heading}</h2>
                        <p>{props.description}</p>
                        <a className='btn btn-md btn-secondary' href={props.link}>watch now</a>

                    </div>

                </div>

            </div>

        </>
    );
}
export default Card;