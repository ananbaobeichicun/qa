var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var imge = [];
imge[block.air] = new Image();
imge[block.air].src = "img/air.png";
imge[block.wall] = new Image();
imge[block.wall].src = "img/wall.png";
imge[block.ending] = new Image();
imge[block.ending].src = "img/ending.png";
imge[block.robot] = new Image();
imge[block.robot].src = "img/robot.png";
imge[block.killer] = new Image();
imge[block.killer].src = "img/killer.png";
imge[block.coin] = new Image();
imge[block.coin].src = "img/coin.png"; 
imge[block.doubleCoin] = new Image();
imge[block.doubleCoin].src = "img/double_coin.png"; 