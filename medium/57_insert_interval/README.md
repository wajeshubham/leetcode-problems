## MERGE INTERVAL

Leetcode link: https://leetcode.com/problems/merge-intervals/description/

Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping _intervals_, and return an array of the non-overlapping _intervals_ that cover all the _intervals_ in the input.

Example 1:

```
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
```

Example 2:

```
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
```

Constraints:

```
1 <= intervals.length <= 10^4
intervals[i].length == 2
0 <= starti <= endi <= 10^4
```
