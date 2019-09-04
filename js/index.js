// jquery scroll down chevron

$(function() {

    $(".fa-chevron-down").fadeIn(1000);

    $(window).on('scroll', function() {
        $(".fa-chevron-down").fadeOut(500);

    });
});

// saving data to database

const form = document.querySelector('form');
const html = '<div class="response">Thank you, your email was added to our database.</div>';
const container = document.querySelector('.email-sign');

form.addEventListener('submit', e => {
    e.preventDefault();
    const now = new Date();
    const email = {
        title: form.text.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    };
    db.collection('emails').add(email).then(() => {
        container.innerHTML += html;
        const response = document.querySelector('.response');
        setTimeout(() => response.innerText = '', 4000);
    }).catch(err => {
        console.log(err);
    });
    form.reset();
});

