// Прекратить выполнять промис, если он уже не нужен.
import fetch from 'node-fetch';
import { setTimeout } from "timers/promises";

const cancelFetch = new AbortController();
const cancetTimeout = new AbortController();

const promiseOne = fetch("http://123.123.123.132", {timeout: 3000, signal: cancelFetch.signal});

console.time("fetch");

promiseOne.then(result => {
  console.log("finished");
})
.catch(err => {})
.finally(() => {})

const timeout = async () => {
  await setTimeout(1000, void 0, {
    signal: cancetTimeout.signal
  });
  console.log("Time is over");
  cancelFetch.abort();
}

await Promise.race([promiseOne, timeout()])
  .catch(err => {
    console.log(err.message);
  })

console.timeEnd("fetch");