from django.urls import path, include
from .models import Client
from chats.models import Chat
from .views import ListUsers
from rest_framework import routers, serializers, viewsets


urlpatterns = [
    path('', ListUsers.as_view()),
]
