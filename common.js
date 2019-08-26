// grid
const grid = [
    [{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:0,y:3},{x:0,y:4},{x:0,y:5},{x:0,y:6},{x:0,y:7},{x:0,y:8},{x:0,y:9}],
    [{x:1,y:0},{x:1,y:1},{x:1,y:2},{x:1,y:3},{x:1,y:4},{x:1,y:5},{x:1,y:6},{x:1,y:7},{x:1,y:8},{x:1,y:9}],
    [{x:2,y:0},{x:2,y:1},{x:2,y:2},{x:2,y:3},{x:2,y:4},{x:2,y:5},{x:2,y:6},{x:2,y:7},{x:2,y:8},{x:2,y:9}],
    [{x:3,y:0},{x:3,y:1},{x:3,y:2},{x:3,y:3},{x:3,y:4},{x:3,y:5},{x:3,y:6},{x:3,y:7},{x:3,y:8},{x:3,y:9}],
    [{x:4,y:0},{x:4,y:1},{x:4,y:2},{x:4,y:3},{x:4,y:4},{x:4,y:5},{x:4,y:6},{x:4,y:7},{x:4,y:8},{x:4,y:9}],
    [{x:5,y:0},{x:5,y:1},{x:5,y:2},{x:5,y:3},{x:5,y:4},{x:5,y:5},{x:5,y:6},{x:5,y:7},{x:5,y:8},{x:5,y:9}],
    [{x:6,y:0},{x:6,y:1},{x:6,y:2},{x:6,y:3},{x:6,y:4},{x:6,y:5},{x:6,y:6},{x:6,y:7},{x:6,y:8},{x:6,y:9}],
    [{x:7,y:0},{x:7,y:1},{x:7,y:2},{x:7,y:3},{x:7,y:4},{x:7,y:5},{x:7,y:6},{x:7,y:7},{x:7,y:8},{x:7,y:9}],
    [{x:8,y:0},{x:8,y:1},{x:8,y:2},{x:8,y:3},{x:8,y:4},{x:8,y:5},{x:8,y:6},{x:8,y:7},{x:8,y:8},{x:8,y:9}],
    [{x:9,y:0},{x:9,y:1},{x:9,y:2},{x:9,y:3},{x:9,y:4},{x:9,y:5},{x:9,y:6},{x:9,y:7},{x:9,y:8},{x:9,y:9}]
  ]
  
  
  // Rover Object Goes Here
  const rovers = {
    rover : {
      direction : 'N',
      x : 0,
      y : 0,
      travelLog : []
    },
    roverB : {
      direction : 'N',
      x : 4,
      y : 4,
      travelLog : []
    },
    roverC : {
      direction : 'N',
      x : 6,
      y : 4,
      travelLog : []
    }
  };
  
  
  // obstacles
  const obstacles = {
    obstacle : {
      x : 2,
      y : 4
    }
  };
  
  
  // Direction
  function turnLeft(rovers){
    console.log("turnLeft was called!");
  
    switch(rovers.rover.direction){
      case 'N':
      rovers.rover.direction = 'W';
      break;
  
      case 'W':
      rovers.rover.direction = 'S';
      break;
      
      case 'S':
      rovers.rover.direction = 'E';
      break;
      
      case 'E':
      rovers.rover.direction = 'N';
      break;
    }
    console.log(`Direction is ${rovers.rover.direction}`)
  }
  
  
  function turnRight(rovers){
    console.log("turnRight was called!");
  
    switch(rovers.rover.direction){
      case 'N':
      rovers.rover.direction = 'E';
      break;
  
      case 'W':
      rovers.rover.direction = 'N';
      break;
      
      case 'S':
      rovers.rover.direction = 'W';
      break;
      
      case 'E':
      rovers.rover.direction = 'S';
      break;
    }
    console.log(`Direction is ${rovers.rover.direction}`)
  }
  
  
  // moveForward
  function moveForward(rovers){
    if (rovers.rover.x === obstacles.obstacle.x && rovers.rover.y === obstacles.obstacle.y){
      console.log(`STOP! There is an obstacle at [x: ${obstacles.obstacle.x} y:${obstacles.obstacle.y}]`);
    }
    else if(rovers.rover.x === rovers.roverB.x && rovers.rover.y === rovers.roverB.y){
      console.log(`STOP! There is another rover at [x: ${rovers.roverB.x} y:${rovers.roverB.y}]`);
  
    }
    else if(rovers.rover.x >= 0 && rovers.rover.x <= 9 && rovers.rover.y >= 0 && rovers.rover.y <= 9){
      console.log("moveForward was called")
      let oldPosition = {x: rovers.rover.x, y: rovers.rover.y};
  
      switch(rovers.rover.direction){
        case 'N':
        rovers.rover.y--;
        break;
        
        case 'W':
        rovers.rover.x--;
        break;
        
        case 'S':
        rovers.rover.y++;
        break;
        
        case 'E':
        rovers.rover.x++;
        break;
      }
      rovers.rover.travelLog.push (oldPosition);
      console.log(`New position is [x: ${rovers.rover.x} y:${rovers.rover.y}]`);
    }
    else{
      console.log('The rover cannot go outside the grit!!!');
    }
  }
  
  
  // moveBackward
  function moveBackward(rover){
    if (rovers.rover.x === obstacles.obstacle.x && rovers.rover.y === obstacles.obstacle.y){
      console.log(`STOP! There is an obstacle at [x: ${obstacles.obstacle.x} y:${obstacles.obstacle.y}]`)
    }
    else if(rovers.rover.x === rovers.roverB.x && rovers.rover.y === rovers.roverB.y){
      console.log(`STOP! There is another rover at [x: ${rovers.roverB.x} y:${rovers.roverB.y}]`);
  
    }
    else if (rovers.rover.x === rovers.roverB.x && rovers.rover.y === rovers.roverB.y){
      console.log(`STOP! There is an obstacle at [x: ${rovers.roverB.x} y:${rovers.roverB.y}]`)
    }
    else if(rovers.rover.x >= 0 && rovers.rover.x <= 9 && rovers.rover.y >= 0 && rovers.rover.y <= 9){
      console.log("moveBackward was called")
      let oldPosition = {x: rovers.rover.x, y: rovers.rover.y};
  
      switch(rovers.rover.direction){
        case 'N':
        rovers.rover.y++;
        break;
        
        case 'W':
        rovers.rover.x++;
        break;
        
        case 'S':
        rovers.rover.y--;
        break;
        
        case 'E':
        rovers.rover.x--;
        break;
      }
      rover.travelLog.push (oldPosition);
      console.log(`New position is [x: ${rovers.rover.x} y:${rover.y}]`);
    }
    else{
      console.log('The rover cannot go outside the grit!!!')
    }
  }
  
  
  // command
  let commands = (command) => {
    console.log('commands was called!');
    
    for (let i = 0; i < command.length; i++){
      switch(command[i]){
        case 'f':
        moveForward(rovers);
        break;
  
        case 'b':
        moveBackward(rovers);
        break;
  
        case 'l':
        turnLeft(rovers);
        break;
  
        case 'r':
        turnRight(rovers);
        break;
  
        default:
        console.log('invalid command');
        // continue;
        break;
      }
    }
  }
  
  
  // call command
  console.log('Command test...');
  commands('rffrfffff');
  console.log('=======================')
  
  
  // travelLog
  console.log('Travel log;');
  console.log(rovers.rover.travelLog);
  console.log('=======================')
  
  