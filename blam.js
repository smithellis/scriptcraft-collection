var blam = function(blamcount) {
    var i ;
    if ( typeof blamcount == 'undefined' ) {
        blamcount = 5;
    }
    this.chkpt('blam'); // saves the drone position so it can return there later
    for ( i = 0; i < blamcount; i++ ) {
        this.box(0,4,4,1)
            .fwd(1)
    }
    return this.move('blam'); // return to where we started
};
var Drone = require('../drone/drone').Drone; 
Drone.extend('blam',blam);
