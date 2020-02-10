controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    moving_Left = true
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    moving_Left = false
})
let projectile: Sprite = null
let moving_Left = false
moving_Left = false
game.onUpdateInterval(500, function () {
    if (moving_Left) {
        projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . . 5 2 . . . . . . . . . 
. . . . . 5 5 2 . . . . . . . . 
. . . . . . 5 5 2 . . . . . . . 
5 5 5 5 5 5 5 5 5 2 . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 . . . . . 
5 5 5 5 5 5 5 5 5 2 . . . . . . 
. . . . . . 5 5 2 . . . . . . . 
. . . . . 5 5 2 . . . . . . . . 
. . . . . 5 2 . . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(0, 100), 0)
    } else {
        projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 . . . . . . . . . 
. . . . . 2 5 . . . . . . . . . 
. . . . 2 5 5 . . . . . . . . . 
. . . 2 5 5 . . . . . . . . . . 
. . 2 5 5 5 5 5 5 5 5 5 . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 . . . . 
. . 2 5 5 5 5 5 5 5 5 5 . . . . 
. . . 2 5 5 . . . . . . . . . . 
. . . . 2 5 5 . . . . . . . . . 
. . . . . 2 5 . . . . . . . . . 
. . . . . . 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(0, -100), 0)
    }
})
