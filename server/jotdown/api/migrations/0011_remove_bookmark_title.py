# Generated by Django 2.1.7 on 2019-03-19 06:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_bookmark_title'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='bookmark',
            name='title',
        ),
    ]
