#Import modules

from flask import Flask, render_template, request
import numpy as np
import re
import base64
from PIL import Image
from keras.models import load_model
import tensorflow as tf
import json


#Loading model (need folder: models)

model = load_model("./models/model.h5")

#Define the name to the app

app=Flask(__name__)


#What the app does when it's opened

@app.route('/',methods=["GET", "POST"])

def index():
    if request.method == "GET":
        
        #Open the Front-End (need folder: static,templates)
    
        return render_template('index.html')    

    if request.method == "POST":

        #Get image in format base34 from the Front-End
        data = request.form["payload"].split(",")[1]
        
        #base64 is text, here the function bytes convert text to bytes
        data=bytes(data,'utf-8')

        #Decode the bytes and convert to a picture
        img = base64.decodestring(data)
        
        #Create the picture in .png format
        with open('temp.png', 'wb') as output:
            output.write(img)
        
        #Open the picture
        x=Image.open('temp.png')

        #Convert picture to Gray Scale
        new_pic=x.convert('L')

        #Resize picture to 28x28 pixels
        new_pic=new_pic.resize((28,28))
        
        #picture to numbers (0-255 pixels)
        data_pic=np.asarray(new_pic)

        #Initial picture backgroud white and lines in black, need to be the opposite (black background and lines in white)
        data_pic=np.invert(data_pic)
        
        #Reshape to send to the model (784 features)
        to_model=data_pic.reshape(1,784)

        #Make predictions
        preds=model.predict(to_model)
        
        #Prediction
        output=np.argmax(preds,axis=1)

        #Sent to Front-End the result
        return render_template('index.html',pred_text=output)


if __name__=='__main__':
    app.run(debug=True)