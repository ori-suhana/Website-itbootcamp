document.getElementById('readMoreBtn').addEventListener('click', function(event) {
    event.preventDefault();
    var moreText = document.getElementById('moreText');
    if (moreText.style.display === 'none') {
        moreText.style.display = 'block';
        this.style.display = 'none';    
    }
});