class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

  let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    console.log(pos);
    let calcHeight = 
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);


    if (pos > 100){
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none"
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue







function login(){

  var name = document.getElementById('name').value
  var email = document.getElementById('email').value;
  var senha = document.getElementById('passaword').value;

  if( name == "julio" && email == "joaonave10@gmail.com" && senha =="8585"  ){
      
    location.href = "menu-adm.html";
  }else{
    alert('Usuário ou senha incorretos');
  }

}


//input file

const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');

selectImage.addEventListener('click', function(){
  inputFile.click();
})

inputFile.addEventListener('change', function(){
  const image = this.files[0]
 
  if(image.size < 2000000){
    
  
  const reader = new FileReader();
  reader.onload = () => {
    const allImg = imgArea.querySelectorAll ('img');
    allImg.forEach(item=> item.remove());
    const imgUrl = reader.result;
    const img = document.createElement('img');
    img.src = imgUrl;
    imgArea.appendChild(img);
    imgArea.classList.add('active');
    imgArea.dataset.img = image.name
    }
  reader.readAsDataURL(image);
  }else{
    alert('Imagem size more than 2MB');
  }
})

//input file
