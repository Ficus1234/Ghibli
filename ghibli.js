function loadGhibli () {

  let theSources = [
    {
      "name": "Castle in the Sky",
      "source": "https://www.intofilm.org/intofilm-production/scaledcropped/970x546https%3A/s3-eu-west-1.amazonaws.com/images.cdn.filmclub.org/film__3267-laputa-castle-in-the-sky--hi_res-aa16eb37.jpg/film__3267-laputa-castle-in-the-sky--hi_res-aa16eb37.jpg"
    },
    {
      "name": "Grave of the Fireflies",
      "source": "https://www.denofgeek.com/wp-content/uploads/2018/04/grave-main.jpg?fit=1200%2C675"
    },
    {
      "name": "My Neighbor Totoro",
      "source": "https://cdn.vox-cdn.com/thumbor/L7RY15nCjPfcm8hE_TsD5jO1Sws=/0x0:1920x1080/1200x800/filters:focal(736x383:1042x689)/cdn.vox-cdn.com/uploads/chorus_image/image/55049323/totoro.0.jpg"
    },
    {
      "name": "Kiki's Delivery Service",
      "source": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/11178/production/_100780007_kiki_hires_3.jpg"
    },
    {
      "name": "Only Yesterday",
      "source": "https://lwlies.com/wp-content/uploads/2020/01/only-yesterday.jpg"
    },
    {
      "name": "Porco Rosso",
      "source": "https://cdn.vox-cdn.com/thumbor/6GwKh67nAyT5SuO0FQdXiBrb1Ss=/0x0:1920x1038/1200x675/filters:focal(700x227:1006x533)/cdn.vox-cdn.com/uploads/chorus_image/image/66874527/Porco_Rosso_963064296_large.0.jpg"
    },
    {
      "name": "Pom Poko",
      "source": "https://isthismoviesuitable.com/wp-content/uploads/2013/05/Pom-Poko-featured-image.jpg"
    },
    {
      "name": "Whisper of the Heart",
      "source": "https://lh3.googleusercontent.com/proxy/u-hg4G8HzuXNiV7YvDGWswt6cwLAB0c0938GizLCj63cYCbiG7flZo6qjF8Bl1LhcrzbsytuM8cmPKmG4ad61o3ax3knZIIg8Xg3-lZuwul7-il-X0IW"
    },
    {
      "name": "Princess Mononoke",
      "source": "https://www.indiewire.com/wp-content/uploads/2020/06/1692841_orig.jpg?w=780"
    },
    {
      "name": "My Neighbors the Yamadas",
      "source": "https://i.pinimg.com/originals/0f/ea/25/0fea25c47c7a9d0a685ef45fde67e4c2.jpg"
    },
    {
      "name": "Spirited Away",
      "source": "https://news.cgtn.com/news/3d3d514f3363544d35457a6333566d54/img/c66f29f6e575486aa40db56441fa503d/c66f29f6e575486aa40db56441fa503d.jpg"
    },
    {
      "name": "The Cat Returns",
      "source": "https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/m7txl-TEQ33GV6M7R-Full-Image_GalleryBackground-en-US-1581442842569._RI_.jpg"
    },
    {
      "name": "Howl's Moving Castle",
      "source": "https://am23.mediaite.com/tms/cnt/uploads/2019/09/howls-moving-castle-castle-1200x708.jpg"
    },
    {
      "name": "Tales from Earthsea",
      "source": "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/09/earthsea.jpg"
    },
    {
      "name": "Ponyo",
      "source": "https://d23.com/app/uploads/2015/07/ponyo-1180x600.jpg"
    },
    {
      "name": "Arrietty",
      "source": "https://wehco.media.clients.ellingtoncms.com/img/photos/2012/02/16/resized_99263-secret-world1_13-15542_t800.JPG?90232451fbcadccc64a17de7521d859a8f88077d"
    },
    {
      "name": "From Up on Poppy Hill",
      "source": "https://a.ltrbxd.com/resized/sm/upload/29/nx/ir/uz/from-up-poppy-hill-1200-1200-675-675-crop-000000.jpg?k=0ae09f8f5a"
    },
    {
      "name": "The Wind Rises",
      "source": "https://animationconfabulation.files.wordpress.com/2014/01/2014rises.jpg"
    },
    {
      "name": "The Tale of the Princess Kaguya",
      "source": "https://www2.bfi.org.uk/sites/bfi.org.uk/files/styles/full/public/image/tale-of-the-princess-kaguya-2013-015-kaguya-catching-cherry-blossom.jpg?itok=Pe-zjIoM"
    },
    {
      "name": "When Marnie Was There",
      "source": "https://lh3.googleusercontent.com/proxy/Ku8i_zb1NnkcarkxQtqSsGXVNDY3km-gPlFOGPFXgWGlbPzkzzp4z4FHOewHKQQtbUTYGzF7DLLtXL8te8YghquhhynYPfd2nUiX60sxN4q_pjiIIONtAtUjZCOpXg"
    },
  ]
  var myurl = "https://ghibliapi.herokuapp.com/films";
  console.log(myurl);
  fetch(myurl)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      for (var i = 0; i < json.length; i++) {
      //creates a div for the ghibli movie info to be put into
      let movieBox = document.createElement("DIV");
      movieBox.setAttribute("class","ghibli-box");
      //creates a heading for the titles to go in
      let ghibliHeading = document.createElement("h2");
      ghibliHeading.setAttribute("class","ghibli-title");
      //creates a text node as a way to put the title in the h2 element
      let ghibliTitle = document.createTextNode(json[i].title);
      //appends the text node as a child to the heading
      ghibliHeading.appendChild(ghibliTitle);
      //appends the heading as a child to the ghibli info div
      movieBox.appendChild(ghibliHeading);


      //creates a div for the photo to be in
      let photoDiv = document.createElement("DIV");
      photoDiv.setAttribute("class", "photo-box");
      //creates an image element
      let ghibliImage = document.createElement("IMG");
      ghibliImage.setAttribute("class", "ghibli-photo");
      ghibliImage.setAttribute("src", theSources[i].source);

      photoDiv.appendChild(ghibliImage);
      movieBox.appendChild(photoDiv);



      //creates a p element for the text to go into
      let ghibliInfo = document.createElement("P");
      ghibliInfo.setAttribute("class", "ghibli-info");
      //creates a text node for the general movie info
      let ghibliText = document.createTextNode(json[i].description);
      ghibliInfo.appendChild(ghibliText);
      movieBox.appendChild(ghibliInfo);


      console.log(json);
      document.getElementById("movies").appendChild(movieBox);
    }
    });
}




if(window.innerWidth > 900){
  let photoHeight = document.getElementById("g-photo").height;
  document.getElementById("intro").style.height = photoHeight + "px";
}


function resizeMe(){
  if(window.innerWidth > 900){
    let photoHeight = document.getElementById("g-photo").height;
    document.getElementById("intro").style.height = photoHeight + "px";
  }
}
