# TwitterBot

A ideia principal do bot, é adquirir experiência tanto na utilização de APIs quanto explorando os pacotes disponíveis no npm do Node.js.

Para poder desenvolver um bot no twitter é necessario criar ou tornar uma conta do Twitter, o que é bem ensinado nesse vídeo: https://www.youtube.com/watch?v=Auy2zWs7dRE

A aplicação utiliza do pacote node Twit que permite, permite utilizar GETS e POSTS dentro do twitter.
A ideia principal é escolher um usuário e apartir de um método stream, ficar aguardando toda a vez que esse usuário realizar um novo tweet. Quando isso acontece, o método
chama um função de callBack que recebe os dados JSON sobre o tweet postado.

A função pega apenas o usuário que tweetou, e o conteúdo do tweet, e passa os dados para o método translate do pacote do google tradutor, que irá traduzir o conteúdo do
tweet de um idioma para outro.
Após isso uma função escolhe uma foto aleatória dentro de uma pasta com imagens e cria um tweet (POST) novo que irá responder o tweet do usuário selicionado com a foto
aleatória e o tweet traduzido para o idioma de escolha.

Lembrando que para que o programa funcione sempre, sem que você precise deixar ele executando no seu pc 24h, é necessário utilizar um servidor que irá deixar a execução 
do seu programa em pé. No caso, foi utilizado a plataforma Heroku.
