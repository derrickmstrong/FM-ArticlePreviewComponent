const share = document.querySelector(".share");
const shareSocial = document.querySelector(".social-mobile");

share.addEventListener("click", () => {
    if (shareSocial.style.visibility === 'visible') {
      shareSocial.style.visibility = 'hidden';
      share.style.backgroundColor = 'hsl(210, 46%, 95%)';
    } else {
      shareSocial.style.display = 'grid';
      shareSocial.style.visibility = 'visible';
      share.style.backgroundColor = 'hsl(217, 19%, 35%)';
    }
})