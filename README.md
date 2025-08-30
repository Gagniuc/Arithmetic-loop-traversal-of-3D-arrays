# One for-loop 3D traversal with arithmetic operators

Ex. (94) - <i>3D traversal with one for-loop using only arithmetic operators</i>, is presented here in three programming languages: <a href="https://github.com/Gagniuc/Python-Coding-Examples-from-Simple-to-Complex">Python</a>, <a href="https://github.com/Gagniuc/MATLAB-Coding-Examples-from-Simple-to-Complex">MATLAB</a>, and <a href="https://github.com/Gagniuc/JavaScript-Coding-Examples-from-Simple-to-Complex">JavaScript</a>. Although the implementations differ in syntax, the underlying concept remains identical across all three versions. Each code sample is reproduced from its respective volume of the series <i>Coding Examples from Simple to Complex</i> (Springer, 2024). This parallel presentation allows readers to explore how the same computational idea can be expressed within different programming paradigms.

***

In this example, a 3D array <i>A</i> is defined, which represents a multi-dimensional structure containing strings and numbers. The code then initializes several variables, including <i>t</i> (a string for storing the result), <i>s</i> (the number of matrices or “layers” in <i>A</i>), <i>m</i> (the number of rows in each matrix), <i>n</i> (the number of columns in each matrix), and <i>i</i>, <i>j</i>, <i>d</i>, and <i>k</i> as iteration and indexing variables. A loop runs from 0 to <i>q</i>, where <i>q</i> is calculated as the product of <i>n</i> (number of columns), <i>m</i> (number of rows), and <i>s</i> (number of matrices), which effectively iterates through all elements in the 3D array <i>A</i>. Within the loop, the code calculates <i>k</i> as the modulo of <i>v</i> divided by the product of <i>m</i> and <i>n</i>. Variable <i>j</i> is calculated as the modulo of <i>v</i> divided by <i>n</i>, <i>i</i> is calculated as (<i>k</i> - <i>j</i>) divided by <i>n</i>, and <i>d</i> is calculated as (<i>v</i> - <i>k</i>) divided by the product of <i>m</i> and <i>n</i>. These calculations help determine the current position within the 3D array <i>A</i>. The code appends information to the <i>t</i> string for each iteration, showing the current index <i>v</i> and the corresponding value in the <i>A</i> array at the position [<i>d</i>][<i>i</i>][<i>j</i>]. A line break is also added to separate the entries. At the end of the loop, the code prints the contents of the t string. Thus, this code iterates over the entire 3D array <i>A</i> and prints the indices <i>d</i>, <i>i</i>, <i>j</i>, and the corresponding element from the array, effectively displaying the entire content of the 3D array with their indices. Nevertheless, the novelty here is represented by the way variables <i>i</i>, <i>j</i>, and <i>d</i> are computed in order to iterate over the elements of the 3D array <i>A</i>:


$$k = v \bmod (m \times n)$$
$$j = v \bmod n$$
$$i = \frac{k - j}{n}$$
$$d = \frac{v - k}{m \times n}$$


