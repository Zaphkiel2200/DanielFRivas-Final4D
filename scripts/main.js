LottieInteractivity.create({
  player: "#firstLottie",
  mode: "scroll",
  actions: [
    {
      visibility: [0, 3.5],
      type: "seek",
      transition: "linear",
    },
  ],
});

LottieInteractivity.create({
  player: "#secondLottie",
  mode: "scroll",
  actions: [
    {
      visibility: [0, 2.1],
      type: "seek",
      frames: [0, 100],
    },
  ],
});

  LottieInteractivity.create({
    player: "#thirdOneLottie",
    mode:"scroll",
    actions: [
      {
          visibility: [0, 0.5],
          type: "stop",
          frames: [0]
      },
      {
          visibility: [0.2,0.45],
          type: "seek",
          frames: [0, 50]
      },
      {
          visibility: [0.45,1.0],
          type: "loop",
          frames: [25, 50]
      }
    ]
  });

LottieInteractivity.create({
  player: "#thirdTwoLottie",
  mode: "scroll",
  actions: [
    {
      visibility: [0, 2],
      type: "seek",
      frames: [0, 130],
    },
  ],
});

LottieInteractivity.create({
  player: "#fourthLottie",
  mode: "scroll",
  actions: [
    {
      visibility: [0, 2.1],
      type: "seek",
      frames: [0, 130],
    },
  ],
});
