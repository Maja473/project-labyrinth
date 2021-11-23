import React from 'react'
import { Lottie } from 'react-lottie'
import animationData from './animations/loading-double'
import { useSelector } from 'react-redux'
//import { ui } from 'reducers/ui'



const LoadingIndicator = () => {
    const loading = useSelector((store)  => store.ui.loading)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
      };
      
    return (
        <div>
        {loading && <Lottie options={defaultOptions} height={400} width={400} />}
        </div>

    )

}

export default LoadingIndicator