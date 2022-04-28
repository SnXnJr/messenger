from django.urls import path, include
from .models import Chat, Message
from users.models import Client
from . import views
from rest_framework import routers, serializers, viewsets



class ContactsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ['id', 'first_name', 'last_name']


class ChatsSerializer(serializers.HyperlinkedModelSerializer):
    users = ContactsSerializer(many=True)

    class Meta:
        model = Chat
        fields = ['chat_id', 'users']


class ChatViewSet(viewsets.ModelViewSet):
    queryset = Chat.objects.all()
    serializer_class = ChatsSerializer


class MessageSerializer(serializers.HyperlinkedModelSerializer):
    user_id = serializers.SerializerMethodField('get_user_id')

    def get_user_id(self, obj):
        return obj.id

    class Meta:
        model = Message
        fields = ['message', 'user_id', 'create_date']


class MessageViewSet(viewsets.ModelViewSet):
    serializer_class = MessageSerializer

    def get_queryset(self):
        return Message.objects.filter(chat=self.kwargs['bk'])


router = routers.DefaultRouter()
router.register(r'', ChatViewSet)

router2 = routers.DefaultRouter()
router2.register(r'messages', MessageViewSet,  basename='reservation')

urlpatterns = [
    path('rooms', views.index, name='index'),
    path('rooms/<str:room_name>/', views.room, name='room'),
    path('', include(router.urls)),
    path('<int:bk>/', include(router2.urls)),
]
