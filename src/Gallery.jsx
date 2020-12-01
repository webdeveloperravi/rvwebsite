import { useState } from 'react';
import Card from './Card';
import Netflixdata from './Netflixdata';
import Amazondata from './Amazondata';
import Vootdata from './Vootdata';
import Moviesdata from './Moviesdata';
const Gallery = () => {
    var [Series_val, update_series_val] = useState("Netflix");


    const get_result = (value) => {

        update_series_val(value);


    }

    const showdata = () => {
        console.log(Series_val);
        if (Series_val === "Netflix") {
            return (
                Netflixdata.map((values, indexes) => {
                    return (
                        <Card key={indexes} img_src={values.img_src} heading={values.heading} description={values.description} link={values.link} />
                    )
                })
            );

        } else if (Series_val === "Amazon") {
            return (
                Amazondata.map((values, indexes) => {
                    return (
                        <Card key={indexes} img_src={values.img_src} heading={values.heading} description={values.description} link={values.link} />
                    )
                })
            );

        } else if (Series_val === "voot") {
            return (
                Vootdata.map((values, indexes) => {
                    return (
                        <Card key={indexes} img_src={values.img_src} heading={values.heading} description={values.description} link={values.link} />
                    )
                })
            );

        } else {
            return (
                Moviesdata.map((values, indexes) => {
                    return (
                        <Card key={indexes} img_src={values.img_src} heading={values.heading} description={values.description} link={values.link} />
                    )
                })
            );

        }



    }






    return (
        <>
            <section id='gallery'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className=''>
                                <div className='main_heading_bx my-3'>
                                    <h2 class="text-center text-uppercase">Gallery</h2>
                                    <hr class="w-25 mx-auto" />

                                </div>
                                <div className='gallery_navbar'>
                                    <ul className='d-flex '>
                                        <li onClick={() => {
                                            return get_result('Netflix')
                                        }}>
                                            Netflix
                                        </li>

                                        <li onClick={() => {
                                            return get_result('Amazon')
                                        }}>
                                            amazon prime
                                        </li>

                                        <li onClick={() => {
                                            return get_result('voot')
                                        }}>
                                            voot select
                                        </li>

                                        <li onClick={() => {
                                            return get_result('movie')
                                        }}>
                                            Movies
                                        </li>

                                        <div className='gallery_navbar_slide'></div>
                                    </ul>
                                </div>

                                <div className='gallery_show_results d-flex flex-wrap justify-content-center'>
                                    {
                                        showdata()
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Gallery;