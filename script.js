let start = document.getElementById('start')
let main = document.getElementById('main')
let encouragement = document.getElementById('encouragement')
let inspiration = document.getElementById('inspiration')
let comfort = document.getElementById('comfort')
let rechoose = document.getElementById('rechoose')
rechoose.onclick = function () {
  location.reload()
}
encouragement.onclick = function() {
  start.style.display = "none"
  main.style.display = "block"
  Quote("encouragement")
  Music("encouragement")
}
inspiration.onclick = function() {
  start.style.display = "none"
  main.style.display = "block"
  Quote("inspiration")
  Music("inspiration")
}
comfort.onclick = function() {
  start.style.display = "none"
  main.style.display = "block"
  Quote("comforting")
  Music("comforting")
}
var Quote = function(query) {
    $.getJSON('assets/quotes.json', function(data) {
      var filtered= data.filter(function(data, index) {
        if(data.topic.includes(query))
          return true
      })
      var r = Math.round(Math.random()*(filtered.length-1))
      var author = filtered[r]["author"]
      var quote = filtered[r]["content"]
      $('#content').text(quote)
      $('#author').text(author)
    })
  }
var Music = function(query) {
    $.getJSON('assets/music.json', function(data) {
      var filtered= data.filter(function(data, index) {
        if(data.topic.includes(query))
          return true
      })
      var r = Math.round(Math.random()*(filtered.length-1))
      var artist = filtered[r]["artist"]
      var song = filtered[r]["song"]
      var src = filtered[r]["src"]
      $('#song').text(song)
      $('#artist').text(artist)
      $('#song').attr('href',src)
    })
  }
