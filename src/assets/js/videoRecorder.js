const { _ } = require('core-js');

const recorderContainer = document.getElementById('jsRecordContainder');
const recordBtn = document.getElementById('jsRecordBtn');
const videoPreview = document.getElementById('jsVideoPreview');

let streamObject;
let videoRecorder;

const handleVideoData = (event) => {
    const { data: videoFile } = event;
    const link = document.createElement('a');
    link.href = URL.createObjectURL(videoFile);
    link.download = 'recorded.mp4';
    document.body.appendChild(link);
    link.click();
};

const startRecording = (stream) => {
    videoRecorder = new MediaRecorder(streamObject);
    videoRecorder.start();
    videoRecorder.addEventListener('dataavailable', handleVideoData);
    recordBtn.addEventListener('click', stopRecording);
};

const stopRecording = (stream) => {
    videoRecorder.stop();
    recordBtn.removeEventListener('click', stopRecording);
    recordBtn.addEventListener('click', getVideo);
    recordBtn.innerHTML = 'Start recoding';
};

const getVideo = async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: { width: 1280, hegiht: 760 },
        });
        videoPreview.srcObject = stream;
        videoPreview.muted = true;
        videoPreview.play();
        recordBtn.innerHTML = 'Stop recording';
        streamObject = stream;
        startRecording();
    } catch (error) {
        recordBtn.innerHTML = "😢 Can't record";
    } finally {
        recordBtn.removeEventListener('click', getVideo);
    }
};

function init() {
    recordBtn.addEventListener('click', getVideo);
}

if (recorderContainer) {
    init();
}
