const button = document.querySelector('.btn'),
      sidebar = document.querySelector('.sidebar');

button.addEventListener('click', function() {
  button.classList.toggle('btnc');
  sidebar.classList.toggle('side');
})