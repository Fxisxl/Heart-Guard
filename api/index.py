from .func import predict as model_predict
# import func
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# import random
import uvicorn
from .features import parameter
import numpy as np



app = FastAPI()

@app.get('/api/hello')
async def home():
    return {'message' : 'hello'}

# @app.get('/test/{limit}')
# async def get_random(limit :int):
#     rn :int = random.randint(0,limit)
#     return {'number' : rn , 'limit':limit}

#important for external requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can specify specific origins instead of "*" for security purposes
    allow_credentials=True,
    allow_methods=["*"],  # You can specify specific methods instead of "*"
    allow_headers=["*"],  # You can specify specific headers instead of "*"
)


@app.post('/api/predict')
async def predict(data:parameter):
    data  = data.model_dump()
    age = data['age'] 
    sex = data['sex'] 
    cp = data['cp'] 
    trestbps = data['trestbps'] 
    chol = data['chol'] 
    fbs = data['fbs'] 
    restecg = data['restecg'] 
    thalach = data['thalach'] 
    exang = data['exang'] 
    oldpeak = data['oldpeak'] 
    slope = data['slope'] 
    ca = data['ca'] 
    thal = data['thal'] 

    input_data = (age,sex ,cp, trestbps, chol, fbs, restecg, thalach, exang ,oldpeak, slope, ca, thal)

    

    response = await model_predict(*input_data)
    # print(response)

    return response

    
# if __name__ == '__main__':
#     uvicorn.run(app , host = '127.0.0.1', port = 8000)


#uvicorn main:app --reload      