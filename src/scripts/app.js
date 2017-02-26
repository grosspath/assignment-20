import Backbone from 'backbone'
import $ from 'jquery'

import {RadioModel, RadioCollection, RadioCollectionTwo} from './_models.js'


const AppRouter = Backbone.Router.extend ({
  initialize: function(){

    Backbone.history.start()
  },

routes: {

  'radio1': 'radio1',
  'radio2': 'radio2',
  '': 'homePage'
},

homePage: function(){
  let appContainerEl = document.querySelector('#app-container')
  let myData = new RadioCollection();
  myData.fetch().then(function(serverRes){

    let userArray = serverRes

      appContainerEl.innerHTML = `
      <div class = "navbar navbar_tabs">
      <button onClick={window.location.hash=''}>HOME PAGE</button>
      <button onClick={window.location.hash='radio1'} class="radio-button">RADIO ONE</button>
      <button onClick={window.location.hash='radio2'} class="radio-button">RADIO TWO</button>
      <h1>${userArray.playlist.introducing[0].title}</h1>
      <h2>${userArray.playlist.introducing[0].artist}</h2>
      <img class="open" src="${userArray.playlist.introducing[0].image}">
      <p>Artist_id: ${userArray.playlist.introducing[0].artist_id}</p>
      </div>`
  })
},

radio1: function(){
  let appContainerEl = document.querySelector('#app-container')
  appContainerEl.innerHTML = `<meta name = "viewport" content = "width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  `
  let myData = new RadioCollection();
  myData.fetch().then(function(serverRes){

    let userArray = serverRes
    let songsArray = userArray.playlist.a
    appContainerEl.innerHTML += `
      <div class = "navbar navbar_tabs">
        <button onClick={window.location.hash=''}>HOME PAGE</button>
        <button onClick={window.location.hash='radio1'} class="radio-button">RADIO ONE</button>
        <button onClick={window.location.hash='radio2'} class="radio-button">RADIO TWO</button>
      </div>
      <div class = "container">
       <div class = "row">`
    let songsArrayData = songsArray.map(function(userObj){

       return`
          <div class = "col-sm-6 col-md-4 col-lg-3">
            <img class ="table" src="${userObj.image}">
            <div class="table-decoration">
              <h5>${userObj.artist}</h5>
              <h6>${userObj.title}</h6>
            </div>
          </div>`
    }).join('')
    appContainerEl.innerHTML += `
    </div>
  </div>`
    appContainerEl.innerHTML += songsArrayData
  })
},


radio2: function(){
  let appContainerEl = document.querySelector('#app-container')
  appContainerEl.innerHTML = `<meta name = "viewport" content = "width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  `

  let myData = new RadioCollectionTwo();
  myData.fetch().then(function(serverRes){

    let userArray = serverRes

    let songsArray = userArray.playlist.a
    document.querySelector('#app-container').innerHTML += `
      <div class = "navbar navbar_tabs">
      <button onClick={window.location.hash=''}>HOME PAGE</button>
      <button onClick={window.location.hash='radio1'} class="radio-button">RADIO ONE</button>
      <button onClick={window.location.hash='radio2'} class="radio-button">RADIO TWO</button>
      </div>
      <div class = "container">
       <div class = "row">`
    let songsArrayData = songsArray.map(function(userObj){

       return`
          <div class = "col-lg-3">
            <img class ="table" src="${userObj.image}">
            <div class="table-decoration">
              <h5>${userObj.artist}</h5>
              <h6>${userObj.title}</h6>
            </div>
          </div>`
    }).join('')
    appContainerEl.innerHTML += `
    </div>
  </div>`
    appContainerEl.innerHTML += songsArrayData
  })
},

})


const myApp = new AppRouter()
