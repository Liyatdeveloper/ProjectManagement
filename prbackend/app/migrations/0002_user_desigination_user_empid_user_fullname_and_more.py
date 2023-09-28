# Generated by Django 4.2.4 on 2023-09-28 11:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='desigination',
            field=models.CharField(default='', max_length=225),
        ),
        migrations.AddField(
            model_name='user',
            name='empID',
            field=models.CharField(max_length=225, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='fullname',
            field=models.CharField(default='', max_length=225),
        ),
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AlterField(
            model_name='user',
            name='role',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.CharField(default='', max_length=225),
        ),
    ]