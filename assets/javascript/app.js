//-------------------------------------------------------------
//  EmailJS send function
//-------------------------------------------------------------

// parameters: service_id, template_id, template_parameters

var myform = $("form#editor-container");
myform.submit(function(event){
  event.preventDefault();

  var params = myform.serializeArray().reduce(function(obj, item) {
     obj[item.name] = item.value;
     return obj;
  }, {});

  // Change to your service ID, or keep using the default service
  var service_id = "gmail";

  var template_id = "blank";
  myform.find("button").text("Sending...");
  emailjs.send(service_id,template_id,params)
    .then(function(){ 
       alert("Sent!");
       myform.find("button").text("Send");
     }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });
  return false;
});

//-------------------------------------------------------------
//  Quill editor
//-------------------------------------------------------------

var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
];

var quill = new Quill('#editor-container', {
  modules: {
    toolbar: toolbarOptions
  },
  placeholder: 'Compose an email here...',
  theme: 'snow'  // or 'bubble'
});