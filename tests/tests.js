/**
 * Created by jusopi on 7/8/2014.
 */
'use strict';

var bitflag = require( '../index' );
var assert = require( 'assert' );

describe( 'bitflag-utils', function()
{
    describe( '#hasFlags()', function()
    {
        it( 'should return true when the value is present', function()
        {
            var crntFlags = 1 << 0 | 1 << 1 | 1 << 2;
            assert.equal( true, bitflag.hasFlags( 1 << 1, crntFlags ) );
            assert.equal( false, bitflag.hasFlags( 1 << 4, crntFlags ) );
        } )
    } )

    describe( '#addFlags()', function()
    {
        it( 'should return an expected value of the added flags', function()
        {
            //add a single flag
            var crntFlags = 0;
            var expected = 1 << 0;
            assert.equal( expected, bitflag.addFlags( 1 << 0, crntFlags ) );

            //add multiple flags
            crntFlags = 0;
            expected = 1 << 1 | 1 << 3;
            assert.equal( expected, bitflag.addFlags( 1 << 1 | 1 << 3, crntFlags ) );

            //add a flag we already know is crnt
            crntFlags = 1 << 2 | 1 << 4;
            expected = 1 << 2 | 1 << 4;
            assert.equal( expected, bitflag.addFlags( 1 << 2, crntFlags ) );

            //add a mix of crnt and new flags
            crntFlags = 1 << 1 | 1 << 3;
            expected = 1 << 1 | 1 << 2 | 1 << 3 | 1 << 4;
            assert.equal( expected, bitflag.addFlags( 1 << 1 | 1 << 2 | 1 << 4, crntFlags ) )
        } )
    } )

    describe( '#delFlags()', function()
    {
        it( ' should return an expected value of deleted flags', function()
        {
            //del a single flag
            var crntFlags = 1 << 0 | 1 << 4 | 1 << 8;
            var expected = 1 << 0 | 1 << 8;
            assert.equal( expected, bitflag.delFlags( 1 << 4, crntFlags ) );

            //del a single flag we know doesn't exist
            crntFlags = expected;
            assert.equal( expected, bitflag.delFlags( 1 << 2, crntFlags ) );

            //del multiple known flags
            crntFlags = 1 << 0 | 1 << 1 | 1 << 2 | 1 << 4 | 1 << 5 | 1 << 6;
            expected = 1 << 0 | 1 << 2 | 1 << 4 | 1 << 6;
            assert.equal( expected, bitflag.delFlags( 1 << 1 | 1 << 5, crntFlags ) );
        } )
    } )
} )