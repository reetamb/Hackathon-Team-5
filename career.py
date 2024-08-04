import json, random

unseen = []
favorites = []
rejects = []
total = 0

data = dict()
with open('static/scripts/data/careers.json', newline='') as careers:
    data = json.load(careers)
    unseen = list(set(data.keys()))[0:40]
    total = len(unseen)

current = ""

def init():
    global unseen, favorites, rejects, current, data
    current = random.choice(unseen)
    return data.get(current)

def newCareer(prevReject):
    global unseen, favorites, rejects, current, data

    if (len(unseen) > 1):
        if prevReject:
            unseen.remove(current)
            rejects.append(current)
            print("Rejects: ", rejects)
        else:
            unseen.remove(current)
            favorites.append(current)
            print("Favorites: ", favorites)
        
        current = random.choice(unseen)
        return data.get(current)
    else:
        return "END"

def getProgress():
    global unseen, favorites, rejects, current, data, total
    return "{}/{}".format(total - len(unseen), total)