import cv2
import os



def faceDetection(dep,year,div,sid):
    paths="Training_images"+"/"+dep+"/"+year+"/"+div+"/"
    face_cascade = cv2.CascadeClassifier('haar-files/haarcascade_frontalface_default.xml')
    eye_cascade = cv2.CascadeClassifier('haar-files/haarcascade_eye.xml')
    mouth_cascade = cv2.CascadeClassifier('haar-files/haarcascade_mcs_mouth.xml')
    nose_cascade = cv2.CascadeClassifier('haar-files/haarcascade_mcs_nose.xml')
    if not os.path.exists(paths):
        os.makedirs(paths,exist_ok=True)
    
    if os.path.exists("Training_images"):
        pass
    else:
        # os.mkdir("Dataset")
        div =["A","B","C"]
        year = ["FE","SE","TE","BE"]
        branch = ["comp","mech","entc"]
        
        for b in branch:
            for y in year:
                for d in div:
                    path = "Training_images/"+b+"/"+y+"/"+d+"/"
                    os.makedirs(path,exist_ok=True)
                    
    vid = cv2.VideoCapture(0)
    count = 1
    while (True):
        ret, img = vid.read()
        
        
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray, 1.3, 5)

        for (x,y,w,h) in faces:
            active = 0
            
            roi_gray = gray[y:y+h, x:x+w]
            image2=img[y:y+h, x:x+w]
            roi_color = img[y:y+h, x:x+w]
            cv2.rectangle(img, (x,y), (x+w,y+h), (255,255,255), 2)
            eyes = eye_cascade.detectMultiScale(roi_gray)
            nose =  nose_cascade.detectMultiScale(roi_gray)
            mouth = mouth_cascade.detectMultiScale(roi_gray)

            for (ex,ey,ew,eh) in eyes:
                # cv2.rectangle(roi_color, (ex,ey), (ex+ew, ey+eh), (255,0,0), 0)
                active+=1
            for (nx, ny, nw, nh) in nose:
                # cv2.rectangle(roi_color, (nx, ny), (nx + nw, ny + nh), (255,255,255),2)
                active+=1
            for (mx, my, mw, mh) in mouth:
                #  cv2.rectangle(roi_color, (mx, my), (mx + mw, my + mh), (255,255,255), 2)
                 active+=1
                
            cv2.imshow('original', img)        
            bilateral = cv2.bilateralFilter(roi_color, 10, 40, 40)
            cv2.imshow('Bilateral Filter', bilateral)
            adjusted = cv2.convertScaleAbs(bilateral, alpha=1.5, beta=0)
            if active>=7 and count <=1:
                    adjusted = cv2.resize(adjusted,(500, 500))
                    path=paths+str(sid)+".jpg"
                    print(path)
                    cv2.imwrite(path,adjusted)
                    count+=1
                    break
                
            
            print(active)
            
            cv2.imshow('final image', adjusted)
            

        if cv2.waitKey(10) & 0xFF == ord('q') or count>=2:
            break
    
    # After the loop release the cap object
    vid.release()
    # Destroy all the windows
    cv2.destroyAllWindows()

# set path for saving images

# faceDetection("abcd","SE","D","std1")