var idx = lunr(function () {
  this.field('title')
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')

  
  
    
    
      this.add({
          title: " ",
          excerpt: "Portfolio En esta sección voy a ir poniendo proyectos, a modo de presentacion de proyectos mas representativos y que son...",
          categories: [],
          tags: [],
          id: 0
      })
      
    
  
    
    
      this.add({
          title: "Osciladores Longitudinales y Transversales",
          excerpt: "OSCILACIONES LONGITUDINALES Empecemos por simplicidad con las oscilaciones longitudinales. Al igual que con numpy, vamos a necesitar importar la libreria...",
          categories: ["Fisica de Ondas"],
          tags: [],
          id: 1
      })
      
    
      this.add({
          title: "Oscilaciones Forzadas",
          excerpt: "Osilaciones Forzadas Vamos a ver cómo resolver el ejercicio 9 de la guía de repaso, esto nos va a ayudar...",
          categories: ["Fisica de Ondas"],
          tags: [],
          id: 2
      })
      
    
  
});

console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": " ",
        "url": "http://localhost:4000/portfolio/index.html",
        "excerpt": "Portfolio En esta sección voy a ir poniendo proyectos, a modo de presentacion de proyectos mas representativos y que son...",
        "teaser":
          
            null
          
      },
    
  
    
    
    
      
      {
        "title": "Osciladores Longitudinales y Transversales",
        "url": "http://localhost:4000/fisica%20de%20ondas/2022/08/08/Oscilaciones_Long_y_Transversales.html",
        "excerpt": "OSCILACIONES LONGITUDINALES Empecemos por simplicidad con las oscilaciones longitudinales. Al igual que con numpy, vamos a necesitar importar la libreria...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Oscilaciones Forzadas",
        "url": "http://localhost:4000/fisica%20de%20ondas/2022/08/12/Forzado_amortiguado.html",
        "excerpt": "Osilaciones Forzadas Vamos a ver cómo resolver el ejercicio 9 de la guía de repaso, esto nos va a ayudar...",
        "teaser":
          
            null
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val().toLowerCase().replace(":", "");
    var result =
      idx.query(function (q) {
        query.split(lunr.tokenizer.separator).forEach(function (term) {
          q.term(term, {  boost: 100 })
          if(query.lastIndexOf(" ") != query.length-1){
            q.term(term, {  usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 })
          }
          if (term != ""){
            q.term(term, {  usePipeline: false, editDistance: 1, boost: 1 })
          }
        })
      });
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
