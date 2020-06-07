import json

from django.shortcuts import render
from django.contrib.auth.models import User

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from .models import Desk, Task
from .serializers import DeskSerializer, TaskSerializer, UserSerializer

def home(request):

    return render(request, 'home.html')

class DeskViewSet(APIView):
    def get(self, format=None):
        desks = Desk.objects.all()
        serializer = DeskSerializer(desks, many=True)
        return Response(serializer.data)

class TaskViewSet(APIView):
    def get(self, format=None):
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

class UserViewSet(APIView):
    def get(self, format=None):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid(raise_exception=ValueError):
            serializer.create(validated_data=request.data)
            return Response(
                serializer.data,
                status=status.HTTP_201_CREATED
            )
        return Response(
            {
                "error": True,
                "error_msg": serializer.error_messages,
            },
            status=status.HTTP_400_BAD_REQUEST
        )
