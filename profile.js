const imageFile = document.querySelector('.imageFile');
const studentId = document.querySelector('.studentId');
const message = document.querySelector('.message');

imageFile.addEventListener('change', (event) => {
    const file = event.target.files[0]; 
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = function(e) {
            studentId.src = e.target.result; 
            studentId.style.display = 'block';
            message.innerText = 'We will reach out shortly'; 
        };

        reader.readAsDataURL(file);
    } else {
        imagePreview.style.display = 'none';
    }
});