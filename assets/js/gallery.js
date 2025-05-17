

// window.onscroll = function () { galleryScroll() };

// function galleryScroll() {
//     debugger;
//     alert(isScrolledToId('gallery_content'));
//     // var testDivFromTop = document.getElementById("gallery_content").offsetTop;
//     // var pageHeight = window.innerHeight;
//     // if (document.body.scrollTop > testDivFromTop - pageHeight || document.documentElement.scrollTop > testDivFromTop - pageHeight) {
//     //     alert(1);
//     //     var fs = require('fs');
//     //     var files = fs.readdirSync('assets/img/gallery/');
//     // }
// }

function readFilesAndFolders() {
    var fs = require('fs');
    var files = fs.readdirSync('assets/img/gallery/');
    debugger;
}
