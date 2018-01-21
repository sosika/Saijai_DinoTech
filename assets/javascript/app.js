$(document).ready(function(){
    $("#campaignForm").submit(function(event){
      event.preventDefault();
      $.ajax({
        url: "https://www.enformed.io/vusp2xzf",
        method: "POST",
        dataType: "json",
        accepts: "application/json",
        data: $("#campaignForm").serialize(),
        success: function(){
          console.log("Your form was successfully received!");
          // Show a success message here...
        },
        error: function(){
          console.log("Failure. Try again.");
          // Show an error message here...
        }
      });
    });
  });




// $(document).ready(function(){
// $('#ticketTable').submit(function(e){
//   var subject = $('#subjectInput').val();
//   var message = $('#messageInput').val();
//   console.log('subject', subject);
//   console.log('message', message);

//   if (!subject.val() || !message.val() ) {
//     alertify.error('Please check your entries')
//   } else {
//     $.ajax({
//     url: "https://formspree.io/hewjang@gmail.com", 
//     method: "POST",
//     data: $('#ticketTable').serialize(),
//     dataType: "json"
//     });
//     e.preventDefault();
//     $(this).get(0).reset()
//     // alertify.success('Message sent')
  
// });
// });




//-------------------------------------------------------------
//  EmailJS send function
//-------------------------------------------------------------

// parameters: service_id, template_id, template_parameters

// var myform = $("form#ticketTable");
// myform.submit(function(event){
//   event.preventDefault();

//   var delta = quill.getContents();
//   console.log('content', delta);

//   var params = myform.serializeArray().reduce(function(obj, item) {
//      obj[item.name] = item.value;
//      return obj;
//   }, {});
//   console.log('testing', params);

//   // Change to your service ID, or keep using the default service
//   var service_id = "default_service";
//   var template_id = "blank";

//   myform.find("button").text("Sending...");
//   emailjs.send(service_id,template_id,params)
//     .then(function(){ 
//        alert("Sent!");
//        myform.find("button").text("Send");
//      }, function(err) {
//        alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
//        myform.find("button").text("Send");
//     });
//   return false;
// });
//-------------------------------------------------------------
//  Quill editor
//-------------------------------------------------------------

// var toolbarOptions = [
//   ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
//   ['blockquote', 'code-block'],

//   [{ 'header': 1 }, { 'header': 2 }],               // custom button values
//   [{ 'list': 'ordered'}, { 'list': 'bullet' }],
//   [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
//   [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
//   [{ 'direction': 'rtl' }],                         // text direction

//   [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
//   [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

//   [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
//   [{ 'font': [] }],
//   [{ 'align': [] }],

//   ['clean']                                         // remove formatting button
// ];

// var quill = new Quill('#editor-container', {
//   modules: {
//     toolbar: toolbarOptions
//   },
//   placeholder: 'Compose an email here...',
//   theme: 'snow'  // or 'bubble'
// });

