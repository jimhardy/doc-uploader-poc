import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';

class Uploader extends Component {
    state = { data: [] }

    handleChange = (e) => {
        console.log(e);
        this.setState = {
            data: e
        }
    }

    handleUpload = (data) => {
        data.preventDefault();
        // const files = Array.from(data.target.files);
        console.log(data);
        // const formData = new FormData();
        // for (const file of data.files) {
        //     formData.append('myFiles' , file);
        // }

        // fetch('https://localhost:3000/upload' , {
        //     method: 'post',
        //     body: formData
        // } ).catch(err => {
        //     console.error(err);
        // });
    }
    render() { 
        return ( 
            <div>
                <form>

                <label htmlFor="multi">
                <FontAwesomeIcon icon={faImages} color="#6d84b4" size="10x" />
                </label>
                <input type="file" id="multi" multiple onChange={this.handleChange}/>
                <button onClick={this.handleUpload}>Submit</button>
                </form>
            </div>
         );
    }
}
 
export default Uploader;