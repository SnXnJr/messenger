# Generated by Django 4.0.1 on 2022-04-18 21:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chats', '0001_initial'),
        ('users', '0007_alter_clients_contacts'),
    ]

    operations = [
        migrations.AddField(
            model_name='clients',
            name='chats',
            field=models.ManyToManyField(blank=True, related_name='chats_ids', to='chats.Chat'),
        ),
    ]
