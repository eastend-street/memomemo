# Generated by Django 2.1.7 on 2019-03-19 06:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20190309_2014'),
    ]

    operations = [
        migrations.AddField(
            model_name='bookmark',
            name='title',
            field=models.CharField(default=None, max_length=300),
        ),
    ]
