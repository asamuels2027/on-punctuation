document.querySelector('input').addEventListener('input', function(){
  document.querySelector('.text2').scrollLeft = this.value;
})