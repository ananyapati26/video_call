import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
     const {roomId} =  useParams();
    const videocall = async(element) => {
        const appID = 1769699232;
        const serverSecret = "8f8386c55cacb3e65aab3b152c42dc49";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret, 
            roomId, 
            Date.now().toString() ,  
            "Enter your name");
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                name: "Copy Link",
                url: `https://video-call-chi-lime.vercel.app/room/${roomId}`,
                },
            ],
            scenario: {
             mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showLayoutButton: true,
            whiteboardConfig:{
                showAddImageButton:true,
                showCreateAndCloseButton:true
            }

       });
    };

  return (
    <div
    
    ref={videocall}
    style={{ width: '100vw', height: '100vh' }}
  ></div>
  )
}

export default Room