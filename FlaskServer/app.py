# from crypt import methods
from flask import Flask, render_template, request, redirect,jsonify
from flask_cors import CORS
import time

# Modules for the attendance system
import FaceDetection
import trainer
import recognizer
import storeAttendance

app = Flask(__name__)
CORS(app, resources={r"*": {"origins": "*"}})


@app.route("/store", methods=['POST'])
def store():
    if request.method=='POST':
        user = request.json
        print(user)
        # time.sleep(60)
        FaceDetection.faceDetection(div=user['div'],year=user['year'],dep=user['branch'],sid=user['studentID'])
    return jsonify(status='1')

@app.route("/train", methods=['POST'])
def train():
    if request.method=='POST':
        user = request.json
        print(user)
        trainer.train(division=user['div'],year=user['year'],branch=user['branch'])
    return jsonify(status='1')

@app.route("/recognize", methods=['POST'])
def recognize():
    if request.method=='POST':
        user = request.json
        print(user)
        studentAttendances = recognizer.recognize(division=user['div'],year=user['year'],branch=user['branch'])
        print(studentAttendances)
        storeAttendance.storeAttendance(studentAttendances=studentAttendances,lectureID=user['lectureID'])
    return jsonify(status='1')

@app.route("/abc")
def abc():
    time.sleep(60)
    return "Wait completed"

if __name__ == "__main__":
    app.run(debug=True, port=3011)