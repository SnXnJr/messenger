# Generated by Django 4.0.1 on 2022-04-18 19:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_alter_clients_biography_alter_clients_birthday_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='clients',
            name='contacts',
        ),
        migrations.AddField(
            model_name='clients',
            name='contacts',
            field=models.ManyToManyField(blank=True, null=True, to='users.Clients'),
        ),
    ]
