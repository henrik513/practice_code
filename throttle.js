function throttle(func, timeout) {

    var _now = new Date().getTime();
    window.previous = window.previous || 0;
    
    if( _now - window.previous < timeout ){
    	  console.log('throttled');
        return;
    }
		window.previous = new Date().getTime();
    func();
}