## 001_Example: EDA

```python
import pandas as pd

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

# Create a DataFrame from the dictionary
df = pd.DataFrame(housing_data)

# Display the DataFrame
print(df)


# 1. Check the first few rows of the dataset
print("First few rows of the dataset:")
print(df.head())

# 2. Get summary statistics of numeric columns
print("\nSummary statistics:")
print(df.describe())

# 3. Check for missing values
print("\nMissing values:")
print(df.isnull().sum())

# 4. Visualize data using histograms (you might need to install matplotlib or seaborn)
import matplotlib.pyplot as plt
import seaborn as sns

# Example: Histogram of a numeric column (e.g., 'price')
plt.figure(figsize=(8, 6))
sns.histplot(df['price'], bins=20, kde=True)
plt.title('Histogram of House Prices')
plt.xlabel('Price')
plt.ylabel('Count')
plt.show()
```
