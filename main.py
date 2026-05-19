from fastapi.staticfiles import StaticFiles
from fastapi import FastAPI
import pandas as pd
import random

app = FastAPI()

data = pd.read_csv("quotes.csv")

@app.get("/get_quote")
def get_quotes():
    pairs = {"Quote": data["text"], "Author": data[author]}
    return pairs



app.mount("/", StaticFiles(directory="static", html=True), name="static")