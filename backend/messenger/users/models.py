from django.db import models


class Clients(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50, null=True, blank=True)
    birthday = models.DateTimeField(null=True, blank=True)
    biography = models.CharField(max_length=250, null=True, blank=True)
    contacts = models.ManyToManyField('Clients', blank=True)

    def __str__(self):
        return self.first_name
