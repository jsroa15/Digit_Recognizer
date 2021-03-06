# Digit Recognizer

# Project Overview

End-to-End Project using Deep Learning to predict hand-writing numbers from 0 to 9.

# Code and Resources used

*  Python Version: 3.85
*  Packages: Numpy, Pandas, TensorFlow, Keras, Matplotlib, Seaborn, Pillow, base64, Flask (Back-End)
*  HTML, CSS, JavaScript 

# Credits
* Flask API: https://github.com/SouravJohar/doodle-classifier
* Front-End: https://www.youtube.com/watch?v=D-h8L5hgW-w&t=4994s
* Build Canvas: https://www.youtube.com/watch?v=wQsWdizztIw&t=1085s
* Google Cloud Deployment: https://www.youtube.com/watch?v=xcODUk0o6tU

# Exploratory Data Analysis

The MNIST dataset is really simple to deal because it doesn't have missing values and it's a balanced data set. Every picture in the dataset is represente by a 28x28 matrix, where every element of the matrix represents a pixel that varies from 0 to 255. At the end, every picture is represented by 784 (28 * 28) columns, so, every pixel is a feature.

The following plot shows that dataset is balanced:

<img src= "https://github.com/jsroa15/Digit_Recognizer/blob/main/pictures/labels.jpg" width="500"/>

This is a visualization of some samples in the dataset:

<img src= "https://github.com/jsroa15/Digit_Recognizer/blob/main/pictures/samples.jpg" width="500"/>

# Modeling

I used an Artificial Neural Network to predict the handwriting. The architecture of the Neural Network is:

*  784 Nodes in Input layer
*  400 Nodes in Hidden layer
*  10 Nodes in Output layer

The activation function in the output layer was ```softmax``` because is a multiclass classification problem.

#  Test

These are the results after training the Neural Network:

| Loss Function | Val Loss Function | Accuracy | Val Accuracy |
|---------------|-------------------|----------|--------------|
| 0.03          | 1.07              | 99%      | 98%          |

# Test with own handwriting

To test the model in production with real handwriting, it's necesary to write the numbers in black backgroung because of the training data were collected in that way. After that, the image requires some preprocessing like: Covert to Gray scale and resize to 28x28 pixel

**Original Picture**

<img src= "https://github.com/jsroa15/Digit_Recognizer/blob/main/pictures/own%20handwriting.jpg" width="180"/>

**Picture after preprocessing**

<img src= "https://github.com/jsroa15/Digit_Recognizer/blob/main/pictures/sample%20pro.jpg" width="180"/>

# Deployment

To deploy the Web App I used HTML, CSS and JavaScript for the Front-End and Flask for the Front-End.

<img src= "https://github.com/jsroa15/Digit_Recognizer/blob/main/pictures/Screenshot%202021-02-27%20221049.jpg" width="500"/>









