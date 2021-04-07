import consumer from "./consumer"

// 「const appRoom =」を追記
const appRoom = consumer.subscriptions.create("RoomChannel", {
  // 省略

  received(data) {
    const messages = document.getElementById('messages');
    messages.insertAdjacentHTML('beforeend', data['message']);
  },

  speak: function(message) {
    console.log(message)
    return this.perform('speak', {message: message});
  }
});

window.addEventListener("keypress", function(e) {
  if (e.code === "Enter") {
    appRoom.speak(e.target.value);
    e.target.value = '';
    e.preventDefault();
  }
})