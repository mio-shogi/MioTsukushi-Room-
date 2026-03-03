const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "2120989",
  key: "ac6233c881f474d2d6e3",
  secret: "dd26cdda20f3f3585f74",
  cluster: "ap3",
  useTLS: true
});

exports.handler = async (event) => {
  const body = JSON.parse(event.body);

  await pusher.trigger("shogi", "move", body);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "ok" })
  };
};