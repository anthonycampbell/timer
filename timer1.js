let args = process.argv.slice(2);
let t;
for (let i = 0; i < args.length; i++){
  t = Number(args[i]);
  if (t && typeof t === 'number' && !isNaN(t) && t >= 0){
    setTimeout(() => process.stdout.write('\x07'), 1000*args[i]);
  }
}