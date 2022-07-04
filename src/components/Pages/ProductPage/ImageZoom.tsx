import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

export default function ImageZoom({image}: {image:string}) {
    return (
        <InnerImageZoom
            src={image}
            zoomSrc={image}
            fullscreenOnMobile={true}
            zoomPreload={true}
            width={300}
            hasSpacer={true}
        />
    );
}