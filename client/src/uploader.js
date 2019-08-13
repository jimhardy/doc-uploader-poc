import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';

class Uploader extends Component {
    state = { 
        files: null,
         }

    handleChange = (e) => {
       if(e.target.files[0]) {
           const files  = e.target.files[0] ;
           console.log(e.target.files[0]);
           this.setState(() => ({files}));
       }
    }

    handleUpload = (e) => {
        e.preventDefault();
        const files = Array.from(this.state.files);
        console.log(files);
        const formData = new FormData();
        for (const file of files) {
            formData.append('myFiles' , file);
        }

        fetch('https://localhost:8000/upload' , {
            method: 'post',
            body: formData
        } ).catch(err => {
            console.error(err);
        });
    }
    render() { 
        return ( 
            <div>
                <form >

                <label htmlFor="multi">
                <FontAwesomeIcon icon={faImages} color="#6d84b4" size="10x" />
                </label>
                <input name="files" value="" type="file" id="multi" multiple onChange={this.handleChange}/>
                <button onClick={this.handleUpload}>Submit</button>
                </form>
            </div>
         );
    }
}
 
export default Uploader;