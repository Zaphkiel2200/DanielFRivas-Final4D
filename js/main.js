LottieInteractivity.create({
  player: "#introLottie",
  mode: "scroll",
  actions: [
    {
      visibility: [0, 1.5],
      type: "seek",
      frames: [0, 250],
      transition: "linear",
    },
  ],
});

LottieInteractivity.create({
  player: "#foolLottie",
  mode: "scroll",
  actions: [
    {
      visibility: [0, 2.1],
      type: "seek",
      frames: [0, 300],
    },
  ],
});

LottieInteractivity.create({
  player: "#tarotLottie",
  mode: "scroll",
  actions: [
    {
      visibility: [0, 2.1],
      type: "seek",
      frames: [0, 300],
    },
  ],
});

LottieInteractivity.create({
  player: "#pathwaysLottie",
  mode: "scroll",
  actions: [
    {
      visibility: [0, 2.1],
      type: "seek",
      frames: [0, 300],
    },
  ],
});

LottieInteractivity.create({
  player: "#beyondersLottie",
  mode: "scroll",
  actions: [
    {
      visibility: [0, 2.1],
      type: "seek",
      frames: [0, 300],
    },
  ],
});

document.addEventListener("DOMContentLoaded", () => {
  const initialMessage = document.createElement("div");
  initialMessage.textContent = "El mundo espera tu descubrimiento...";
  initialMessage.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Cinzel Decorative', cursive;
    font-size: 2.5rem;
    font-weight: 500;
    color: #E4DCC4;
    opacity: 0;
    animation: messageFade 3s ease-in-out forwards;
    z-index: 1000;
    text-align: center;
    text-shadow: 0 0 8px rgba(228, 220, 196, 0.5);
  `;

  const messageStyle = document.createElement("style");
  messageStyle.textContent = `
    @keyframes messageFade {
      0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.9);
      }
      20% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
      70% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
      85% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.05);
      }
      100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.95) translateY(-20px);
      }
    }
  `;
  document.head.appendChild(messageStyle);
  document.body.appendChild(initialMessage);

  setTimeout(() => {
    initialMessage.remove();
  }, 3000);
});