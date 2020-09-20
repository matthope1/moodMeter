const MODEL_URL = '/models';

const moodApp = {};

moodApp.init = () => {
    // console.log("innit...");

    // const imageUpload;
    // $(".image-upload-form").on('submit', () => {

    //   const imageUpload = $('#image-upload');
    //   let faceDesc = await faceapi.detectAllFaces(input).withFaceLandmarks().withFaceDescriptors();
    // })

    console.log("inside init");
    const imageUpload = document.getElementById('imageUpload');

    Promise.all([
      faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
      faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
    ]).then(start)
    
    async function start() {
      console.log("does this happen");
      const container = document.createElement('div')
      container.style.position = 'relative'
      document.body.append(container)
    }
    
    $("#myFileUpload").change(function() {
      console.log("changed");
      const imgFile = document.getElementById('myFileUpload').files[0]
      // create an HTMLImageElement from a Blob
      const img = faceapi.bufferToImage(imgFile)
      document.getElementById('myImg').src = img.src;
    });

    async function uploadImage() {
      const imgFile = document.getElementById('myFileUpload').files[0]
      // create an HTMLImageElement from a Blob
      const img = await faceapi.bufferToImage(imgFile)
      document.getElementById('myImg').src = img.src
    }

    console.log("leaving init");
}

//doc ready

$(() => {
  
  // await faceapi.loadSsdMobilenetv1Model(MODEL_URL)
  // await faceapi.loadFaceLandmarkModel(MODEL_URL)
  // await faceapi.loadFaceRecognitionModel(MODEL_URL)
  console.log("document ready");

  moodApp.init();
})