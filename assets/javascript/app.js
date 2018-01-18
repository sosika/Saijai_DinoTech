//-------------------------------------------------------------
//  EmailJS send function
//-------------------------------------------------------------

// parameters: service_id, template_id, template_parameters

//emailjs.send("gmail","template_t2wQnU95",{name: "DinoTech", notes: "Check this out!"})
$('#btn').on('click', function(e){
  e.preventDefault();
  console.log('name', $('#name').val());
  // if ($('#name').val() !== '' && $('#message').val() !== '') {
    emailjs.send("gmail","blank",{Subject: $('#emailSubject').val(), To_email: $('#emailSubject').val(), notes: $('#emailBody').val()})
    .then(function(response) {
      console.log('response', response);
       console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
    }, function(err) {
       console.log("FAILED. error=", err);
    });
  // } else {
  //   console.log('one of the fields is not filled out!');
  //   // show a popup or error modal that tells the user to fill out the form properly.
  // }
});