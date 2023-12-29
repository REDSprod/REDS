function tagImage() {
    var fileInput = document.getElementById('file-input');
    var file = fileInput.files[0];

    if (file) {
        var formData = new FormData();
        formData.append('file', file);

        fetch('/tag', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            var tagResult = document.getElementById('tag-result');
            tagResult.innerText = 'Tag suggéré : ' + data.tag;
        })
        .catch(error => console.error('Erreur lors de la requête :', error));
    } else {
        alert('Veuillez sélectionner une image avant de cliquer sur "Tag".');
    }
}
