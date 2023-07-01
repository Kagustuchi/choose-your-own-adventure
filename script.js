const rooms = [
  {
    id: "start",
    title: "Front Room",
    description: "You wake up in a office room flooded with, water you feel the swishing of water in your shoes with every step you take.",
    image: "images/front-room.jpeg",
    choices: [
      { text: "Go to elevator", nextRoom: "elevator" },
      { text: "Go to stairs", nextRoom: "stairs" },
    ],
  },
  {
    id: "elevator",
    title: "Flooded Elevator",
    description: "you choose to enter the elevator and find that there are only two buttons one for up and one for down you contemplate on your decision until you finally decide the doors start closing until there is no more light that reaches you.",
    image: "images/dark elevator.jpeg",
    choices: [{ text: "Go back to front room", nextRoom: "start" }],
  },
  {
    id: "stairs",
    title: "The ominous stairs",
    description: "You are at the stairs, are you sure you want to go down",
    image: "images/stairs.jpeg",
    choices: [
      { text: "Go to elevator", nextRoom: "elevator" },
      { text: "Go to front room", nextRoom: "start" },
    ],
  },
  {
    id: "flooded",
    title: "Flooded ",
    description: "you choose to enter the elevator and find that there are only two buttons one for up and one for down you contemplate on your decision until you finally decide the doors start closing until there is no more light that reaches you.",
    image: "images/dark elevator.jpeg",
    choices: [{ text: "Go back to front room", nextRoom: "start" }],
  },
];

const roomTitle = document.getElementById("room-title");
const roomImage = document.getElementById("room-image");
const roomDescription = document.getElementById("room-description");
const roomChoices = document.getElementById("room-choices");

function goToRoom(roomId) {
  const room = rooms.find((r) => r.id === roomId);

  roomTitle.textContent = room.title;
  roomImage.src = room.image;
  roomDescription.textContent = room.description;

  roomChoices.innerHTML = "";
  room.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => goToRoom(choice.nextRoom);
    roomChoices.appendChild(btn);
  });
}

goToRoom("start");
