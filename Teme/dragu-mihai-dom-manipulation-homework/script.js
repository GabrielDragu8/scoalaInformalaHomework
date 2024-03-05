document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('cardForm');
  let confirmationBanner = document.getElementById('confirmationBanner');
  let errorBanner = document.getElementById('errorBanner');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
  
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;


    if (firstName.trim() === '') {
      document.getElementById('firstName').classList.add('error');
    } else {
      document.getElementById('firstName').classList.remove('error');
    }

    if (lastName.trim() === '') {
      document.getElementById('lastName').classList.add('error');
    } else {
      document.getElementById('lastName').classList.remove('error');
    }
    
    const genderMale = document.getElementById('male');
    const genderFemale = document.getElementById('female');

    let gender = null;

    if (genderMale.checked) {
      gender = genderMale.value;
    } else if (genderFemale.checked) {
      gender = genderFemale.value;
    } else {
      gender = 'No option was chosen.'
    }
    
    const message = document.getElementById('clientMessage').value;

    if (message.trim() === '') {
      console.log('There is no message from the user.');
    } 
      
    if (lastName.trim() !== '' && firstName.trim() !== '') {
      console.log(`First Name: ${firstName}`);
      console.log(`Last Name: ${lastName}`);
      console.log(`Gender: ${gender}`);
      console.log(`Message: ${message}`);
      confirmationBanner.style.opacity = 1;
      confirmationText.innerHTML = `Thank you for contacting us, ${firstName}`;
      errorBanner.style.opacity = 0;
      
    } else {
      confirmationBanner.style.opacity = 0;
      errorBanner.style.opacity = 1;
      errorBanner.innerHTML = 'Please complete at least the first name and last name fields.';
      //alert('Please complete at least the first and last name fields to see the answers in the console.');
    }
  });
});



