
### Description:

1. **Loading the Data:**
   - The program starts by loading medical data from a file called `"Disease_data.csv"`. This data contains information like age, gender, and other factors about people and whether they have a disease.

2. **Preparing the Data:**
   - One column (age) is removed because it's not needed for the prediction.
   - The computer doesn’t understand words like "male" or "yes/no," so these are converted into numbers. For example, "yes" becomes 1, and "no" becomes 0.

3. **Training the Model:**
   - The data is split into two parts: one part is used to teach the computer (training data), and the other part is used to check how well the computer learned (testing data).
   - The computer is taught using a method called "Random Forest," which helps it make decisions on whether a person might have a disease based on the data.

4. **Checking Accuracy:**
   - After the computer has learned, its ability to predict diseases is tested using the data that wasn't part of the teaching phase.
   - The accuracy of these predictions is calculated.

5. **Saving the Model:**
   - The trained model is saved as a file (`'model_test_two.pkl'`) so it can be reused later without needing to retrain it from scratch.
   - https://drive.google.com/file/d/1-_I_bEDovEz8bftlrhUYXGY1qsYfG7Fc/view?pli=1
  
6. **Creat Front-End And Back End:**



