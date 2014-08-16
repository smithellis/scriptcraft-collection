var keep = function(keepsize) {
    var i ;
    if ( typeof keepsize == 'undefined' ) {
        keepsize = 5;
    }
    this.chkpt('keep'); // saves the drone position so it can return there later
    this.box0(5,keepsize,keepsize,keepsize);
    return this.move('keep'); // return to where we started
    this.box(50).fwd(1).box(50);
};
var Drone = require('../drone/drone').Drone; 
Drone.extend('keep',keep);
