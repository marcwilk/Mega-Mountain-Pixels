(function($) {
  "use strict";

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  navbarCollapse();
  $(window).scroll(navbarCollapse);

  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $('.navbar').addClass('d-none');
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $('.navbar').removeClass('d-none');
  })

  let data = [
    {
      name: "Crater Lake",
      location: "Aspen, CO",
      image: "img/portfolio/01-thumbnail.jpg",
      heartId: 0,
      id: "craterLake",
      modalId: "#portfolioModal1"
    },
    {
      name: "Emerald Lake",
      location: "Estes Park, CO",
      image: "img/portfolio/02-thumbnail.jpg",
      heartId: 1,
      id: "emeraldLake",
      modalId: "#portfolioModal2"
    },
    {
      name: "Crystal Mill",
      location: "Aspen, CO",
      image: "img/portfolio/03-thumbnail.jpg",
      heartId: 2,
      id: "crystalMill",
      modalId: "#portfolioModal3"
    },
    {
      name: "Silver Dollar Lake",
      location: "Idaho Sprigns, CO",
      image: "img/portfolio/04-thumbnail.jpg",
      heartId: 3,
      id: "silverDollarLake",
      modalId: "#portfolioModal4"
    },
    {
      name: "Chautauqua Park",
      location: "Boulder, CO",
      image: "img/portfolio/05-thumbnail.jpg",
      heartId: 4,
      id: "chautauquaPark",
      modalId: "#portfolioModal5"
    },
    {
      name: "Lake Isabelle",
      location: "Nederland, CO",
      image: "img/portfolio/06-thumbnail.jpg",
      heartId: 5,
      id: "lakeIsabelle",
      modalId: "#portfolioModal6"
    }
  ]

  for(let i=0; i<data.length; i++){
    let card =
      `<div class="col-md-4 col-sm-6 portfolio-item" id="${data[i].id}">
        <a class="portfolio-link" data-toggle="modal" href="${data[i].modalId}">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fas fa-plus fa-3x"></i>
            </div>
          </div>
        <img class="img-fluid viewSize" src="${data[i].image}" alt="">
          </a>
        <div class="portfolio-caption">
          <h4>${data[i].name}</h4>
            <p class="text-muted">${data[i].location}</p>
              <i class="far fa-heart favorite" id="${data[i].heartId}"></i>
        </div>
      </div>`
    $("#appendHere").append(card)

    $(`#${data[i].heartId}`).on("click", function(){
      if (!document.querySelector(`#favorite_${data[i].id}`)){
        let favoriteCard =
        `<div class="col-md-4 col-sm-6 portfolio-item" id="favorite_${data[i].id}">
          <a class="portfolio-link" data-toggle="modal" href="${data[i].modalId}">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
          <img class="img-fluid viewSize" src="${data[i].image}" alt="">
            </a>
          <div class="portfolio-caption">
            <h4>${data[i].name}</h4>
              <p class="text-muted">${data[i].location}</p>
                <i class="fas fa-heart favorite red" id="favorite_${data[i].heartId}"></i>
          </div>
        </div>`
      $("#pics").append(favoriteCard)
      localStorage.setItem("data", "favoriteCard")
    } else {
      event.target.classList.toggle("red")
      event.target.classList.toggle("far")
      event.target.classList.toggle("fas")
      localStorage.removeItem("data", "favoriteCard")
    }

      let pics = document.getElementById("pics")
      let favoriteHeart = document.getElementById(`favorite_${data[i].heartId}`)
      favoriteHeart.addEventListener("click", function(){
        let card = document.getElementById(`favorite_${data[i].id}`)
        pics.removeChild(card)
        let removeRed = document.getElementById(`${data[i].heartId}`)
        removeRed.classList.toggle("red")
        removeRed.classList.toggle("far")
        removeRed.classList.toggle("fas")
      })
    })
  }

  $(".favorite").on("click", function(e) {
    var target = $(event.target)
    target.toggleClass("red")
    target.toggleClass("far")
    target.toggleClass("fas")
  })

  // let hearts = document.getElementsByClassName("favorite")
  // let one = document.querySelector(".one")
  // let items = document.getElementsByClassName("portfolio-item")
  //   for(let i=0; i<hearts.length; i++){
  //     hearts[i].addEventListener("click", function(){
  //       let targetId = Number(event.target.id)
  //       console.log(targetId)
  //       if (event.target.className.includes("red")){
  //         favoritesList.appendChild(items[targetId])
  //         let favorites = JSON.parse(localStorage.getItem("favorites")) || {}
  //           if (favorites[items[targetId].id]){
  //             favorites[items[targetId].id] = !items[targetId].id
  //           } else {
  //             favorites[items[targetId].id] = true
  //           }
  //         localStorage.setItem("favorites", JSON.stringify(favorites))
  //     }
  //   })
  // }
  //   if (localStorage.favorites === "craterLake"){
  //     favoritesList.appendChild(firstPic)
  //     heart1.classList.toggle("red")
  //     heart1.classList.toggle("far")
  //     heart1.classList.toggle("fas")
  //   }
  // heart1.addEventListener("click", function(){
  //   if (heart1.className.includes("red")){
  //     favoritesList.appendChild(firstPic)
  //     localStorage.setItem("favorites", firstPic.id)
  //   }
  //   else{
  //     favoritesList.removeChild(firstPic)
  //     localStorage.removeItem("favorites", firstPic.id)
  //     one.appendChild(firstPic)
  //   }
  // })

  let form = document.getElementById("contactForm")
  form.addEventListener("submit", function(){
    event.preventDefault()
  })

})(jQuery);
