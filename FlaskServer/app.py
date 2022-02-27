# from crypt import methods
from flask import Flask, render_template, request, redirect
import time

# Modules for the attendance system
import FaceDetection
import trainer
import recognizer
import storeAttendance

app = Flask(__name__)



@app.route("/store", methods=['POST'])
def store():
    if request.method=='POST':
        user = request.json
        print(user)
        # time.sleep(60)
        FaceDetection.faceDetection(div=user['div'],year=user['year'],dep=user['branch'],sid=user['studentId'])
    return "Success"

@app.route("/train", methods=['POST'])
def train():
    if request.method=='POST':
        user = request.json
        print(user)
        trainer.train(division=user['div'],year=user['year'],branch=user['branch'])
    return "Trained Model Successfully"

@app.route("/recognize", methods=['POST'])
def recognize():
    if request.method=='POST':
        user = request.json
        print(user)
        studentAttendances = recognizer.recognize(division=user['div'],year=user['year'],branch=user['branch'])
        print(studentAttendances)
        storeAttendance.storeAttendance(studentAttendances=studentAttendances,lectureID=user['lectureID'])
    return "Lecture Finished"

@app.route("/abc")
def abc():
    time.sleep(60)
    return "Wait completed"

if __name__ == "__main__":
    app.run(debug=True, port=3000)