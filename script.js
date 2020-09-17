
const MODEL_URL = '/models';


const moodApp = {};

moodApp.init = () => {
    console.log("innit...");

    const imageUpload;
    $(".image-upload-form").on('submit', () => {

        imageUpload = $('#image-upload');
    })
}

//doc ready

$(() => {
  await faceapi.loadSsdMobilenetv1Model(MODEL_URL)
  await faceapi.loadFaceLandmarkModel(MODEL_URL)
  await faceapi.loadFaceRecognitionModel(MODEL_URL)
  moodApp.init();
})