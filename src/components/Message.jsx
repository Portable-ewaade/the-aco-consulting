// eslint-disable-next-line
/* eslint-disable */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


import lottieSuccess from './checkgreen.json'
import lottieError from './checkred.json'

import LottiePlayer from './Lottie'

const Message = ({ title, message, status, lottieSize, loop, buttonText, setBg }) => {


    useEffect(() => {

    }, []);

   
    return (
        <>

            <div style={ {  backgroundColor: '#fff' ? '#fff' : '', padding: '1.5rem 2.5rem'  ? '1.5rem 2.5rem' : '', borderRadius: '1.5rem' ? '1.5rem' : '' } }>
                <div className="mrgt2 text-center">
                    <LottiePlayer 
                    lottieData={status && status === 'success' ? lottieSuccess : lottieError} 
                    h={lottieSize ? lottieSize : 80} w={lottieSize ? lottieSize : 80} 
                    loop={loop ? loop : false} />
                </div>

                <div className="ui-text-center mrgt3 mrgb3  text-center">
                    <h1 className=" fs-20 font-weight-bold mt-3">{ title }</h1>
                    <p className=" fs-15 font-weight-bold mb-3 ui-line-height">{ message ? message : 'No Message' }</p>

                    <Link to="/" className="btn btn-block md font-weight-bold cs-aco-red  fs-16  font-mattermedium onwhite"> { buttonText ? buttonText : 'Home' } </Link>
                </div>
            </div>
        </>
    )

}

export default Message;
