import MarkAttendance
import pymongo

def storeAttendance(studentAttendances,lectureID):
  client = pymongo.MongoClient("mongodb://localhost:27017/")
  db=client["college"]
  my_collection=db["dailyattendances"]
  print("store Attendance in",studentAttendances)
  finalAttendance=MarkAttendance.MarkAttendance(studentAttendances)
  print("Final",finalAttendance)
  for id in finalAttendance:
    my_collection.update_one({"studentId":id,"lectureId":lectureID},{"$set":{"Attendance":"P"}})


# studentAttendances={
#   "1":{
#     "IN":["10:00","10:21"],
#     "OUT":["10:15","11:00"],
#   },
#   "2":{
#     "IN":["10:00"],
#     "OUT":["11:00"],
#   },
#   "3":{
#     "IN":["10:00","10:45"],
#     "OUT":["10:10","11:00"],
#   }
# }
# lectureID="621226bbc54509b3d31cd05e"

# storeAttendance(studentAttendances,lectureID)
