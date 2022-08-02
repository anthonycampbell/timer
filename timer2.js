let t;
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
stdin.on('data', (key) => {
  if (key === '\u0003') process.exit();
  if (key === 'b') process.stdout.write('beep!\n\x07');
  t = Number(key);
  if (t && typeof t === 'number' && !isNaN(t) && t >= 0 && t < 10){
    setTimeout(() => process.stdout.write(t+' second beep!\n\x07'), t*1000);
  }
});

