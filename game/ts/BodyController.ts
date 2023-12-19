import { IMovementController } from './IMovementController';

export class BodyController implements IMovementController {
   
     movePlayer(positionMarker: any, player: any): void{

        const dataPoints = positionMarker.readPosition([
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        ]);

        var totalXVal = 0;
        var totalYVal = 0;

        dataPoints.forEach(addUp);

        function addUp(item) {
            totalXVal = totalXVal + item.x;
            totalYVal = totalYVal + item.y;
        }

        const xPos = totalXVal / dataPoints.length;
        const yPos = totalYVal / dataPoints.length;
        
        if (xPos > 0 && xPos < 0.33) {
            console.log("left");
            player.setVelocityX(-160);
            player.anims.play("left", true);
        } else if (xPos >= 0.33 && xPos < 0.66) {
            console.log("center");
            player.setVelocityX(0);
            player.anims.play("turn");
        } else if (xPos >= 0.66 && xPos <= 1.0) {
            console.log("right");
            player.setVelocityX(160);
            player.anims.play("right", true);
        }
        if (yPos < 0.5 && player.body.touching.down) {
            player.setVelocityY(-330);
        }
     
     }

}