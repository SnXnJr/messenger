from django.db import models


class Chat(models.Model):
    chat_id = models.BigAutoField(primary_key=True, unique=True)
    users = models.ManyToManyField('users.Client', blank=True, related_name='Members')
    message_list = models.ManyToManyField('Message', blank=True, related_name='message_ids')

    def __str__(self):
        return str(self.chat_id)


class Message(models.Model):
    message = models.TextField()
    chat = models.ForeignKey('Chat', on_delete=models.CASCADE, null=True)
    user_id = models.ForeignKey('users.Client', on_delete=models.CASCADE)
    create_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.message
