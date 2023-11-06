## 003_Example : EDA(L3)

```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Create a DataFrame from the dictionary
housing_data = [
    {
        'price': 250000,
        'sqft': 1800,
        'bedrooms': 3,
        'bathrooms': 2,
        'neighborhood': 'Suburban',
        'year_built': 1995,
    },
    {
        'price': 350000,
        'sqft': 2200,
        'bedrooms': 4,
        'bathrooms': 3,
        'neighborhood': 'Urban',
        'year_built': 2000,
    },
    {
        'price': 420000,
        'sqft': 2600,
        'bedrooms': 4,
        'bathrooms': 3.5,
        'neighborhood': 'Suburban',
        'year_built': 2010,
    },
    {
        'price': 280000,
        'sqft': 1600,
        'bedrooms': 3,
        'bathrooms': 2,
        'neighborhood': 'Rural',
        'year_built': 1980,
    },
    {
        'price': 320000,
        'sqft': 2000,
        'bedrooms': 4,
        'bathrooms': 2.5,
        'neighborhood': 'Suburban',
        'year_built': 1998,
    },
    {
        'price': 450000,
        'sqft': 2800,
        'bedrooms': 5,
        'bathrooms': 3,
        'neighborhood': 'Urban',
        'year_built': 2005,
    },
    {
        'price': 380000,
        'sqft': 2400,
        'bedrooms': 3,
        'bathrooms': 2.5,
        'neighborhood': 'Suburban',
        'year_built': 2002,
    },
    {
        'price': 300000,
        'sqft': 1800,
        'bedrooms': 3,
        'bathrooms': 2,
        'neighborhood': 'Urban',
        'year_built': 1992,
    },
    {
        'price': 270000,
        'sqft': 1600,
        'bedrooms': 3,
        'bathrooms': 2,
        'neighborhood': 'Rural',
        'year_built': 1975,
    },
    {
        'price': 360000,
        'sqft': 2200,
        'bedrooms': 4,
        'bathrooms': 3,
        'neighborhood': 'Suburban',
        'year_built': 2001,
    },
    {
        'price': 410000,
        'sqft': 2500,
        'bedrooms': 4,
        'bathrooms': 3,
        'neighborhood': 'Urban',
        'year_built': 2012,
    },
    {
        'price': 290000,
        'sqft': 1700,
        'bedrooms': 3,
        'bathrooms': 2.5,
        'neighborhood': 'Suburban',
        'year_built': 1996,
    },
    {
        'price': 240000,
        'sqft': 1500,
        'bedrooms': 2,
        'bathrooms': 2,
        'neighborhood': 'Rural',
        'year_built': 1985,
    },
    {
        'price': 320000,
        'sqft': 1900,
        'bedrooms': 3,
        'bathrooms': 2.5,
        'neighborhood': 'Urban',
        'year_built': 1999,
    },
    {
        'price': 370000,
        'sqft': 2300,
        'bedrooms': 4,
        'bathrooms': 3,
        'neighborhood': 'Suburban',
        'year_built': 2003,
    },
    {
        'price': 260000,
        'sqft': 1700,
        'bedrooms': 2,
        'bathrooms': 1.5,
        'neighborhood': 'Rural',
        'year_built': 1978,
    },
    {
        'price': 335000,
        'sqft': 2100,
        'bedrooms': 3,
        'bathrooms': 2.5,
        'neighborhood': 'Urban',
        'year_built': 2007,
    },
    {
        'price': 310000,
        'sqft': 2000,
        'bedrooms': 3,
        'bathrooms': 2,
        'neighborhood': 'Suburban',
        'year_built': 1997,
    },
    {
        'price': 280000,
        'sqft': 1600,
        'bedrooms': 3,
        'bathrooms': 2,
        'neighborhood': 'Rural',
        'year_built': 1983,
    },
    {
        'price': 400000,
        'sqft': 2500,
        'bedrooms': 4,
        'bathrooms': 3,
        'neighborhood': 'Urban',
        'year_built': 2015,
    }
]


df = pd.DataFrame(housing_data)

# 1. Check the first few rows of the dataset
print("First few rows of the dataset:")
print(df.head())

# 2. Get summary statistics of numeric columns
print("\nSummary statistics:")
print(df.describe())

# 3. Check for missing values
print("\nMissing values:")
print(df.isnull().sum())

# 4. Visualize data using histograms
plt.figure(figsize=(12, 8))

# Histogram of 'price'
plt.subplot(2, 2, 1)
sns.histplot(df['price'], bins=20, kde=True)
plt.title('Histogram of House Prices')
plt.xlabel('Price')
plt.ylabel('Count')

# Histogram of 'sqft'
plt.subplot(2, 2, 2)
sns.histplot(df['sqft'], bins=20, kde=True)
plt.title('Histogram of Square Footage')
plt.xlabel('Square Footage')
plt.ylabel('Count')

# Histogram of 'bedrooms'
plt.subplot(2, 2, 3)
sns.countplot(data=df, x='bedrooms')
plt.title('Number of Bedrooms')
plt.xlabel('Bedrooms')
plt.ylabel('Count')

# Histogram of 'bathrooms'
plt.subplot(2, 2, 4)
sns.countplot(data=df, x='bathrooms')
plt.title('Number of Bathrooms')
plt.xlabel('Bathrooms')
plt.ylabel('Count')

plt.tight_layout()
plt.show()

# 5. Visualize data using box plots
plt.figure(figsize=(12, 6))

# Box plot of 'price' by 'neighborhood'
plt.subplot(1, 2, 1)
sns.boxplot(data=df, x='neighborhood', y='price')
plt.title('Price by Neighborhood')
plt.xlabel('Neighborhood')
plt.ylabel('Price')

# Box plot of 'price' by 'bedrooms'
plt.subplot(1, 2, 2)
sns.boxplot(data=df, x='bedrooms', y='price')
plt.title('Price by Bedrooms')
plt.xlabel('Bedrooms')
plt.ylabel('Price')

plt.tight_layout()
plt.show()

# 6. Visualize data using a scatter plot (Price vs. Square Footage)
plt.figure(figsize=(8, 6))
sns.scatterplot(data=df, x='sqft', y='price')
plt.title('Price vs. Square Footage')
plt.xlabel('Square Footage')
plt.ylabel('Price')
plt.show()
```