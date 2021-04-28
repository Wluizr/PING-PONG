
// Elementos
    var btIniciar;
    var bola;
    var cpu;
    var jogador;
    var pontos;

// Controle de Animação;
    var game,frames

// Posições do Elementos
    var posBolaX, posBolaY;
    var posJogadorX, posJogadorY;
    var posCpuX, posCpuY;

// Variavel de Direção conforma a tecla
    var dirJy;
    
// Posições Iniciais
    var posCpuIniY = 180, posJogIniY = 180;
    var posBolaIniX = 475;
    var posBolaIniY = 240;

// Tamanhos
    var camposX = 0, camposY = 0, campoW = 960, campoH= 500;
    var barraW = 20, barraH = 140, bolaW = 20, bolaH = 20;

// DIreção
    var bolaX, bolaY;
    var cpuY = 0;

// Velocidade
    var velBola, velCpu, velJogador;

//Controle
    var pontos = 0;
    var tecla;
    var jogo = false;

    function controlaJog(){
        if(jogo){
            posJogadorY += velJogador * dirJy;
            if( 
                ((posJogadorY + barraH) >= campoH ) ||
                (posJogadorY <= 0)
                ){
                
                posJogadorY += (velJogador * dirJy)*(-1);
            }
            jogador.style.top = posJogadorY+"px";
        }
    }

    function controlaBola(){
        //MOvimentação da bola
        posBolaX += velBola * bolaX;
        posBolaY += velBola * bolaY;

        // COlisão com o Jogador
        if(
            (posBolaX <= posJogadorX + barraW) &&
            ((posBolaY + bolhaH) >= posJogadorY) && (posBolaY <= posJogadorY + barraH)
        ){
            bolaY = (posBolaY)
            bolaX *= -1;
        }

        bola.style.top = posBolaY +"px";
        bola.style.left = posBolaX +"px";

    }


    function teclaDw(){
        tecla = event.keyCode;
        console.log(tecla);
        if(tecla == 87){// (W = 87) Seta para cima = 38
            dirJy = -1;
        }else if(tecla == 83){ // (S = 83) Seta para baixo = 40
            dirJy = 1;
        }
    }

    function teclaUp(){
        tecla = event.keyCode;
        if(tecla == 87){// (W = 87) Seta para cima = 38
            dirJy = 0;
        }else if(tecla == 83){ // (S = 83) Seta para baixo = 40
            dirJy = 0;
        }
    }

    function game(){
        if(jogo){
            console.log('game rodando');
            controlaJog();
            controlaBola();
        }
        frames = requestAnimationFrame(game); // Entender como funciona essa função no Canal
    }

    function iniciaJogo(){

        if(!jogo){
            cancelAnimationFrame(frames);
            jogo = true;
            dirJy =0;
            bolaY = 0;
            if((Math.random()*10)<5){
                bolaX = -1; // direção da bola para a esquerda
            }else{
                bolaX = 1;  // direção da bola para a direita
            }
            posBolaX = posBolaIniX;
            posBolaY = posBolaIniY;
            posJogadorY = posJogIniY;
            posCpuY = posCpuIniY;
            mudaStatusJogo()
            game();
        }

       
            
    }
    function inicializa(){    
        velBola = velCpu = velJogador = 8;
        btIniciar = document.getElementById('btIniciar');
        btIniciar.addEventListener('click', iniciaJogo);
        jogador = document.getElementById('dvJogador');
        cpu = document.getElementById('dvCpu');
        bola = document.getElementById('dvBola');
        pontos = document.getElementById('pontosJogador');
        document.addEventListener('keydown', teclaDw);
        document.addEventListener('keyUp', teclaUp);

    }

    function mudaStatusJogo(){
        var spnStatus = document.getElementById('spnStatus');
            spnStatus.classList.remove('status-noIni');
            spnStatus.classList.add('status-ini');
            spnStatus.innerText = 'Jogo Iniciado';

    }
    window.addEventListener('load', inicializa);

