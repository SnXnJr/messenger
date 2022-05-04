from django.urls import path, include
from .models import Client
from chats.models import Chat
from .views import ListUsers
from rest_framework import routers, serializers, viewsets
from rest_framework.routers import SimpleRouter
from messenger.viewsets import LoginViewSet, RegistrationViewSet, RefreshViewSet
routes = SimpleRouter()

# AUTHENTICATION
routes.register(r'auth/login', LoginViewSet, basename='auth-login')
routes.register(r'auth/register', RegistrationViewSet, basename='auth-register')
routes.register(r'auth/refresh', RefreshViewSet, basename='auth-refresh')



urlpatterns = [
    path('', ListUsers.as_view()),
    *routes.urls
]
