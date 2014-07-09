#bitflag-utils

A small javascript utility API for working w. bitflags.

##install
```
npm install bitflag-utils --save
```

##require
```
var bitflagUtils = require('bitflag-utils');
```

##APIs
###hasFlags
####params
* flagsToCheckFor - the flag(s) to check for against the current flag(s).
* currentFlags - the current flag(s) to check against.

####returns
boolean - true if the flag(s) were present or false otherwise.

####example
```
var crntFlags = 1 << 0 | 1 << 1 | 1 << 4;
bitflagUtils.hasFlags( 1 << 1, crntFlags );//returns true;
```

###addFlags
####params
* toAdd - the flag(s) to add to the current flag(s).
* currentFlags - the current flag(s) to add to.

####returns
number - a number value representing the current flag(s) and those added to it.

####example
```
var crntFlags = 1 << 0 | 1 << 1 | 1 << 4;
bitflagUtils.addFlags( 1 << 2, crntFlags );//returns 1 << 0 | 1 << 1 | 1 << 2 | 1 << 4
```

###delFlags
####params
* toDel - the flag(s) to remove from the current flag(s).
* currentFlags - the current flag(s) to remove from.

####returns
number - a number value representing the current flag(s) and those removed from it.

####example
```
var crntFlags = 1 << 0 | 1 << 1 | 1 << 4;
bitflagUtils.delFlags( 1 << 1, crntFlags ); //returns 1 << 0 | 1 << 4;
```