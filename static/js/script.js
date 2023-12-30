// if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//   // Request camera access
//   navigator.mediaDevices.getUserMedia({ video:true})
//       .then(function (stream) {
//           // Camera access granted
//           console.log('Camera access granted');
          
//           document.getElementById('webcam').innerHTML = `<img id="video" src= ${stream} width="400" />`
          
//           // Stop the stream to release the camera
//           stream.getTracks().forEach(track => track.stop());
//       })
//       .catch(function (error) {
//         // Camera access denied or other error
//         if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
//             console.error('Camera access denied: ', error);
            
//             // Add your code to run when camera access is denied
//         } else if (error.name === 'NotFoundError' || error.name === 'DevicesNotFoundError') {
//             console.error('No camera devices found: ', error);
            
//             // Add your code to handle the case where no camera devices are found
//         } else if (error.name === 'NotReadableError' || error.name === 'TrackStartError') {
//             console.error('Could not start video source: ', error);
//             console.log(error.name)
//             // Add your code to handle other errors related to starting the video source
//         } else {
//             console.error('Error accessing camera: ', error);
            
//             // Add your code to handle other errors
//         }
//     });
// } else {
// console.error('getUserMedia is not supported in this browser');
// }