# Simple Marriage Prediction Script

This Python script humorously predicts the likelihood of getting married based on arbitrary criteria.

```python
def marriage_prediction(age, loves_travel, enjoys_cooking, has_pet):
    """
    Makes a playful prediction about someone's likelihood of getting married.
    
    Parameters:
    age (int): The person's age.
    loves_travel (bool): Whether the person loves to travel.
    enjoys_cooking (bool): Whether the person enjoys cooking.
    has_pet (bool): Whether the person has a pet.
    
    Returns:
    str: A fun prediction about marriage.
    """
    if age > 25 and loves_travel and enjoys_cooking and has_pet:
        return "High chance of getting married - you're quite the catch!"
    elif age > 30 and (loves_travel or enjoys_cooking or has_pet):
        return "Good prospects of marriage, but maybe open up to people without pets?"
    else:
        return "Marriage is in the stars, but the stars are not aligned yet."

# Example usage
if __name__ == "__main__":
    your_age = int(input("Enter your age: "))
    you_love_travel = input("Do you love to travel? (yes/no): ").lower() == 'yes'
    you_enjoy_cooking = input("Do you enjoy cooking? (yes/no): ").lower() == 'yes'
    you_have_pet = input("Do you have a pet? (yes/no): ").lower() == 'yes'
    prediction = marriage_prediction(your_age, you_love_travel, you_enjoy_cooking, you_have_pet)
    print(prediction)
```

## Machine Learning Model for Marriage Prediction

Now, let's create a more complex, though still not serious, machine learning model using a dataset that doesn't really exist.

```python
import pandas as pd
from sklearn.neighbors import KNeighborsClassifier

# Hypothetical dataset for marriage prediction
data = [
    {'age': 28, 'loves_travel': 1, 'enjoys_cooking': 1, 'has_pet': 1, 'got_married': 1},
    {'age': 35, 'loves_travel': 0, 'enjoys_cooking': 0, 'has_pet': 0, 'got_married': 0},
    # ... more hypothetical examples ...
]

# Convert the hypothetical dataset to a DataFrame
df = pd.DataFrame(data)

# Separate the features and the target variable
X = df.drop('got_married', axis=1)
y = df['got_married']

# Initialize and train the K-Nearest Neighbors model
marriage_model = KNeighborsClassifier(n_neighbors=3)
marriage_model.fit(X, y)

def predict_marriage(age, loves_travel, enjoys_cooking, has_pet):
    """
    Predicts the possibility of getting married using a KNN model.
    
    Parameters:
    age (int): The person's age.
    loves_travel (int): 1 if the person loves to travel, 0 otherwise.
    enjoys_cooking (int): 1 if the person enjoys cooking, 0 otherwise.
    has_pet (int): 1 if the person has a pet, 0 otherwise.
    
    Returns:
    str: A prediction about getting married.
    """
    person_data = pd.DataFrame([{
        'age': age,
        'loves_travel': loves_travel,
        'enjoys_cooking': enjoys_cooking,
        'has_pet': has_pet
    }])
    prediction = marriage_model.predict(person_data)
    return "Likely to get married!" if prediction[0] == 1 else "Marriage is uncertain."

# Example interactive session
if __name__ == "__main__":
    age_input = int(input("Enter your age: "))
    loves_travel_input = int(input("Do you love to travel? (1 for Yes, 0 for No): "))
    enjoys_cooking_input = int(input("Do you enjoy cooking? (1 for Yes, 0 for No): "))
    has_pet_input = int(input("Do you have a pet? (1 for Yes, 0 for No): "))
    marriage_chances = predict_marriage(age_input, loves_travel_input, enjoys_cooking_input, has_pet_input)
    print(marriage_chances)
```
