var homemaker = function(howbig) {
    var i ;
    if ( typeof howbig == 'undefined' ) {
        howbig = 10;
    }
    this.chkpt('homemaker'); // saves the drone position so it can return there late
    this.box0(5,howbig,howbig,howbig);
    this.move('homemaker');
    this.fwd(1)
        .up(2)
        .box(50)
        .fwd(2)
        .box(50);
    this.move('homemaker');
    this.fwd(2)
        .right(2)
        .box(58)
        .fwd(1)
        .box(61)
        .fwd(1)
        .box(50);

    return this.move('homemaker'); // return to where we started
};
var Drone = require('../drone/drone').Drone; 
Drone.extend('homemaker',homemaker);