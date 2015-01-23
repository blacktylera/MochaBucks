/* global describe, it */
/* jshint expr: true */
'use strict';
var chai= require('chai');
var expect = chai.expect;



describe('Mocha', function(){
     it('should expect true', function(){
       expect(true).to.be.true;
       expect(false).to.be.false;
    });
  });


