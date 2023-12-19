import { IMovementController } from './IMovementController';

export class KeyboardController implements IMovementController {
   
     movePlayer(cursors: any, player: any): void{

        if (cursors.left.isDown) {
            player.setVelocityX(-160);
            player.anims.play("left", true);
        } else if (cursors.right.isDown) {
            console.log("LISDOWN");
            player.setVelocityX(160);
            player.anims.play("right", true);
        } else {
            player.setVelocityX(0);
            player.anims.play("turn");
        }

        if (cursors.up.isDown && player.body.touching.down) {
            player.setVelocityY(-330);
        }

     }

}