from django.urls import path, include
from .models import Chat
from users.models import Clients
from rest_framework import routers, serializers, viewsets


class ContactsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clients
        fields = ['id', 'first_name', 'last_name']


class ChatsSerializer(serializers.HyperlinkedModelSerializer):
    users = ContactsSerializer(many=True)

    class Meta:
        model = Chat
        fields = ['chat_id', 'users']


class ChatViewSet(viewsets.ModelViewSet):
    queryset = Chat.objects.all()
    serializer_class = ChatsSerializer


router = routers.DefaultRouter()
router.register(r'', ChatViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
