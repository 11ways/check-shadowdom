document.getElementById('copyLink').addEventListener('click', function (e) {
    e.preventDefault();
    let copyText = document.getElementById('bookmarkletCode');
    copyText.select();
    navigator.clipboard.writeText(copyText.value).then(
        function () {
            alert('Copying to clipboard was successful!');
        },
        function (err) {
            alert('Could not copy text: ', err);
        },
    );
});
