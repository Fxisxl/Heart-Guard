import asyncio
import numpy as np
import os

model_path = os.path.join(os.path.dirname(__file__), 'heart_disease.pkl')

import pickle
with open(model_path, 'rb') as file:
    loaded_model = pickle.load(file)


# predictions = loaded_model.predict()
# input  = (62,0,0,140,268,0,0,160,0,3.6,0,2,2)
# input = (56,1,1,120,236,0,1,178,0,0.8,2,0,2)

async def predict (age,sex ,cp, trestbps, chol, fbs, restecg, thalach, exang ,oldpeak, slope, ca, thal):
    #converting the input inyo np array
    input_data = (age,sex ,cp, trestbps, chol, fbs, restecg, thalach, exang ,oldpeak, slope, ca, thal)

    input_data_as_numpy_array= np.asarray(input_data)

    #reshaping the np array data
    input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)

    # prediction = loaded_model.predict(input_data_reshaped)
    # # print(prediction)
    loop = asyncio.get_running_loop()
    prediction = await loop.run_in_executor(None, loaded_model.predict, input_data_reshaped)

    if (prediction[0]== 0):
        prediction = 'The Person does not have a Heart Disease'
    else:
        prediction ='The Person has Heart Disease'

    return {
        'prediction':prediction
    }


# predict(input)