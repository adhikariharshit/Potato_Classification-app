# Potato Leaf Classification using Deep Learning
- This project classifies healthy and diseased leaves of potato using deep learning (CNN).

# Technologies Used
- Frontend: React.js
- Backend: FastAPI
- Deep Learning: CNN
  
# Features
- Leaf Classification: Classifies potato leaves as healthy or diseased.
- Accuracy: Achieves an accuracy of 94% in classifying potato leaves.
  
# Project Structure
- The project is organized into the following folders and files:

##### api: Contains the backend API files.
- main.py: Main FastAPI application file.
- model_pickle: Folder containing the pickled model files.
- potatoes.h5: Deep learning model file.
- requirements.txt: File listing the Python dependencies.
##### potato-frontend: Contains the frontend React.js files.
##### Untitled.ipynb: Jupyter notebook containing the deep learning model development code.
  
# How to Run
- Clone the repository: git clone https://github.com/harshitadhikari-1122/Potato_Classification-app.git
##### Set up the backend:
- Navigate to the api folder.
- Install dependencies: pip install -r requirements.txt
- Run the FastAPI server: uvicorn main:app --reload
##### Set up the frontend:
- Navigate to the potato-frontend folder.
- Install dependencies: npm install
- Start the React development server: npm start
- Access the application at http://localhost:3000 in your web browser.
# Note
- Ensure that you have the necessary Python and Node.js environment set up before running the project.
