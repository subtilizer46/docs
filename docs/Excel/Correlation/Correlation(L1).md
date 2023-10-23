### Creating Two Simple Datasets:

#### Dataset 1: 
Age of 5 people and their monthly spending on online shopping.
```
Age:        [23, 35, 45, 50, 60]
Spending:   [200, 180, 150, 120, 100]
```

#### Dataset 2:
Hours spent studying and exam scores of 5 students.
```
Study Hours: [2, 4, 6, 8, 10]
Exam Score:  [50, 65, 75, 90, 95]
```

### Explaining Correlation:

Correlation is a statistical measure that tells us how strongly two variables are related to each other. Correlation values range from -1 to 1.

- **Positive Correlation (0 to 1):** When one variable increases, the other variable tends to also increase.
- **Negative Correlation (0 to -1):** When one variable increases, the other variable tends to decrease.
- **No Correlation (0):** No relationship between the variables.

### Analysing the Correlation for Datasets:

#### Dataset 1 Analysis:

1. **Variables:**
   - X: Age
   - Y: Monthly Spending

2. **Observation:**
   - As age **increases**, spending **decreases**.

3. **Type of Correlation:**
   - There appears to be a **negative correlation** between age and monthly spending on online shopping because as one variable increases (age), the other variable (spending) tends to decrease.

#### Dataset 2 Analysis:

1. **Variables:**
   - X: Study Hours
   - Y: Exam Score

2. **Observation:**
   - As study hours **increase**, exam scores **increase**.

3. **Type of Correlation:**
   - There appears to be a **positive correlation** between study hours and exam scores because as one variable increases (study hours), the other variable (exam scores) also tends to increase.


### Syntax:
```excel
=CORREL(array1, array2)
```
`array1` and `array2` are the ranges of data for which you want to calculate the correlation.

### Example Using the Given Datasets:

#### Dataset 1:
```plaintext
A     |  B
------------ 
23    |  200
35    |  180
45    |  150
50    |  120
60    |  100
```

#### Dataset 2:
```plaintext
C     |  D
------------ 
2     |  50
4     |  65
6     |  75
8     |  90
10    |  95
```

### Excel Formula to Find Correlation:

#### For Dataset 1:

In a new cell (let's say E1), write the formula:
```excel
=CORREL(A1:A5, B1:B5)
```

#### For Dataset 2:

In a new cell (let's say E2), write the formula:
```excel
=CORREL(C1:C5, D1:D5)
```

### Explanation:

- For Dataset 1, Excel will calculate the correlation coefficient between the ages (A1:A5) and their corresponding monthly spending (B1:B5).
- For Dataset 2, it will calculate the correlation coefficient between the study hours (C1:C5) and the corresponding exam scores (D1:D5).

After inputting the formulas, hit "Enter" to get the correlation coefficient for each dataset. A negative number represents a negative correlation, a positive number represents a positive correlation, and a number close to 0 indicates little to no correlation. 
