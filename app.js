document.addEventListener('DOMContentLoaded',()=>{
    const space = document.getElementsByName('body');
    const oblacic = document.querySelector('.cloud');
    const dino = document.querySelector('.dino');
    const grid = document.querySelector('.grid');
    const alert = document.getElementById('alert');
    const score = document.querySelector('.score');
    let isJumping = false;
    let gravity = 0.9;
    let endOfGame = false;
    
    function control (e){
        if(e.keyCode === 32){
            if(!isJumping){
                isJumping = true;
                jump();
            }

            
        }
    }
    document.addEventListener('keyup', control);
     let position =0;
    function jump(){
        let  count = 0;
        let timerID = setInterval(function(){
            //move down
            if(count === 15){
                clearInterval(timerID);
                console.log('down')
                let donwTimeID  = setInterval(function(){
                    if (count === 0){
                        clearInterval(donwTimeID);
                        isJumping = false;
                    }
                    position -= 5
                    count--;
                    position = position * gravity;
                    dino.style.bottom = position + 'px';  
                },20)
             }
            //move up
            console.log('move');
            position +=30
            count ++
            position = position * gravity
            dino.style.bottom = position + 'px';
            console.log('dino.style.bottom');

        },20)
    }
 

    function generateObstacle(){
        let randomTime = Math.random()*4000;
        let obstaclePosition = window.innerWidth;
        let scoree = 0;
        const obstacle = document.createElement('div');
       if(!endOfGame) obstacle.classList.add('obstacle');
        grid.appendChild(obstacle);
        obstacle.style.left = obstaclePosition + 'px'; 
        let timerID = setInterval(function(){
            //code
            if(obstaclePosition > 0 && obstaclePosition < 60 && position < 60){
                clearInterval(timerID);
                alert.innerHTML = `
                GAME OVER
                <div class="reset" onclick="window.location.reload();"></div>
                `
                
                endOfGame = true;
                document.querySelector('.dino').style.background = "url('/media/dead-rex.png')";
                document.querySelector('.dino').style.backgroundSize ="cover";
                
            }
            // scoree +=1;
            // score.innerHTML = scoree;

            obstaclePosition -=10
            obstacle.style.left = obstaclePosition + 'px';}
             ,20)
      if(!endOfGame) (setTimeout(generateObstacle,randomTime));
    }


    generateObstacle();
    
    function resert(){
        window.location.reload();
    }





});

