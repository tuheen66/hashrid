const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const currentlyActive = document.querySelector('.accordion-header.active');
    if (currentlyActive && currentlyActive !== header) {
      currentlyActive.classList.remove('active');
      currentlyActive.nextElementSibling.style.maxHeight = null;
      currentlyActive.nextElementSibling.classList.remove('open');
    }

    header.classList.toggle('active');
    const body = header.nextElementSibling;

    if (header.classList.contains('active')) {
      body.style.maxHeight = body.scrollHeight + "px";
      body.classList.add('open');
    } else {
      body.style.maxHeight = null;
      body.classList.remove('open');
    }
  });
});
