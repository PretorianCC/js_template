import { PerformanceObserver, performance } from 'perf_hooks';

const obs = new PerformanceObserver(
  (items) => { items.getEntries().forEach(
    (item) => { console.log(`${item.name} ${item.duration}`) }
  );}
);

obs.observe({entryTypes: ['measure']});

performance.mark('start');

for (let i = 0; i < 999; i++) {
  // Code measurement
  const a = 0;
}

performance.mark('end');
performance.measure('result', 'start', 'end');