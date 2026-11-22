function showPage(pageID, clickedButton){const pages = document.querySelectorAll('.page');

pages.forEach(page => page.classList.remove('active'));

const buttons = document.querySelectorAll('.nav-btn', 'intro-btn');
buttons.forEach(btn => btn.classList.remove('active'));

document.getElementById(pageID).classList.add('active');
if(clickedButton){clickedButton.classList.add('active')};

  window.scrollTo({ top: 0, behavior: 'smooth' });
                                         
}

function showNext(){

  
  const current = document.querySelector('.page.active');


  
  const pageNumber = Number(current.dataset.page);


  const selector = `[data-page="${pageNumber + 1}"]`;


  const nextPage = document.querySelector(
  `[data-page="${pageNumber + 1}"]`
);


  if (nextPage) {
  showPage(nextPage.id, null);

}
}


