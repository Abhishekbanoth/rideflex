
# HCF
# def f(m,n):
#     t=0
#     for i in range(2,(m//2)+1):
#         if m%i==0 and n%i==0:
#             t=i
#     return t
# m=int(input())
# n=int(input())
# print(f(m,n))

# UPPERTOLOWERANDVICEVERSA
# def f(string):
#     a=0
#     b=0
#     for i in string:
#         if i.isupper():
#             a+=1
#         else:
#             b+=1
#     if a>b:
#         return string.upper()
#     else:
#         return string.lower()
# str1=input()
# print(f(str1))

# using ascii values
# def f(string):
#     a = 0 
#     b = 0  

#     for i in string:
#         if 65 <= ord(i) <= 90:  
#             a += 1
#         elif 97 <= ord(i) <= 122: 
#             b += 1

#     if a > b: 
#         return "".join(chr(ord(c) - 32) if 97 <= ord(c) <= 122 else c for c in string)
#     else:  
#         return "".join(chr(ord(c) + 32) if 65 <= ord(c) <= 90 else c for c in string)

# str1 = input("Enter a string: ")
# print(f(str1))


# move zeroes to end 
def f(arr):
    l1=[]
    l2=[]
    for i in arr:
        if i==0:
            l1.append(i)
        else:
            l2.append(i)
    return l2+l1
arr=list(map(int,input().split()))
print(f(arr))