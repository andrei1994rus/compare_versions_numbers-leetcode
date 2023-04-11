# compare_versions_numbers-leetcode

Lib for compare versions (algorithm from [Leetcode](https://leetcode.com/problems/compare-version-numbers/description/)).


Compare returns:
- 1 (if v1>v2);
- 0 (if v1=v2);
- -1 (if v1<v2).

---
# Using in React

Example:

```
import {compareVersion} from 'compare_versions_numbers-leetcode';

...

compareVersion('1.0','1.1');
```

---
# Using in Vanilla JS

Example:

```
import pkg from 'compare_versions_numbers-leetcode';
const {compareVersion}=pkg;

...

compareVersion('1.0','1.1');
```


Alternative:

```
import pkg from 'compare_versions_numbers-leetcode';

...

pkg.compareVersion('1.0','1.1');
```

---
Created by Typescript and Webpack.