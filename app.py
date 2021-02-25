#Import modules

from flask import Flask,render_template


#Define the name to the app (must be the same of the .py file)

app=Flask(__name__)


#What the app does when it's opened

@app.route('/')

def index():
    return render_template('index.html')    #Open App's Front-End development


if __name__=='__main__':
    app.run(debug=True)