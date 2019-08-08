// Task: Implement a class named 'Ranges'
// Example of a range [1, 4] - includes integers: 1, 2, 3, and 4.
// Example of a list: [1, 4], [109, 206], [400, 600]
class Ranges {
  constructor() {
    this.list = [];
  }

  addRangeToList() {
    // this.list.reduce(
    //   (acc, range) => {
    //     acc.push(range);

    //     return acc;
    //   },
    //   [this.list[0]]
    // );
    this.list = this.list.reduce(
      (acc, range) => {
        if (acc[acc.length - 1][1] + 1 < range[0]) {
          acc.push(range);
        } else if (acc[acc.length - 1][1] < range[1]) {
          acc[acc.length - 1][1] = range[1];
        }

        return acc;
      },
      [this.list[0]]
    );
  }
  /**
   * Adds a range to the list
   */
  add(range) {
    this.list.push(range);
    this.addRangeToList();
  }
  /**
   * Removes a range from the list
   */
  remove(range) {
    // this.list.reduce((acc, [start, fin]) => {
    //   if (range[0] < start && range[1] > fin) {
    //     return acc;
    //   }
    //   //   return acc;
    // }, []);
    this.list = this.list.reduce((acc, [start, end]) => {
      if (range[0] < start && range[1] > end) {
        return acc;
      }

      if (start < range[0] && range[1] < end) {
        acc.push([start, range[0] - 1]);
        acc.push([range[1] + 1, end]);
      } else if (range[0] <= start) {
        acc.push([range[1] + 1, end]);
      } else if (range[0] <= end) {
        acc.push([start, range[0] - 1]);
      } else {
        acc.push([start, end]);
      }

      return acc;
    }, []);
  }
  /**
   * Prints out the list of ranges
   */
  print() {
    return console.log(
      "Display: " + this.list.map(num => `[${num}]`).join(" ")
    );
  }
}
// Example
const r = new Ranges();
r.add([1, 4]);
r.print();
// Should display: [1, 4]
r.add([10, 20]);
r.print();
// Should display: [1, 4] [10, 20]
r.add([10, 10]);
r.print();
// Should display: [1, 4] [10, 20]
r.add([21, 21]);
r.print();
// Should display: [1, 4] [10, 21]
r.add([2, 4]);
r.print();
// Should display: [1, 4] [10, 21]
r.add([3, 8]);
r.print();
// Should display: [1, 8] [10, 21]
r.remove([10, 10]);
r.print();
// Should display: [1, 8] [11, 21]
r.remove([10, 11]);
r.print();
// Should display: [1, 8] [12, 21]
r.remove([15, 17]);
r.print();
// Should display: [1, 8] [12, 14] [18, 21]
r.remove([3, 19]);
r.print();
// Should display: [1, 2] [20, 21]
