const Twit = require('twit')
const keys = require('./keys')
const translate = require('@vitalets/google-translate-api');
const fs = require('fs')
const path = require('path')

const Bot = new Twit(keys)
const my_user = '' //usuário que você está respondendo aos tweets

const upaFoto = (foto, tweetId, username, text) => {
  Bot.post('media/upload', {media_data: foto}, (err, data, response) => {
    if(err) console.log(err)
    else {
      const image = data
      let final = {
          status: `@${username} ${text}`, 
          in_reply_to_status_id: tweetId,
          media_ids: [image.media_id_string]
        }
        Bot.post('statuses/update', final, (err, data, response) => {
          if(err) console.log(err)
          else console.log('Imagem enviada!')
        })
      }
    })
  }
  
const randomFromArray = images => {
    return images[Math.floor(Math.random() * images.length)]
  }

const tweetRandomImage = (tweetId, username, text) => {
    fs.readdir(__dirname + '/fotos', function(err, files) {
      if (err){
        console.log(err)
      }
      else{
        let images = []
        files.forEach(f => {
          images.push(f);
        })
        const imagePath = path.join( __dirname, '/fotos/' + randomFromArray(images)),
              b64content = fs.readFileSync(imagePath, {encoding: 'base64'})
  
        upaFoto(b64content, tweetId, username, text)
      }
    } )
  }

 const recebeTweet = tweet => {
      const id = tweet.id_str
      const user = tweet.user.screen_name
      const data = tweet.text
      if(user == my_user && !data.startsWith('RT')) {
          translate(data, {from: 'pt', to: 'es'})
            .then(res => {tweetRandomImage(id, user, res.text)})
            .catch(err => console.log(err))
      }
    }

    module.exports = {recebeTweet, tweetRandomImage}