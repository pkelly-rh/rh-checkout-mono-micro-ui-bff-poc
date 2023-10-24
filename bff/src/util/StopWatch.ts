/**
 * Stop Watch
 * ```
 *         _____
 *      _.'_____`._
 *    .'.-'  12 `-.`.
 *   /,' 11      1 `.\
 *  // 10      /   2 \\
 * ;;         /       ::
 * || 9      O ---- 3 ||
 * ::                 ;;
 *  \\ 8    R H    4 //
 *   \`. 7       5 ,'/
 *    '.`-.__6__.-'.'
 *     ((-._____.-))
 *     _))       ((_
 *    '--'       '--'
 * ```
 */
export class StopWatch {
  constructor() {
    this.startTime = process.hrtime();
    this.id = String(Math.floor(Math.random() * 10000));
  }
  getTime() {
    const totalTime = process.hrtime(this.startTime);
    const prevElapsed = this.elapsed;
    this.elapsed = Math.trunc(totalTime[0] * 1000 + totalTime[1] / 1e6);
    this.split = this.elapsed - prevElapsed;
    return {
      split: this.split,
      elapsed: this.elapsed
    };
  }
  /** 100ms elapsed=500ms */
  time() {
    const { split, elapsed } = this.getTime();
    return `${split}ms elapsed=${elapsed}ms id=${this.id}`;
  }
  startTime: [number, number];
  elapsed: number = 0;
  split: number = 0;
  id: string;
}
