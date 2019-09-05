
// Your web app's Firebase configuration
	var firebaseConfig = {
		apiKey: "AIzaSyAZQ7Odt1FsOliz4aeyRpIkFLRky7tlonw",
		authDomain: "travel-30c94.firebaseapp.com",
		databaseURL: "https://travel-30c94.firebaseio.com",
		projectId: "travel-30c94",
		storageBucket: "",
		messagingSenderId: "565871746098",
		appId: "1:565871746098:web:6cedba33f6a11e96c7702b"
	};
// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
	const db = firebase.firestore();

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

