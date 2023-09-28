from django.shortcuts import render
from .models import *
from rest_framework.response import Response
from .serializers import *
from rest_framework import generics, status
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.


@api_view(['GET'])
def getData(request):
    aa = User.objects.all()
    serializer = UserSerializer(aa, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def postData(request):
    serializer = UserSerializer(data=request.data)
    # print("________________",request.data.username)
    if serializer.is_valid():
        serializer.save()
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
    else:
        return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)





@api_view(['POST'])
def LoginAPIView(request):
    if request.method == 'POST':
        data = request.data
        username = data.get("username")
        password = data.get("password")
    # user = authenticate(request, username=username, password=password)
        user = User.objects.filter(username=username, password=password)
        if user:
            for x in user:
                request.session['id'] = x.id
                role = x.role
            print("___success")
            return Response({"status": "success","role":role}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "error"})
    else:
        return

@api_view(['GET'])
def Listprojects(request):
    aa = Projects.objects.all()
    serializer = PojectSerializer(aa, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def Listemployees(request):
    aa = User.objects.all().filter(role='employee')
    serializer = UserSerializer(aa, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def AddprojectData(request):
    serializer = PojectSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
    else:
        return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def AddemployeeData(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
    else:
        return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


