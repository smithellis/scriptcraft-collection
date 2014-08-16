var digdug = function(howdeep) {
    var i ;
    if ( typeof howdeep == 'undefined' ) {
        howdeep = 10;
    }
    this.chkpt('digdug'); // saves the drone position so it can return there later
    for ( i = 0; i < howdeep; i++ ) {
        this.down(1)
            .box(0,4,4,4)
            .fwd(3)
            .up(2)
            .left(1)
            .box(50)
            .down(2)
            .right(1);
    }
    return this.move('digdug'); // return to where we started
//Try to add torches
    for ( i = 0; i < howdeep; i++ ) {
        this.down(1)
            .box(50)
            .fwd(3)
            .down(3);
    }
    return this.move('digdug');

};
var Drone = require('../drone/drone').Drone; 
Drone.extend('digdug',digdug);