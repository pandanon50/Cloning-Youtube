import axios from 'axios';

const addCommentForm = document.getElementById('jsAddComment');
const commentList = document.getElementById('jsCommentList');
const commentNumber = document.getElementById('jsCommentNumber');

const increasNumber = () => {
    commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const addComment = (comment) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerHTML = comment;
    li.appendChild(span);
    commentList.prepend(li);
    increasNumber();
};

const sendComment = async (comment) => {
    const videoId = window.location.href.split('/videos/')[1];
    const response = await axios({
        url: `/api/${videoId}/comment`,
        method: 'POST',
        data: {
            comment,
        },
    });
    if (response.status === 200) {
        addCommnet(comment);
    }
};

const handleSubmit = (event) => {
    event.preventDefault();
    const commentInput = document.getElementById('jsAddCommentInput');
    const comment = commentInput.value;
    sendComment(comment);
    commentInput.value = '';
};

function init() {
    addCommentForm.addEventListener('submit', handleSubmit);
}

if (addCommentForm) {
    init();
}
