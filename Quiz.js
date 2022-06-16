class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
  // escreva aqui o código para ocultar os elementos da questão
      question.hide();

    // escreva o código aqui para mudar a cor de fundo
      background("white");

    // escreva o código para exibir um cabeçalho indicando o resultado do Quiz
    text("Resultado do questionário :", 425,100);

    // chame getContestantInfo () aqui
      Contestant.getPlayerInfo();

    // escreva a condição para verificar se contestantInfor não é indefinido
      if(allContestants !== undefined){
          fill("Blue");
          textSize(20);
          text("A pessoa correta está em verde", 130, 230);
        var posx = 200;
          
          for(var i in allContestants){
            var correto = 1;
            if (correto == allContestants[i].answer){
              fill("green");

            } else {
              fill("red");
            }

            text(allContestants[i].name + allContestants[i].answer, 130, 280);

          }
      }
    // escreva aqui o código para adicionar uma nota

    // escreva o código para destacar o competidor que respondeu corretamente
    
  }

}
