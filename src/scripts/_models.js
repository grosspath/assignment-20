export const RadioModel = Backbone.Model.extend ({

})


export const RadioCollection = Backbone.Collection.extend ({

  initialize: function(qryStrParams){

      if(typeof qryStrParams !== 'undefined'){
        this.url = `http://www.bbc.co.uk/radio1/playlist.json&${qryStrParams}`
     } else {
       this.url = `http://www.bbc.co.uk/radio1/playlist.json`
     }
   },
  parse: function(rawServerRes) {

    return rawServerRes.results
  },
  model: RadioModel
})

  export const RadioCollectionTwo = Backbone.Collection.extend ({

    initialize: function(qryStrParams){

        if(typeof qryStrParams !== 'undefined'){
          this.url = `http://www.bbc.co.uk/radio2/playlist.json&${qryStrParams}`
       } else {
         this.url = `http://www.bbc.co.uk/radio2/playlist.json`
       }
     },
    parse: function(rawServerRes) {

      return rawServerRes.results
    },


  model: RadioModel
})
