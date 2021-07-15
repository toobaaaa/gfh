controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 4 4 4 . . . . 
        . . . . 1 1 1 1 1 4 4 4 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
})
let projectile2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(1)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . e e . e e . . . . . . . 
    . . . . e e e e e . . . . . . . 
    . . . . e e e e f . . . . . . . 
    . . . . e e e e e f . . . . . . 
    . . . . e e e e e e . . . . . . 
    . . . . e e e e e . . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . e e f e f e e . . . . . . 
    . . . e e f e f e e . . . . . . 
    . . . e e f e f e e . . . . . . 
    . . . e e f f f e e . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . e e e e e e e e . . . . . . 
    . e e . e e . e e . . . . . . . 
    . . . . e e . e e . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
controller.moveSprite(mySprite, 100, 50)
scene.cameraFollowSprite(mySprite)
let projectile = sprites.createProjectileFromSide(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 1 1 1 1 . . . . 
    . . . . . . . 1 . . . 1 . . . . 
    . . . . f f 1 1 f f 5 1 . . . . 
    . . . 5 f f 1 5 f f 5 1 f . . . 
    f f 5 5 f f 1 5 f f 5 1 f f . . 
    f f 5 5 f f 1 5 f f 1 1 f f f . 
    f f 5 5 f f 5 5 f 1 1 5 f f f f 
    f f 5 5 f f 5 5 f f 5 5 f f f . 
    f f 5 5 f f 5 5 f f 5 5 f f . . 
    . . . 5 f f 5 5 f f 5 5 f . . . 
    . . . . f f 5 5 f f 5 5 . . . . 
    . . . . . f . f . f . f . . . . 
    . . . . f f f f f f f f . . . . 
    `, randint(-50, 50), randint(-50, 50))
