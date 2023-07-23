// document.getElementById('home')!.addEventListener('scroll', (event) => {
//   const { scrollHeight, scrollTop, clientHeight } = event.target as HTMLInputElement;
//   console.log(event.target);

//   if (Math.abs(scrollHeight - clientHeight - scrollTop) < 1) {
//     console.log('scrolled');
//   }
// });

window.onscroll = function (ev) {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // Change scroll bottom to scroll top
  }
};
