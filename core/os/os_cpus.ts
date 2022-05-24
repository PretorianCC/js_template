import  {cpus} from 'os';

// Информация компьютера
console.log(cpus());
/* [
  {
    model: 'Intel(R) Core(TM) i3-2125 CPU @ 3.30GHz',
    speed: 3293,
    times: {
      user: 36543781,
      nice: 0,
      sys: 17562140,
      idle: 363879078,
      irq: 3085937
    }
  },
  {
    model: 'Intel(R) Core(TM) i3-2125 CPU @ 3.30GHz',
    speed: 3293,
    times: {
      user: 33662109,
      nice: 0,
      sys: 10004593,
      idle: 374318093,
      irq: 555312
    }
  },
  {
    model: 'Intel(R) Core(TM) i3-2125 CPU @ 3.30GHz',
    speed: 3293,
    times: {
      user: 40636140,
      nice: 0,
      sys: 11091953,
      idle: 366256703,
      irq: 269578
    }
  },
  {
    model: 'Intel(R) Core(TM) i3-2125 CPU @ 3.30GHz',
    speed: 3293,
    times: {
      user: 33492062,
      nice: 0,
      sys: 9579109,
      idle: 374913625,
      irq: 211062
    }
  }
] */