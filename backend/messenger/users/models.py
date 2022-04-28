from django.db import models
import django
from django.contrib.auth.models import AbstractUser, User
from django.contrib.auth import get_user_model


class Client(AbstractUser):

    # first_name = models.CharField(max_length=50, )
    # last_name = models.CharField(max_length=50, null=True, blank=True)
    birthday = models.DateTimeField(null=True, blank=True)
    biography = models.CharField(max_length=250, null=True, blank=True)
    contacts = models.ManyToManyField('Client', blank=True)
