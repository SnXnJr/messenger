from django.urls import path, include
from .models import Clients
from chats.models import Chat
from rest_framework import routers, serializers, viewsets
from django.urls import re_path

from . import consumers

websocket_urlpatterns = [
    re_path(r'ws/(?P<room_name>\w+)/$', consumers.ChatConsumer),
]


class ContactsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clients
        fields = ['id', 'first_name', 'last_name']


class UserSerializer(serializers.HyperlinkedModelSerializer):
    contacts = ContactsSerializer(many=True)
    chats = serializers.SerializerMethodField('get_chats')

    def get_chats(self, user):
         return Chat.objects.filter(users__in=[user.id]).values_list('chat_id')

    class Meta:
        model = Clients
        fields = ['id', 'first_name', 'last_name', 'birthday', 'biography', 'contacts', 'chats']


class UserViewSet(viewsets.ModelViewSet):
    queryset = Clients.objects.all()
    serializer_class = UserSerializer


router = routers.DefaultRouter()
router.register(r'', UserViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
