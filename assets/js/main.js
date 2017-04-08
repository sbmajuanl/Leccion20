    document.getElementById("toggle").addEventListener("click",function (e) {
      e.preventDefault();
      document.getElementById("nav-header").classList.toggle("open");
      document.getElementById("body").classList.toggle("overflow-hidden");

    })

    var lastScrollTop = 0;
    window.addEventListener("scroll", function () {
      var currentScroll = window.pageYOffset || document.body.scrollTop;
      if (currentScroll > lastScrollTop) {
        document.getElementById("nav-header").classList.remove("header-in");
        document.getElementById("nav-header").style.opacity = 0;
      } else{
        document.getElementById("nav-header").classList.add("header-in");
        document.getElementById("nav-header").classList.add("solid");
        document.getElementById("nav-header").style.opacity = 1;
        if (currentScroll <=3) {
          document.getElementById("nav-header").classList.remove("solid");
          document.getElementById("nav-header").classList.remove("header-in");
        }
      }
      lastScrollTop = currentScroll;
    },false);


    function Imagenes(){
      this.coders = [];
      this.addCoders = function (prom,archivo,nombre){
        this.coders.push({
          promocion : prom,
          file : archivo,
          name : nombre
        });
      }
    }

    var imagenes = new Imagenes();
    imagenes.addCoders("Promo6","1.png","Fiorella Quispe");
    imagenes.addCoders("Promo6","2.png","Maria Lourdes Vilchez");
    imagenes.addCoders("Promo6","3.png","Leydi Maldonado");
    imagenes.addCoders("Promo6","4.png","Yessenia Huaman");
    imagenes.addCoders("Promo6","5.png","Mirian Mendoza");
    imagenes.addCoders("Promo6","6.png","Elizabeth Condori");
    imagenes.addCoders("Promo6","7.png","Arantza Burga");
    imagenes.addCoders("Promo6","8.png","Grecia Rayme");
    imagenes.addCoders("Promo6","9.png","Janine Vega");
    imagenes.addCoders("Promo6","10.png","Rosario Félix");
    imagenes.addCoders("Promo6","11.png","Daguiana Revoredo");
    imagenes.addCoders("Promo6","12.png","Mishel Velásquez");
    imagenes.addCoders("Promo6","13.png","Nadia Cuadros");
    imagenes.addCoders("Promo6","14.png","Michelle More");
    imagenes.addCoders("Promo6","15.png","Marilu Llamoca");
    imagenes.addCoders("Promo6","16.png","Mariel García");
    imagenes.addCoders("Promo6","17.png","Fiorella Cisneros");
    imagenes.addCoders("Promo6","18.png","Geraldine Chauca");
    imagenes.addCoders("Promo6","19.png","Yelitza Choque");
    imagenes.addCoders("Promo6","20.png","Stephanie Hiyagon");
    imagenes.addCoders("Promo6","21.png","Emma Alva");
    imagenes.addCoders("Promo6","22.png","Dana Franco");
    imagenes.addCoders("Promo6","23.png","Flor Retamozo");
    imagenes.addCoders("Promo6","24.png","Nathaly Pacheco");
    imagenes.addCoders("Promo6","25.png","Erika Vidal");
    imagenes.addCoders("Promo6","26.png","Katherine Ortega");
    imagenes.addCoders("Promo6","27.png","Schelsen Majuan")
    imagenes.addCoders("Promo6","28.png","Flor Tello");
    imagenes.addCoders("Promo6","29.png","Leslie Avendaño");
    imagenes.addCoders("Promo6","30.png","Cindy Mendoza");
    imagenes.addCoders("Promo6","31.png","Annia Flores");
    imagenes.addCoders("Promo6","32.png","Betzy Loayza");
    imagenes.addCoders("Promo6","33.png","Ayda Sulca");
    imagenes.addCoders("Promo6","34.png","Luz Gutierrez");
    imagenes.addCoders("Promo6","35.png","Nakarid Llave");
    imagenes.addCoders("Promo6","36.png","Angie Condor");
    imagenes.addCoders("Promo6","37.png","Maricarmen Rojas");
    imagenes.addCoders("Promo6","38.png","Ariana Cabana");
    imagenes.addCoders("Promo6","39.png","Flor Condori");
    imagenes.addCoders("Promo6","40.png","Mitchell Rodriguez");
    imagenes.addCoders("Promo6","41.png","Naomi Villanueva");
    imagenes.addCoders("Promo6","42.png","Mary Castillo");
    imagenes.addCoders("Promo6","43.png","Miriam Peralta");
    imagenes.addCoders("Promo6","44.png","Karin Alejo");
    imagenes.addCoders("Promo6","45.png","Liliana Peña");
    imagenes.addCoders("Promo6","46.png","Ruth Salvador");
    imagenes.addCoders("Promo6","47.png","Maribel Sevilla");
    imagenes.addCoders("Promo6","48.png","Wendy Reyes");
    imagenes.addCoders("Promo6","49.png","Cinthia ");
    imagenes.addCoders("Promo6","50.png","Maria Cutipa");
    imagenes.addCoders("Promo6","51.png","Ana Durand");
    imagenes.addCoders("Promo6","52.png","Glisse Jorge");
    imagenes.addCoders("Promo6","53.png","Neiza Nuñez");
    imagenes.addCoders("Promo6","54.png","Sandra Solorzano");


    var dfm = document.createDocumentFragment();
    function createImages(prom,src,name) {
      var figure = document.createElement("figure");
      var imagen = document.createElement("img");
      imagen.classList.add("style-picture");
      imagen.src="assets/img/students/"+src;
      imagen.alt=name;
      var figcaption = document.createElement("figcaption");
      figcaption.setAttribute("class","center");
      var span = document.createElement("span");
      span.innerHTML = name;
      dfm.appendChild(figure);
      figure.appendChild(imagen);
      figure.appendChild(figcaption);
      figcaption.appendChild(span);
      return dfm;
    }

    imagenes.coders.forEach(function (e) {
      document.getElementById("grupo").appendChild(createImages(e.promocion,e.file,e.name));
    });
