### Covariance

Covariance measures how two variables change together. If the covariance is positive, the variables tend to increase together, if it's negative, when one variable increases, the other tends to decrease, and if it's around zero, it indicates that there is no linear relationship between the variables.

### Example Data:

Let's consider two variables: the number of hours studied and the scores obtained by students.

```plaintext
| Hours Studied | Score Obtained |
|---------------|---------------|
| 1             | 50            |
| 2             | 60            |
| 3             | 70            |
| 4             | 80            |
| 5             | 90            |
```

We'll insert this data into Excel as follows:

```plaintext
A     |  B
------------ 
1     |  50
2     |  60
3     |  70
4     |  80
5     |  90
```

Here, column A represents hours studied, and column B represents scores obtained.

### Calculating Covariance in Excel:

#### Step 1: Enter Data
Enter the data as shown above in the respective cells of an Excel worksheet.

#### Step 2: Use the COVARIANCE.S Formula

The syntax for the covariance formula in Excel is:
```excel
=COVARIANCE.S(array1, array2)
```
Where `array1` and `array2` are the two sets of data for which you want to calculate covariance.

##### Applying Formula:
In a new cell (let's use C1), write the following formula and press enter:
```excel
=COVARIANCE.S(A1:A5, B1:B5)
```

#### Step 3: Interpret the Result
- If the result is positive, it means that the variables tend to increase/decrease together.
- If it’s negative, it indicates that as one variable increases, the other tends to decrease.
- A result close to 0 indicates no linear relationship between variables.

### Note:
While covariance gives you the direction of the relationship between two variables, it doesn’t indicate the strength of the relationship. Correlation is a better measure when you need to understand the strength of the relationship between two variables.

For example we got result as -600

Negative Covariance (like -600): Indicates that as one variable increases, the other variable tends to decrease, signaling an inverse or negative relationship between the two variables. For example, if the covariance between variables X and Y is -600, it suggests that higher values of X tend to be associated with lower values of Y, and vice versa. The magnitude of -600 does not tell you much by itself, but comparing it to the covariance between other pairs of variables can give some context.