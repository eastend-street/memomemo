# Generated by Django 2.1.7 on 2019-07-09 02:44

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0020_bookmark_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookmark',
            name='user',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='bookmarks', to=settings.AUTH_USER_MODEL),
        ),
    ]