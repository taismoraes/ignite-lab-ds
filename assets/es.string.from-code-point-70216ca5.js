var s=Object.defineProperty;var a=(t,e)=>s(t,"name",{value:e,configurable:!0});import{_ as f,h as g,a8 as m}from"./es.object.get-own-property-descriptor-1b90401a.js";var u=f,C=g,h=m,x=RangeError,i=String.fromCharCode,v=String.fromCodePoint,l=C([].join),c=!!v&&v.length!=1;u({target:"String",stat:!0,arity:1,forced:c},{fromCodePoint:a(function(e){for(var n=[],d=arguments.length,o=0,r;d>o;){if(r=+arguments[o++],h(r,1114111)!==r)throw x(r+" is not a valid code point");n[o]=r<65536?i(r):i(((r-=65536)>>10)+55296,r%1024+56320)}return l(n,"")},"fromCodePoint")});
//# sourceMappingURL=es.string.from-code-point-70216ca5.js.map
