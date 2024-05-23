"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var places = ['Makkah', 'Iraq', 'London', 'Thailang', 'Greece'];
//original order
console.log(places);
//alphabetical order
console.log(__spreadArray([], places, true).sort());
//original order
console.log(places);
//reverse alphabetical order
console.log(__spreadArray([], places, true).sort().reverse());
//original order
console.log(places);
//reverse the list
console.log(places.reverse());
//reverse to original
console.log(places.reverse());
//reverse alphabetical order
console.log(places.sort());
console.log(places.sort().reverse());
