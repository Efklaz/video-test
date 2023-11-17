import React, {RefObject} from 'react';
type Props = {
    video : RefObject<HTMLVideoElement>,
}
function UnVideo({video} : Props) {
    function toggle(e : React.MouseEvent<HTMLVideoElement>){
        if (e.currentTarget.paused) {
            e.currentTarget.play();
        } else {
            e.currentTarget.pause();
        }
    }
    return (
        <video ref={video}
               onClick={toggle}
               src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4">
        </video>
    );
};
export const Video = React.memo(UnVideo);