from django.db import models
import django
from django.contrib.auth.models import AbstractUser


class Client(AbstractUser):

    birthday = models.DateTimeField(null=True, blank=True)
    biography = models.CharField(max_length=250, null=True, blank=True)
    contacts = models.ManyToManyField('Client', blank=True)
