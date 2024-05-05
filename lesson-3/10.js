const regexp =
  /http(?: s ?): \/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/;
let videoLink = "https://youtu.be/c9z_3VhNefs?si=WNagR6uJDIHFeZ8X";
console.log(videoLink.match[regexp]);
