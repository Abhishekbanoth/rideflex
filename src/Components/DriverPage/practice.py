# def sumofdigits(num):
#     count=0
#     while num>0:
#         count+=1
#         num=num/10
#     return count
# num=int(input())
# print(sumofdigits(num))
# import numpy as np
# matrix = np.array([[1, 2], [3, 4]])
# print(matrix)
import pandas as pd
data = pd.read_csv('products.csv')
print(data.head())

