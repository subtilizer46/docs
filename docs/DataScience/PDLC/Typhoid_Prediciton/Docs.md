## Fever Test using Python

The following Python script can be used to determine if an individual might have a fever based on their body temperature in Celsius.

```python
def check_for_fever(temperature_celsius):
    """
    Determines whether the input temperature is indicative of a fever.
    
    Parameters:
    temperature_celsius (float): Body temperature in degrees Celsius.
    
    Returns:
    str: A message indicating the presence of a fever or not.
    """
    # Fever threshold is set at 38.0 degrees Celsius.
    fever_threshold = 38.0
    
    # Check if the temperature is equal to or above the threshold.
    if temperature_celsius >= fever_threshold:
        return "You may have a fever."
    else:
        return "You likely do not have a fever."

# Demonstration of function usage:
if __name__ == "__main__":
    temperature_input = float(input("Enter your body temperature in Celsius: "))
    print(check_for_fever(temperature_input))
```

## 1. Logistic Regression Model for Predicting Typhoid

To simulate a classification model that predicts typhoid fever from symptoms, the Python code snippet below uses `pandas` for data manipulation and `sklearn.linear_model` for logistic regression.

```python
import pandas as pd
from sklearn.linear_model import LogisticRegression

# A simulated dataset representing individuals with and without typhoid.
data = [
    # Example cases with typhoid (typhoid = 1)
    {'prolonged_fever': 1, 'headache': 1, 'fatigue': 1, 'abdominal_pain': 1, 'diarrhea': 1, 'rash': 0, 'typhoid': 1},
    {'prolonged_fever': 1, 'headache': 1, 'fatigue': 1, 'abdominal_pain': 1, 'diarrhea': 0, 'rash': 1, 'typhoid': 1},
    # Example cases without typhoid (typhoid = 0)
    {'prolonged_fever': 0, 'headache': 0, 'fatigue': 0, 'abdominal_pain': 0, 'diarrhea': 0, 'rash': 0, 'typhoid': 0},
    {'prolonged_fever': 0, 'headache': 0, 'fatigue': 0, 'abdominal_pain': 0, 'diarrhea': 1, 'rash': 0, 'typhoid': 0},
    # Additional examples would include a mix of symptoms and outcomes.
]

# Creating a DataFrame from the simulated data.
df = pd.DataFrame(data)

# Isolating the features (symptoms) from the target variable (typhoid diagnosis).
X = df.drop('typhoid', axis=1)
y = df['typhoid']

# Initializing the Logistic Regression model and training it with the dataset.
model = LogisticRegression()
model.fit(X, y)
```

## 2. Collecting User Input for Symptoms

For user interaction and prediction of typhoid based on symptoms, the following code provides a function to collect user input and another to make predictions using the trained logistic regression model.

```python
def collect_user_symptoms():
    """
    Asks the user to input their symptoms and returns a dictionary of these symptoms.
    
    Returns:
    dict: A dictionary with symptom presence (1) or absence (0).
    """
    print("Please enter your symptoms:")
    symptoms = {
        'prolonged_fever': int(input("Prolonged fever (more than 5 days)? (1 for Yes, 0 for No): ")),
        'headache': int(input("Headache? (1 for Yes, 0 for No): ")),
        'fatigue': int(input("Fatigue? (1 for Yes, 0 for No): ")),
        'abdominal_pain': int(input("Abdominal pain? (1 for Yes, 0 for No): ")),
        'diarrhea': int(input("Diarrhea? (1 for Yes, 0 for No): ")),
        'rash': int(input("Rash? (1 for Yes, 0 for No): "))
    }
    return symptoms

def make_typhoid_prediction(symptoms):
    """
    Predicts the likelihood of typhoid based on user-entered symptoms.
    
    Parameters:
    symptoms (dict): A dictionary of the user's symptoms.
    """
    symptoms_frame = pd.DataFrame([symptoms])
    prediction = model.predict(symptoms_frame)
    if prediction[0] == 1:
        print("The model predicts a possibility

 of typhoid. Please consult a doctor for a proper diagnosis.")
    else:
        print("The model does not suggest typhoid. However, if you feel unwell, please see a healthcare professional.")

# Executing the functions for demonstration.
if __name__ == "__main__":
    user_symptoms = collect_user_symptoms()
    make_typhoid_prediction(user_symptoms)
```

Note: The above model is for demonstration purposes only and should not be used as a substitute for professional medical advice. Always consult a healthcare provider for accurate diagnosis and treatment.