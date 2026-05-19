from fastapi.staticfiles import StaticFiles
from fastapi import FastAPI
import pandas as pd
import random

app = FastAPI()

data = pd.read_csv("quotes.csv")

@app.get("/get_pair")
def get_pair():
    pairs = []
    for i in range(len(data)):
        pair = {"Quote": data["text"][i], "Author": data["author"][i]}
        pairs.append(pair)
    rn = random.randint(0, len(pairs)-1)
    for i in range(len(pairs)):
        if i == rn:
            return pairs[i]




app.mount("/", StaticFiles(directory="static", html=True), name="static")