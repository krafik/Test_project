'use strict';
let rBlockTwoAndTree = document.querySelector('.r-bl_media'),
  rBlockTwo = document.querySelector('.med-md-hide_two'),
  rBlockTree = document.querySelector('.med-md-hide_tree');

window.addEventListener('DOMContentLoaded', function () {
  let width = window.innerWidth;
  console.log(width);
  if (width <= 991) {
    rBlockTwoAndTree.classList.add('hide');
    rBlockTwo.classList.remove('hide');
    rBlockTree.classList.remove('hide');
  } else if (width > 768) {
    rBlockTwoAndTree.classList.remove('hide');
    rBlockTree.classList.add('hide');
    rBlockTwo.classList.add('hide');
  }
});

window.addEventListener('resize', function () {
  let width = window.innerWidth;
  console.log(width);
  if (width <= 991) {
    rBlockTwoAndTree.classList.add('hide');
    rBlockTwo.classList.remove('hide');
    rBlockTree.classList.remove('hide');
  } else if (width > 768) {
    rBlockTwoAndTree.classList.remove('hide');
    rBlockTwo.classList.add('hide');
    rBlockTree.classList.add('hide');
  }
});

console.log(rBlockTwoAndTree);