Namely, variable <i>k</i> represents the position within a matrix (subarray), and variable <i>i</i> is calculated as (<i>k</i> - <i>j</i>) / <i>n</i> (integer division by using the Python operator: “//”), which is the result of integer division between <i>k</i> - <i>j</i> and the number of columns <i>n</i>. Thus, it calculates the row index within the current matrix. Variable <i>j</i> is calculated as the remainder of <i>v</i> divided by the number of columns <i>n</i> (<i>j</i> = <i>v</i> % <i>n</i>). This gives us the column index within the current matrix. Variable <i>d</i> is calculated as (<i>v</i> - <i>k</i>) / (<i>m</i> × <i>n</i>), which is the result of integer division between (<i>v</i> - <i>k</i>) and the total number of elements in a matrix (<i>m</i> × <i>n</i>). Thus, it calculates the index of the current matrix in the 3D array.


## Example in Python:

```python
A = [
    [
        ["a", 55, 146],
        ["b", 34, 124],
        ["c", 96, 564],
        [100, 12, "d"],
    ],
    [
        ["e", 88, 146],
        ["f", 34, 124],
        ["g", 96, 564],
        [100, 12, "h"],
    ],
    [
        ["i", 88, 146],
        ["j", 34, 124],
        ["k", 96, 564],
        [100, 12, "k"],
    ],
    [
        ["m", 88, 146],
        ["n", 34, 124],
        ["o", 96, 564],
        [100, 12, "p"],
    ],
    [
        ["q", 88, 146],
        ["r", 34, 124],
        ["s", 96, 564],
        [100, 12, "t"],
    ]
    ]

t = ""

s = len(A)           # 5 matrices
m = len(A[0])        # 4 rows
n = len(A[0][0])     # 3 columns

i = 0
j = 0
d = 0
k = 0

q = n * m * s

for v in range(q):
    
    k = v % (m*n)
    
    j = v % n
    i = (k-j) // n
    d = (v-k) // (m*n)
    
    t += f"{v} A[{d}][{i}][{j}]="
    t += f"{A[d][i][j]}\n"

print(t)
``` 


## Example in Javascript:

```javascript
let A = [
        [
   ["a", 55, 146],
   ["b", 34, 124],
   ["c", 96, 564],
   [100, 12, "d"],
        ],
        [
   ["e", 88, 146],
   ["f", 34, 124],
   ["g", 96, 564],
   [100, 12, "h"],
        ],
        [
   ["i", 88, 146],
   ["j", 34, 124],
   ["k", 96, 564],
   [100, 12, "k"],
        ],
        [
   ["m", 88, 146],
   ["n", 34, 124],
   ["o", 96, 564],
   [100, 12, "p"],
        ],
        [
   ["q", 88, 146],
   ["r", 34, 124],
   ["s", 96, 564],
   [100, 12, "t"],
        ]
        ];

let t = "";

let s = A.length;       // 5 matrices
let m = A[0].length;    // 4 rows
let n = A[0][0].length; // 3 columns

let i = 0;
let j = 0;
let d = 0;
let k = 0;

let q = n * m * s;

for (let v = 0; v < q; v++){
    
   k = v % (m*n);
   
   j = v % n;
   i = (k-j) / n;
   d = (v-k) / (m*n);
   
   t += v + " A["+d+"]["+i+"]["+j+"]=";
   t += A[d][i][j] + "\n";
}

print(t);
``` 

## Example in Matlab:

```matlab
A = {
    {
        {'a', 55, 146},
        {'b', 34, 124},
        {'c', 96, 564},
        {100, 12, 'd'}
    },
    {
        {'e', 88, 146},
        {'f', 34, 124},
        {'g', 96, 564},
        {100, 12, 'h'}
    },
    {
        {'i', 88, 146},
        {'j', 34, 124},
        {'k', 96, 564},
        {100, 12, 'k'}
    },
    {
        {'m', 88, 146},
        {'n', 34, 124},
        {'o', 96, 564},
        {100, 12, 'p'}
    },
    {
        {'q', 88, 146},
        {'r', 34, 124},
        {'s', 96, 564},
        {100, 12, 't'}
    }
};

t = "";

s = size(A, 1);        % 5 matrices
m = size(A{1}, 1);     % 4 rows
n = size(A{1}{1}, 2);  % 3 columns

q = n * m * s;

for v = 0:(q-1)

    k = mod(v, m * n);

    j = mod(v, n) + 1;
    i = (k - j + 1) / n + 1;
    d = (v - k) / (m * n) + 1;

    t = t + sprintf('%d A{%d}{%d}{%d}=%s\n', ...
    v, d, i, j, mat2str(A{d}{i}{j}));
end

disp(t);
``` 


```text
Output:
0 A[0][0][0]=a
1 A[0][0][1]=55
2 A[0][0][2]=146
3 A[0][1][0]=b
4 A[0][1][1]=34
5 A[0][1][2]=124
6 A[0][2][0]=c
7 A[0][2][1]=96
8 A[0][2][2]=564
9 A[0][3][0]=100
10 A[0][3][1]=12
11 A[0][3][2]=d
12 A[1][0][0]=e
13 A[1][0][1]=88
14 A[1][0][2]=146
15 A[1][1][0]=f
16 A[1][1][1]=34
17 A[1][1][2]=124
18 A[1][2][0]=g
19 A[1][2][1]=96
20 A[1][2][2]=564
21 A[1][3][0]=100
22 A[1][3][1]=12
23 A[1][3][2]=h
24 A[2][0][0]=i
25 A[2][0][1]=88
26 A[2][0][2]=146
27 A[2][1][0]=j
28 A[2][1][1]=34
29 A[2][1][2]=124
30 A[2][2][0]=k
31 A[2][2][1]=96
32 A[2][2][2]=564
33 A[2][3][0]=100
34 A[2][3][1]=12
35 A[2][3][2]=k
36 A[3][0][0]=m
37 A[3][0][1]=88
38 A[3][0][2]=146
39 A[3][1][0]=n
40 A[3][1][1]=34
41 A[3][1][2]=124
42 A[3][2][0]=o
43 A[3][2][1]=96
44 A[3][2][2]=564
45 A[3][3][0]=100
46 A[3][3][1]=12
47 A[3][3][2]=p
48 A[4][0][0]=q
49 A[4][0][1]=88
50 A[4][0][2]=146
51 A[4][1][0]=r
52 A[4][1][1]=34
53 A[4][1][2]=124
54 A[4][2][0]=s
55 A[4][2][1]=96
56 A[4][2][2]=564
57 A[4][3][0]=100
58 A[4][3][1]=12
59 A[4][3][2]=t
```


## References

- <i>Paul A. Gagniuc. Coding Examples from Simple to Complex - Applications in Python, Springer, 2024, pp. 1-245.</i>
- <i>Paul A. Gagniuc. Coding Examples from Simple to Complex - Applications in MATLAB, Springer, 2024, pp. 1-255.</i>
- <i>Paul A. Gagniuc. Coding Examples from Simple to Complex - Applications in Javascript, Springer, 2024, pp. 1-240.</i>

***

