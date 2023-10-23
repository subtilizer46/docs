### Exercise: Calculating and Interpreting Correlation in Excel

#### Objective
Calculate and interpret the correlation between two sets of data points using Excel.

#### Exercise Steps

**1. Data Entry:**
   - Open Excel and create a new spreadsheet.
   - In `Column A`, enter the following numbers (which we'll say represent monthly sales):
     ```
     A2: 100
     A3: 150
     A4: 200
     A5: 250
     A6: 300
     ```
   - In `Column B`, enter these numbers (which we'll say represent advertising expenses):
     ```
     B2: 300
     B3: 250
     B4: 200
     B5: 150
     B6: 100
     ```
   
**2. Formula Usage:**
   - In `Cell C2`, type the following formula and press `Enter`:
     ```excel
     =CORREL(A2:A6, B2:B6)
     ```
   - After pressing `Enter`, Excel will calculate the correlation coefficient and display the value in `C2`.

**3. Interpretation:**
   - Check the value in `C2`.
   - Write down whether the correlation is positive, negative, or non-existent based on the value. Remember:
     - Closer to 1: Strong positive correlation
     - Closer to -1: Strong negative correlation
     - Around 0: Weak or no correlation

**4. Visual Representation (Optional):**
   - Highlight the data in columns `A` and `B`.
   - Navigate to the ribbon at the top, click on the `Insert` tab.
   - Select `Scatter` plot from the `Charts` group.
   - Observe how the points are distributed on the graph. If the correlation is negative, the points should generally form a downward slope.

#### Discussion
- **Question 1:** What is the correlation coefficient value in `C2`?
- **Question 2:** How would you interpret this in terms of the relationship between sales and advertising expenses?
- **Question 3:** Based on the scatter plot, do the visual data points confirm your findings from the correlation coefficient?

