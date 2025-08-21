let form = document.getElementById("contactUs");

form.addEventListener("submit", openMail);

function openMail(e) {
    e.preventDefault();

    let name = document.getElementById("name");
    let subject = document.getElementById("subject");
    let body = document.getElementById("body");

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    let link = encodeURI(`mailto:talangaff@gmail.com?subject=${name.value} - ${subject.value}&body=${body.value}`);

    console.log(link);

    window.location.href = link;
}