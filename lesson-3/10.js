const regexp =
  /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/;

let videoLink =
  "https://www.youtube.com/watch?v=c9z_3VhNefs&list=RDc9z_3VhNefs&start_radio=1&ab_channel=Monkey8DMusic";

console.log(videoLink.match(regexp)[0]);
console.log(videoLink.match(regexp)[1]);
console.log(videoLink.match(regexp)[2]);
console.log(videoLink.match(regexp)[3]);
console.log(videoLink.match(regexp)[4]);
console.log(videoLink.match(regexp)[5]);
console.log(videoLink.match(regexp)[6]);

document.write(`<iframe
   width="560"
   height="315"
  src="https://www.youtube.com/embed/${
    videoLink.match(regexp)[1]
  }?si=44Vl_HhmzuX1JFPa"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>`);
