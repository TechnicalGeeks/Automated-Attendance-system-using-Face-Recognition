import cv2
import numpy as np
import face_recognition
import os
from datetime import datetime
from datetime import timedelta
from numpy import load

studentAttendances={}
def recognize(branch,year,division,firstCamera=0,secondCamera='http://100.79.222.100:8080//video',lectureTime=0.015):
    
    classNames = []
    encodeListKnown=[]

    path="./Training_images"+"/"+branch+"/"+year+"/"+division+"/"
    myList = os.listdir(path)

    for cl in myList:
        classNames.append(os.path.splitext(cl)[0])
    
    models="./Trained_Models"+"/"+branch+"/"+year+"/"+division+"/"+"model.npz"

    data = load(models)
    encodeListKnown= data['arr_0']
    
    return cameraRun(firstCamera,secondCamera,classNames,encodeListKnown,lectureTime)
    # cameraRun(secondCamera,classNames,encodeListKnown)

def cameraRun(camera1,camera2,classNames,encodeListKnown,lectureTime):
    cap1 = cv2.VideoCapture(camera1)
    cap2 = cv2.VideoCapture(camera2)
    startTime = datetime.now()
    while (datetime.now()-startTime<timedelta(seconds=lectureTime*3600)):
        success, img1 = cap1.read()
        success, img2 = cap2.read()

        imgS1 = cv2.resize(img1, (0, 0), None, 0.25, 0.25)
        imgS2 = cv2.resize(img2, (0, 0), None, 0.25, 0.25)

        imgS1 = cv2.cvtColor(imgS1, cv2.COLOR_BGR2RGB)
        imgS2 = cv2.cvtColor(imgS2, cv2.COLOR_BGR2RGB)

        facesCurFrame1 = face_recognition.face_locations(imgS1)
        facesCurFrame2 = face_recognition.face_locations(imgS2)

        encodesCurFrame1 = face_recognition.face_encodings(imgS1, facesCurFrame1)
        encodesCurFrame2 = face_recognition.face_encodings(imgS2, facesCurFrame2)

        for encodeFace, faceLoc in zip(encodesCurFrame1, facesCurFrame1):
            matches = face_recognition.compare_faces(encodeListKnown, encodeFace)
            faceDis = face_recognition.face_distance(encodeListKnown, encodeFace)
            matchIndex = np.argmin(faceDis)

            if matches[matchIndex]:
                name = classNames[matchIndex].upper()
                y1, x2, y2, x1 = faceLoc
                y1, x2, y2, x1 = y1 * 4, x2 * 4, y2 * 4, x1 * 4
                cv2.rectangle(img1, (x1, y1), (x2, y2), (0, 255, 0), 2)
                cv2.rectangle(img1, (x1, y2 - 35), (x2, y2), (0, 255, 0), cv2.FILLED)
                cv2.putText(img1, name, (x1 + 6, y2 - 6), cv2.FONT_HERSHEY_COMPLEX, 1, (255, 255, 255), 2)
                markTime1(name)

        for encodeFace, faceLoc in zip(encodesCurFrame2, facesCurFrame2):
            matches = face_recognition.compare_faces(encodeListKnown, encodeFace)
            faceDis = face_recognition.face_distance(encodeListKnown, encodeFace)
            matchIndex = np.argmin(faceDis)

            if matches[matchIndex]:
                name = classNames[matchIndex].upper()
                y1, x2, y2, x1 = faceLoc
                y1, x2, y2, x1 = y1 * 4, x2 * 4, y2 * 4, x1 * 4
                cv2.rectangle(img2, (x1, y1), (x2, y2), (0, 255, 0), 2)
                cv2.rectangle(img2, (x1, y2 - 35), (x2, y2), (0, 255, 0), cv2.FILLED)
                cv2.putText(img2, name, (x1 + 6, y2 - 6), cv2.FONT_HERSHEY_COMPLEX, 1, (255, 255, 255), 2)
                markTime2(name)
        # cv2.namedWindow("Webcam2", cv2.WINDOW_NORMAL)
        # img2 = cv2.resize(img2, (960, 540)) 
        cv2.imshow('Webcam1', img1)
        cv2.imshow('Webcam2', img2)
        cv2.waitKey(1)
    print(studentAttendances)
    for id in studentAttendances.keys():
        if len(studentAttendances[id])==1: studentAttendances[id].append(datetime.now().strftime('%H:%M:%S'))
    return studentAttendances


def markTime1(id):
    if id not in studentAttendances.keys():
        now = datetime.now()
        studentAttendances[id]=[now.strftime('%H:%M:%S')]

def markTime2(id):
    if id in studentAttendances.keys():
        if len(studentAttendances[id])==1:
            now = datetime.now()
            studentAttendances[id].append(now.strftime('%H:%M:%S'))


# print(recognize("IT","BE","B",0,'https://192.168.65.27:8080/video',0.03))

