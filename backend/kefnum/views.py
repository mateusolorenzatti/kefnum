import json

from django.shortcuts import render
from django.contrib.auth.models import User

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.permissions import AllowAny

from .models import Desk, Task
from .serializers import DeskSerializer, TaskSerializer, UserSerializer

def home(request):

    return render(request, 'home.html')

class DeskViewSet(APIView):

    def get(self, request, format=None):
        desks = Desk.objects.filter(user = request.user.id)
        serializer = DeskSerializer(desks, many=True)
        return Response(serializer.data)

    def post(self, request):
        if str(request.user.id) == str(request.data['user']):
            serializer = DeskSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({ 'error': 'User is not owner' }, status=status.HTTP_400_BAD_REQUEST)

class TaskViewSet(APIView):

    def get(self, request, desk):
        tasks = Task.objects.filter(desk = desk, user = request.user.id)
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    def post(self, request, desk):
        if str(request.user.id) == str(request.data['user']):
            serializer = TaskSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({ 'error': 'User is not owner' }, status=status.HTTP_400_BAD_REQUEST)
        

class UserViewSet(APIView):

    def get(self, request, format=None):
        users = User.objects.filter(id = request.user.id)
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

class RegisterUserSet(APIView):
    permission_classes = [AllowAny]

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