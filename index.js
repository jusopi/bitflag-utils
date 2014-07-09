/**
 * Created by jusopi on 1/8/2013.
 */
"use strict";

module.exports = {

    hasFlags: function( flagsToCheckFor, currentFlags )
    {
        return flagsToCheckFor == (currentFlags & flagsToCheckFor);
    },

    addFlags: function( toAdd, currentFlags )
    {
        return toAdd | currentFlags;
    },

    delFlags: function( toDel, currentFlags )
    {
        return currentFlags & ~toDel;
    }

};