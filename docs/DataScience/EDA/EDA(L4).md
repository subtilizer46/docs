## Functions and techniques used in exploratory data analysis (EDA)

| EDA Task                           | Function/Technique                       | Description                                     |
|-----------------------------------|------------------------------------------|-------------------------------------------------|
| **Descriptive Statistics**         | `describe()`                              | Summary statistics for numerical columns        |
|                                   | `value_counts()`                          | Counts of unique values in categorical columns  |
| **Data Visualization**            | `matplotlib`, `seaborn`                  | Libraries for creating various types of plots   |
|                                   | `pairplot()`                              | Matrix of scatterplots to visualize relationships |
|                                   | `boxplot()`                               | Visualization of data distribution and outliers |
|                                   | `heatmap()`                               | Correlation visualization using colors          |
| **Handling Missing Data**         | `isnull()`                               | Identification of missing values                |
|                                   | `fillna()`                                | Filling missing values                           |
|                                   | `dropna()`                                | Removing rows or columns with missing data      |
| **Data Transformation**           | `apply()`                                | Applying a function to a column or DataFrame    |
|                                   | `map()`                                  | Mapping values in a column                      |
|                                   | `cut()` and `qcut()`                     | Binning numerical data                          |
| **Correlation Analysis**          | `corr()`                                 | Correlation matrix between numerical variables |
| **Outlier Detection**             | Statistical methods (z-scores, IQR)       | Identifying outliers                             |
|                                   | Visualization (box plots, scatter plots) | Visual inspection for outliers                   |
| **Feature Engineering**           | Creating and transforming features        | Enhancing data for modeling                      |
| **Data Distribution Analysis**    | Histograms, density plots                | Visualizing data distributions                   |
|                                   | Normality tests (Shapiro-Wilk)           | Checking for normality                            |
| **Categorical Data Analysis**     | Bar charts, frequency tables             | Exploring categorical variables                  |
|                                   | Chi-squared tests, contingency tables    | Assessing associations between categories        |
| **Time Series Analysis**          | Decomposition, autocorrelation plots     | Analyzing time series data                       |
| **Dimensionality Reduction**      | PCA, t-SNE                                | Reducing dimensionality of data                  |
| **Hypothesis Testing**            | t-tests, ANOVA, chi-squared tests        | Testing hypotheses and statistical significance  |
| **Geospatial Analysis**           | Geographic plots, heatmaps               | Visualizing and analyzing spatial data           |
|                                   | Spatial autocorrelation analysis         | Detecting spatial patterns                       |
| **Interactive Visualization**     | Plotly, Bokeh                            | Creating interactive visualizations              |

