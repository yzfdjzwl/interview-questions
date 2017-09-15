var btn = document.getElementById('upload'); // input type file
btn.onClick = function() {
  var formData = new FormData();
  var xhr = new XMLHttpRequest();
  var uploadFiles = document.getElementById('upload-file');
  if (!uploadFiles.files[0]) {
    return;
  }
  formData.append('files', uploadFiles.files[0]);
  xhr.open('post', 'url', true);
  xhr.onprogress = function(event) {
    console.log((event.loaded * 100) / event.total);
  };
  xhr.send(formatData);
  xhr.onreadychange = function() {
    if (xhr.readyStatus == 4) {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
        console.log('Done');
      } else {
        console.log('Error');
      }
    }
  };
};
