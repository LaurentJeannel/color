//const RGBToHSL = (r, g, b) => {
var hsv = (rgb) => {console.log(rgb)
  let rdif;
  let gdif;
  let bdif;
  let h;
  let s;

  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const v = Math.max(r, g, b);
  const diff = v - Math.min(r, g, b);
  const diffc = function (c) {
    return (v - c) / 6 / diff + 1 / 2;
  };

  if (diff === 0) {
    h = 0;
    s = 0;
  } else {
    s = diff / v;
    rdif = diffc(r);
    gdif = diffc(g);
    bdif = diffc(b);

    if (r === v) {
      h = bdif - gdif;
    } else if (g === v) {
      h = (1 / 3) + rdif - bdif;
    } else if (b === v) {
      h = (2 / 3) + gdif - rdif;
    }

    if (h < 0) {
      h += 1;
    } else if (h > 1) {
      h -= 1;
    }
  }
  //console.log(h,s,v)
 
  h=h*360
  s=s*1000
  v1=v*1000

  console.log(Math.round(h).toString(16).padStart(4, '0') + (s).toString(16).padStart(4, '0') +(v1).toString(16).padStart(4, '0')) ;
};
hsv([0,0,255])



var rgb = function (args) {console.log(args)
  const integer = ((Math.round(args[0]) & 0xFF) << 16)
    + ((Math.round(args[1]) & 0xFF) << 8)
    + (Math.round(args[2]) & 0xFF);

  const string = integer.toString(16).toUpperCase();
  //return '000000'.substring(string.length) + string;
  console.log('00000000'+'000000'.substring(string.length) + string)
};


rgb([255, 255, 0])