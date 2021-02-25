import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../../css/app.css'
import Layout from './Layout'

function Example() {
    return (
        <Layout >
            <div className="row justify-content-center mt-5 mb-5">
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
