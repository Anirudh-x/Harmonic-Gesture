function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./model/0001.png
     ./model/0002.png
     ./model/0003.png
     ./model/0004.png
     ./model/0005.png
     ./model/0006.png
     ./model/0007.png
     ./model/0008.png
     ./model/0009.png
     ./model/0010.png
     ./model/0011.png
     ./model/0012.png
     ./model/0013.png
     ./model/0014.png
     ./model/0015.png
     ./model/0016.png
     ./model/0017.png
     ./model/0018.png
     ./model/0019.png
     ./model/0020.png
     ./model/0021.png
     ./model/0022.png
     ./model/0023.png
     ./model/0024.png
     ./model/0025.png
     ./model/0026.png
     ./model/0027.png
     ./model/0028.png
     ./model/0029.png
     ./model/0030.png
     ./model/0031.png
     ./model/0032.png
     ./model/0033.png
     ./model/0034.png
     ./model/0035.png
     ./model/0036.png
     ./model/0037.png
     ./model/0038.png
     ./model/0039.png
     ./model/0040.png
     ./model/0041.png
     ./model/0042.png
     ./model/0043.png
     ./model/0044.png
     ./model/0045.png
     ./model/0046.png
     ./model/0047.png
     ./model/0048.png
     ./model/0049.png
     ./model/0050.png
     ./model/0051.png
     ./model/0052.png
     ./model/0053.png
     ./model/0054.png
     ./model/0055.png
     ./model/0056.png
     ./model/0057.png
     ./model/0058.png
     ./model/0059.png
     ./model/0060.png
     ./model/0061.png
     ./model/0062.png
     ./model/0063.png
     ./model/0064.png
     ./model/0065.png
     ./model/0066.png
     ./model/0067.png
     ./model/0068.png
     ./model/0069.png
     ./model/0070.png
     ./model/0071.png
     ./model/0072.png
     ./model/0073.png
     ./model/0074.png
     ./model/0075.png
     ./model/0076.png
     ./model/0077.png
     ./model/0078.png
     ./model/0079.png
     ./model/0080.png
     ./model/0081.png
     ./model/0082.png
     ./model/0083.png
     ./model/0084.png
     ./model/0085.png
     ./model/0086.png
     ./model/0087.png
     ./model/0088.png
     ./model/0089.png
     ./model/0090.png
     ./model/0091.png
     ./model/0092.png
     ./model/0093.png
     ./model/0094.png
     ./model/0095.png
     ./model/0096.png
     ./model/0097.png
     ./model/0098.png
     ./model/0099.png
     ./model/0100.png
     ./model/0101.png
     ./model/0102.png
     ./model/0103.png
     ./model/0104.png
     ./model/0105.png
     ./model/0106.png
     ./model/0107.png
     ./model/0108.png
     ./model/0109.png
     ./model/0110.png
     ./model/0111.png
     ./model/0112.png
     ./model/0113.png
     ./model/0114.png
     ./model/0115.png
     ./model/0116.png
     ./model/0117.png
     ./model/0118.png
     ./model/0119.png
     ./model/0120.png
     ./model/0121.png
     ./model/0122.png
     ./model/0123.png
     ./model/0124.png
     ./model/0125.png
     ./model/0126.png
     ./model/0127.png
     ./model/0128.png
     ./model/0129.png
     ./model/0130.png
     ./model/0131.png
     ./model/0132.png
     ./model/0133.png
     ./model/0134.png
     ./model/0135.png
     ./model/0136.png
     ./model/0137.png
     ./model/0138.png
     ./model/0139.png
     ./model/0140.png
     ./model/0141.png
     ./model/0142.png
     ./model/0143.png
     ./model/0144.png
     ./model/0145.png
     ./model/0146.png
     ./model/0147.png
     ./model/0148.png
     ./model/0149.png
     ./model/0150.png
     ./model/0151.png
     ./model/0152.png
     ./model/0153.png
     ./model/0154.png
     ./model/0155.png
     ./model/0156.png
     ./model/0157.png
     ./model/0158.png
     ./model/0159.png
     ./model/0160.png
     ./model/0161.png
     ./model/0162.png
     ./model/0163.png
     ./model/0164.png
     ./model/0165.png
     ./model/0166.png
     ./model/0167.png
     ./model/0168.png
     ./model/0169.png
     ./model/0170.png
     ./model/0171.png
     ./model/0172.png
     ./model/0173.png
     ./model/0174.png
     ./model/0175.png
     ./model/0176.png
     ./model/0177.png
     ./model/0178.png
     ./model/0179.png
     ./model/0180.png
     ./model/0181.png
     ./model/0182.png
     ./model/0183.png
     ./model/0184.png
     ./model/0185.png
     ./model/0186.png
     ./model/0187.png
     ./model/0188.png
     ./model/0189.png
     ./model/0190.png
     ./model/0191.png
     ./model/0192.png
     ./model/0193.png
     ./model/0194.png
     ./model/0195.png
     ./model/0196.png
     ./model/0197.png
     ./model/0198.png
     ./model/0199.png
     ./model/0200.png
     ./model/0201.png
     ./model/0202.png
     ./model/0203.png
     ./model/0204.png
     ./model/0205.png
     ./model/0206.png
     ./model/0207.png
     ./model/0208.png
     ./model/0209.png
     ./model/0210.png
     ./model/0211.png
     ./model/0212.png
     ./model/0213.png
     ./model/0214.png
     ./model/0215.png
     ./model/0216.png
     ./model/0217.png
     ./model/0218.png
     ./model/0219.png
     ./model/0220.png
     ./model/0221.png
     ./model/0222.png
     ./model/0223.png
     ./model/0224.png
     ./model/0225.png
     ./model/0226.png
     ./model/0227.png
     ./model/0228.png
     ./model/0229.png
     ./model/0230.png
     ./model/0231.png
     ./model/0232.png
     ./model/0233.png
     ./model/0234.png
     ./model/0235.png
     ./model/0236.png
     ./model/0237.png
     ./model/0238.png
     ./model/0239.png
     ./model/0240.png
     ./model/0241.png
     ./model/0242.png
     ./model/0243.png
     ./model/0244.png
     ./model/0245.png
     ./model/0246.png
     ./model/0247.png
     ./model/0248.png
     ./model/0249.png
     ./model/0250.png
     ./model/0251.png
     ./model/0252.png
     ./model/0253.png
     ./model/0254.png
     ./model/0255.png
     ./model/0256.png
     ./model/0257.png
     ./model/0258.png
     ./model/0259.png
     ./model/0260.png
     ./model/0261.png
     ./model/0262.png
     ./model/0263.png
     ./model/0264.png
     ./model/0265.png
     ./model/0266.png
     ./model/0267.png
     ./model/0268.png
     ./model/0269.png
     ./model/0270.png
     ./model/0271.png
     ./model/0272.png
     ./model/0273.png
     ./model/0274.png
     ./model/0275.png
     ./model/0276.png
     ./model/0277.png
     ./model/0278.png
     ./model/0279.png
     ./model/0280.png
     ./model/0281.png
     ./model/0282.png
     ./model/0283.png
     ./model/0284.png
     ./model/0285.png
     ./model/0286.png
     ./model/0287.png
     ./model/0288.png
     ./model/0289.png
     ./model/0290.png
     ./model/0291.png
     ./model/0292.png
     ./model/0293.png
     ./model/0294.png
     ./model/0295.png
     ./model/0296.png
     ./model/0297.png
     ./model/0298.png
     ./model/0299.png
     ./model/0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})