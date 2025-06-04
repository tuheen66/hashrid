const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const isOpen = header.classList.contains('active');

    // Close all
    document.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('active'));
    document.querySelectorAll('.accordion-body').forEach(body => {
      body.style.maxHeight = null;
      body.classList.remove('open');
    });

    // Open if not already open
    if (!isOpen) {
      header.classList.add('active');
      const body = header.nextElementSibling;
      body.classList.add('open');

      // Trigger height animation
      setTimeout(() => {
        body.style.maxHeight = body.scrollHeight + 'px';
      }, 10);
    }
  });
});
