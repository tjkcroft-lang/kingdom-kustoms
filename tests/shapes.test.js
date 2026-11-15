import test from "node:test";import assert from "node:assert/strict";import {shapes,shapeById,categories} from "../src/shapes.js";
test("catalogue has 250 or more editable vector entries",()=>assert.ok(shapes.length>=250));
test("every shape has a unique ID and SVG path",()=>{assert.equal(new Set(shapes.map(s=>s.id)).size,shapes.length);for(const s of shapes){assert.match(s.path,/^M/);assert.ok(s.name);assert.ok(categories.includes(s.category));assert.equal(shapeById(s.id),s)}});
test("catalogue supports searchable category variants",()=>{assert.ok(shapes.filter(s=>s.name.includes("Star")).length>5);assert.ok(shapes.filter(s=>s.category==="Geometry").length>0)});
