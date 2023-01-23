/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {
  const adjList = {}; // adjList to keep track of the hierarchy

  // fill each index as a key in adjList with empty array
  new Array(n).fill(0).map((_, i) => (adjList[i] = []));

  // map the hierarchy inside adjList with each manager having it's employees
  for (let i = 0; i < manager.length; i++) {
    if (manager[i] === -1) continue;
    adjList[manager[i]].push(i);
  }

  const dfs = (currentEmployee) => {
    // keep the initial time as 0 as we are going for DFS
    // we will first traverse through the adjList
    let time = 0;

    for (let emp of adjList[currentEmployee]) {
      // first we will calculate the childTime by recursively calling the dfs method with child of currentEmployee
      let childTime = dfs(emp);
      // we will ASSIGN a max between time and childTime instead of ADDING it. Because the news will spread parallelly below each manager

      // For example if manager has 3 employees below it, the news will spread in parallel between those three employees
      // so absolute time to spread that news will be time taken by an employee with maximum informTime

      // for example consider following hierarchy
      //                    4
      //                  / | \
      //                3   |  6
      //                    5
      // If node 3 takes "4" minutes, node 5 takes "10" minutes and node 6 takes "7" minutes to inform
      // we will consider time taken by employees under node 4 (parent node) is "10" minutes. Because, 4, 5 and 6 will spread news simultaneously
      // So while 3 and 6 has already shared the news after 4 and 7 minutes respectively, node 5 is still spreading the info
      // So we consider 10 as an absolute time taken to spread information under node 4

      // Thats why we only consider max time taken between current max time and childTime
      time = Math.max(childTime, time);
    }
    // Above we calculated the time taken by the employees UNDER currentEmployee
    // We need to consider time taken by the currentEmployee as well so we will sum up the `time` with current employee's inform time
    time += informTime[currentEmployee];
    return time;
  };
  // start the dfs with head being the source of the information
  return dfs(headID);
};
