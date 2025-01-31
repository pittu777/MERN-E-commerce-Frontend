// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';
import MobileStepper from '@mui/material/MobileStepper';
import { Box, useTheme } from '@mui/material';
import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const ProductBanner = ({images}) => {

    const theme=useTheme()

    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };

  return (
    <>
    {/* <AutoPlaySwipeableViews style={{overflow:"hidden"}} width={'100%'} height={'100%'} axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents >
        {
        images.map((image,index) => (
        <div key={index} style={{width:"100%",height:'100%'}}>
            {
            Math.abs(activeStep - index) <= 2 
                ?
                <Box component="img" sx={{width:'100%',objectFit:"contain"}} src={image} alt={'Banner Image'} />
                :
                    null
            }
        </div>
        ))
        }
    </AutoPlaySwipeableViews> */}
     <Slider {...settings} style={{ overflow: "hidden", width: "100%", height: "100%" }}>
            {images.map((image, index) => (
                <Box key={index} component="img" sx={{ width: '100%', objectFit: "contain" }} src={image} alt="Banner Image" />
            ))}
        </Slider>
    <div style={{alignSelf:'center'}}>
        <MobileStepper steps={maxSteps} position="static" activeStep={activeStep}/>
    </div>
    </>
  )
}
