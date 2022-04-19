# from django.shortcuts import render
# from rest_framework import generics, serializers
# from rest_framework.response import Response
# from .models import Messages
#
#
# class MessageSerializer(serializers.HyperlinkedModelSerializer):
#
#     class Meta:
#         model = Messages
#         fields = ['message', 'user_id', 'create_date']
#
#
# class MessagesListView(generics.ListAPIView):
#     queryset = Messages.objects.all()
#     serializer_class = MessageSerializer
#
#     def get(self, request, pk, *args, **kwargs):
#         messages = Messages.objects.filter(chat__in=[pk]).values_list('message', 'user_id')
#         context = {'request': request}
#         serializer = MessageSerializer(messages, context=context)
#         return Response(serializer.data, )
