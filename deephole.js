var deephole = function(thedepth) {
    var i ;
    if ( typeof depth == 'undefined' ) {
        thedepth = 1;
    }
    this.chkpt('deephole'); // saves the drone position so it can return there later
    for ( i = 0; i < thedepth; i++ ) {
        this.down(10)
            .box(0,11,11,11)
    }
    return this.move('deephole'); // return to where we started
};
var Drone = require('../drone/drone').Drone; 
Drone.extend('deephole',deephole);
