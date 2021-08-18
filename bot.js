const Twit = require('twit')
const keys = require('./keys')
const {recebeTweet, tweetRandomImage} = require('./funcs')

const Bot = new Twit(keys)

var stream = Bot.stream('statuses/filter', {follow: ''}) //adicionar o id do usuário do twitter em "follow"
  
console.log('Esperando por tweets...')
  
stream.on('tweet', recebeTweet) //faz o programa esperar por um evento acontecer com o usuário no twitter, no caso, um tweet do usuário escolhido
  
stream.on('error', err => console.log(err))
