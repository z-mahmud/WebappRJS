import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


// function Arrow() {
//     return (
//         <div>
//             <button>Arrow button</button>
//         </div>
//     )
// }

const AlertMe=(a)=>{
    alert (a);
}

const Arrow=()=> {
    return (
        <div>
            <button onClick={AlertMe.bind(this,"Clicked")} className="btn btn-danger">Arrow button</button>
        </div>
    );
}


export default Arrow
