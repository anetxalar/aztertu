function soinua_1 () {
    music.playTone(440, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(349, music.beat(BeatFraction.Whole))
    basic.pause(100)
}
function soinua_2 () {
    music.playTone(349, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(440, music.beat(BeatFraction.Whole))
    basic.pause(100)
}
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        soinua_1()
    }
    if (input.buttonIsPressed(Button.B)) {
        soinua_2()
    }
})
