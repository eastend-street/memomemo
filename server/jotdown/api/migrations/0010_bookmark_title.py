# Generated by Django 2.1.7 on 2019-03-19 06:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_remove_bookmark_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='bookmark',
            name='title',
            field=models.CharField(default='', max_length=300),
            preserve_default=False,
        ),
    ]