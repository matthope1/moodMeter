
const MODEL_URL = '/models';


const moodApp = {};

moodApp.init = () => {
    console.log("innit...");

    const imageUpload;
    $(".image-upload-form").on('submit', () => {

      const imageUpload = $('#image-upload');
      let faceDesc = await faceapi.detectAllFaces(input).withFaceLandmarks().withFaceDescriptors();
    })
}

//doc ready

$(() => {
  
  await faceapi.loadSsdMobilenetv1Model(MODEL_URL)
  await faceapi.loadFaceLandmarkModel(MODEL_URL)
  await faceapi.loadFaceRecognitionModel(MODEL_URL)


  moodApp.init();
})