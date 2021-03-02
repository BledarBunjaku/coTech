import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../../css/app.css'
import Layout from './Layout'
import Modal from 'react-modal';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Example() {


    const [form, setForm] = useState(false);

    const setSignUpForm = () => {
        setForm(!form)
    }


    return (
        <Layout click={setSignUpForm} >
            <div className="justify-content-center row mt-5 mb-5">

                <button onClick={setSignUpForm}>sdsdsd</button>

                <div>
                    {/* <Modal isOpen={false}>

                    </Modal> */}

                    {

                        form ? <form >
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form> : null}
                </div>
                <div className="col-md-12 text-center">
                    <button className='btn-outline-success btn-lg'>Sign In</button>
                </div>
            </div>
        </Layout>

    );
}

export default Example;

if (document.getElementById('root')) {
    ReactDOM.render(<Example />, document.getElementById('root'));
}
