var idx = lunr(function () {
  this.field('title')
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')

  
  
    
    
      this.add({
          title: "Osciladores Longitudinales y Transversales",
          excerpt: "OSCILACIONES LONGITUDINALES Empecemos por simplicidad con las oscilaciones longitudinales. Al igual que con numpy, vamos a necesitar importar la libreria...",
          categories: ["posts"],
          tags: [],
          id: 0
      })
      
    
      this.add({
          title: "Oscilaciones Forzadas",
          excerpt: "Osilaciones Forzadas Vamos a ver cómo resolver el ejercicio 9 de la guía de repaso, esto nos va a ayudar...",
          categories: ["posts"],
          tags: [],
          id: 1
      })
      
    
      this.add({
          title: "Complejos en python",
          excerpt: "Manejo de numeros complejos en python Recordemos que cuando queremos resolver ciertas ecuaciónes tales como \\(x^2 + 1=0\\) estas no...",
          categories: ["posts"],
          tags: [],
          id: 2
      })
      
    
  
    
    
  
});

console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Osciladores Longitudinales y Transversales",
        "url": "http://localhost:4000/posts/Oscilaciones_Long_y_Transversales/",
        "excerpt": "OSCILACIONES LONGITUDINALES Empecemos por simplicidad con las oscilaciones longitudinales. Al igual que con numpy, vamos a necesitar importar la libreria...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Oscilaciones Forzadas",
        "url": "http://localhost:4000/posts/Forzado_amortiguado/",
        "excerpt": "Osilaciones Forzadas Vamos a ver cómo resolver el ejercicio 9 de la guía de repaso, esto nos va a ayudar...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Complejos en python",
        "url": "http://localhost:4000/posts/complejos_python/",
        "excerpt": "Manejo de numeros complejos en python Recordemos que cuando queremos resolver ciertas ecuaciónes tales como \\(x^2 + 1=0\\) estas no...",
        "teaser":
          
            null
          
      },
    
  
    
    
    
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