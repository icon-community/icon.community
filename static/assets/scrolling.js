window.addEventListener('scroll', function() {
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    
    var scrollbarhor = document.getElementById('scrollbarhor');
    scrollbarhor.style.width = (scrollPercentage * 100) + '%';
  });
  