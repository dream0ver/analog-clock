const renderClock = () => {
  const clock = document.createElement("div")
  const hour_hand = document.createElement("div")
  const minute_hand = document.createElement("div")
  const second_hand = document.createElement("div")
  clock.classList.add("clock")
  hour_hand.id = "hour_hand"
  minute_hand.id = "minute_hand"
  second_hand.id = "second_hand"
  clock.append(hour_hand, minute_hand, second_hand)
  document.body.appendChild(clock)
}
const set_second_hand = seconds => {
  const second_hand = document.getElementById("second_hand")
  const angle = 6 * seconds
  second_hand.style.transform = `rotate(${angle + 90}deg)`
}
const set_minute_hand = minutes => {
  const minute_hand = document.getElementById("minute_hand")
  const angle = 6 * minutes
  minute_hand.style.transform = `rotate(${angle + 90}deg)`
}
const set_hour_hand = hours => {
  const hour_hand = document.getElementById("hour_hand")
  const angle = 30 * hours
  hour_hand.style.transform = `rotate(${angle + 90}deg)`
}
const updateTime = () => {
  const date = new Date()
  const seconds = date.getSeconds()
  const minutes = date.getMinutes()
  const hours = date.getHours()
  set_second_hand(seconds)
  set_minute_hand(minutes)
  set_hour_hand(hours)
}
renderClock()
updateTime()
setInterval(updateTime, 1000)
