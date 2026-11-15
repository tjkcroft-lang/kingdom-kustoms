import test from "node:test";import assert from "node:assert/strict";import {getPrintArea,printProfiles,outputPixels,effectiveDpi,validateArt,validateMethod,clamp,SIDES} from "../src/printProfiles.js";
test("all catalogued garments expose four print sides",()=>{for(const profile of Object.values(printProfiles))for(const side of SIDES)assert.ok(profile.areas[side]?.every(n=>n>0))});
test("staple tee provisional front maximum",()=>assert.deepEqual(getPrintArea("Staple Tee","Front"),[360,460]));
test("300 dpi pixel conversion",()=>assert.equal(outputPixels(25.4),300));
test("DPI calculation",()=>assert.equal(effectiveDpi(300,25.4),300));
test("quality checks",()=>{assert.equal(validateArt({width:3600,height:4600,printWidthMm:300,printHeightMm:390}).status,"good");assert.equal(validateArt({width:400,height:400,printWidthMm:300,printHeightMm:300}).status,"low");assert.equal(validateArt({}).status,"missing")});
test("screen minimum warning",()=>assert.match(validateMethod("Screen Printing",1),/minimum/));
test("combination requires review",()=>assert.match(validateMethod("Combination",100),/review/));
test("clamp",()=>assert.equal(clamp(120,0,100),100));
