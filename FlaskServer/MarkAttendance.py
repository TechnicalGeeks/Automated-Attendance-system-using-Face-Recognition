import datetime

def MarkAttendance(studentAttendances):
  threshold=0
  finalAttendance=checkAttendance(studentAttendances,threshold)
  print("Mark Attendance Out",finalAttendance)
  return finalAttendance

def checkAttendance(studentAttendances,threshold):
  finalAttendance = []
  # for id in studentAttendances.keys():
  #   totalTime=0
  #   for (In,Out) in zip(studentAttendances[id]['IN'],studentAttendances[id]['OUT']):
  #     totalTime += convertToMinutes(Out) - convertToMinutes(In)
  #   if totalTime > threshold:
  #     finalAttendance.append(id)
  print("Check Attendance",studentAttendances)
  for id in studentAttendances.keys():
    tottalTime=convertToMinutes(studentAttendances[id][1]) - convertToMinutes(studentAttendances[id][0])
    print("Total Time",tottalTime)
    print("Threshold",threshold)
    if tottalTime >= threshold:
      finalAttendance.append(id)
  return finalAttendance

def convertToMinutes(time):
  time = time.split(':')
  return int(time[0])*60 + int(time[1])


# studentAttendances={
#   1:{
#     "IN":["10:00","10:21"],
#     "OUT":["10:15","11:00"],
#   },
#   2:{
#     "IN":["10:00"],
#     "OUT":["11:00"],
#   },
#   3:{
#     "IN":["10:00","10:45"],
#     "OUT":["10:10","11:00"],
#   }
# }

# MarkAttendance(studentAttendances)

