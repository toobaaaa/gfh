scene.setBackgroundColor(1)
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . . e . e . . . . . . 
    . . . . . . e 3 e 3 e . . . . . 
    . . . . . . e e e e e . . . . . 
    . . . . . . e f e f e . . . . . 
    . . . . . . f e f e f . . . . . 
    . . . . . . e f f f e . . . . . 
    . . . . . e e e e e e e . . . . 
    . . f e e e e e e e e e e e f . 
    . . f e e e e e e e e e e e f . 
    . . . . . e e e e e e e . . . . 
    . . . . . e e e e e e e . . . . 
    . . . . . e e e e e e e . . . . 
    . . . . . e e e e e e e . . . . 
    . . . . . . e e . e e . . . . . 
    . . . . . . f f . f f . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
