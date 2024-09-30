#!/usr/bin/env node

const [pxValue, baseSize = 16] = process.argv.slice(2).map(Number);

if (!pxValue) {
  console.log("Usage: px-to-em <px> [baseSize]\nExample: px-to-em 16 16");
  process.exit(1);
}

const emValue = pxValue / baseSize;
console.log(`${pxValue}px = ${emValue}em (Base: ${baseSize}px)`);