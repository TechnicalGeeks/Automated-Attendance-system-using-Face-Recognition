import cv2
import numpy as np
import face_recognition
import os
from datetime import datetime
from numpy import savez_compressed

def train(branch,year,division):
    path="training_images"+"/"+branch+"/"+year+"/"+division+"/"
    myList = os.listdir(path)
    encodeList = []
    images = []
    classNames = []
    for cl in myList:
        curImg = cv2.imread(f'{path}/{cl}')
        images.append(curImg)
        classNames.append(os.path.splitext(cl)[0])

    for img,clr in zip(images, classNames):
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        print(f'Training {clr}')
        try :
            encode = face_recognition.face_encodings(img)[0]
            encodeList.append(encode)
        except:
            print(f'Face Encodings not found for {clr}')

    modelPath="Trained_Models"+"/"+branch+"/"+year+"/"+division+"/"
    if not os.path.exists(modelPath):
        os.makedirs(modelPath)
    savez_compressed(modelPath+'model.npz',encodeList)




# train("IT","BE","B")