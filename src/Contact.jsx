import { useState } from "react";

const Contact = () => {

    let [live_val, update_val] = useState({
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        message: ""
    });
    const get_val = (event) => {
        var input_value = event.target.value;
        var input_name = event.target.name;

        update_val((prev_data) => {
            return {
                ...prev_data,
                [input_name]: input_value
            }

        });
    }

    const submit_fun = () => {
        alert(`first name is ${live_val.first_name} . last name is ${live_val.last_name}. email id is ${live_val.email}. mobile no is ${live_val.mobile}. Message is ${live_val.message}`);
    }
    return (
        <>
            <section id='contact_sec'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-8 mx-auto'>
                            <div className='main_heading_bx mt-3'>
                                <h2 class="text-center text-uppercase">Contact us</h2>
                                <hr class="w-25 mx-auto" />

                            </div>
                            <div className='contact_bx'>
                                <form onSubmit={submit_fun}>
                                    <div class="mb-3">
                                        <label for="exampleFormControlI nput1" class="form-label">First Name</label>
                                        <input name='first_name' type="text" class="form-control" placeholder="Enter First Name" onChange={get_val} required />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlI nput1" class="form-label">Last Name</label>
                                        <input name='last_name' type="text" class="form-control" placeholder="Enter Last Name" onChange={get_val} required />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlI nput1" class="form-label">Email ID</label>
                                        <input name='email' type="email" class="form-control" placeholder="Enter Email ID" onChange={get_val} required />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlI nput1" class="form-label">Mobile No.</label>
                                        <input name='mobile' type="mobile" class="form-control" placeholder="Enter Mobile no." onChange={get_val} required />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Send Queries</label>
                                        <textarea name='message' class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Message' onChange={get_val} required></textarea>
                                    </div>
                                    <button className='btn btn-sm btn-secondary pl-4 pr-4' type='submit'>Send</button>
                                </form>


                            </div>


                        </div>

                    </div>

                </div>



            </section>


        </>
    );
}

export default Contact;